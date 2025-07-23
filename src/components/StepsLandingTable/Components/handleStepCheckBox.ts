
const getEndNlpName = (row: any): string => {
    const nlpMapping: Record<string, string> = {
        IfCondition: 'EndIfCondition',
        StartForLoop: 'EndForLoop',
        StartIteration: 'EndIteration',
        ElseIfCondition: 'EndElseIfCondition',
        ElseCondition: 'EndElseCondition'
    };
    return nlpMapping[row.nlpName] || row.nlpName;
};
const isElseIfConditions = (row: any): boolean => {
    return ['ElseIfCondition', 'ElseCondition'].includes(row?.nlpName)
}
const getStepsTableData = (tableData: any, sectionTitle = 'Steps'): any[] => {
    const section = tableData.find((item: any) => item?.title === sectionTitle);
    return section?.data ?? [];
};
const getBlockMap = (tableData: any) => {
    let getStepData = getStepsTableData(tableData);
    const blockMap = new Map<
        string,
        { start: any; end: any; childIds: string[]; allIds: string[] }
    >();
    // Returns a key for grouping steps.
    const getBlockKey = (step: any): string | null =>
        step.specialNlpId ?? step.conditionSearchKey ?? null;

    // Finds the corresponding end row based on the start row.
    const getEndNlpRowData = (row: any): any | null => {
        const endNlpName = getEndNlpName(row);
        const steps = getStepData;

        if (row?.conditionId !== undefined && row?.conditionSearchKey !== undefined && !row.specialNlpId) {
            const conditionKey =
                row.conditionId === row.conditionSearchKey
                    ? row.conditionId
                    : row.conditionSearchKey;
            return steps.find(
                (item: any) =>
                    item.conditionSearchKey === conditionKey && item.nlpName === endNlpName
            ) || null;
        }

        // For for-loop steps using specialNlpId.
        if (row.specialNlpId) {
            return (
                steps.find(
                    (item: any) =>
                        item.specialNlpId === row.specialNlpId && item.nlpName === endNlpName
                ) || null
            );
        }
        return null;
    };

    // Retrieves the child step IDs between a start and an end row.
    const getChildIds = (startRow: any, endRow: any, childOnly: boolean): string[] => {
        const steps = getStepData;
        const startIndex = steps.findIndex((item: any) => item.stepId === startRow?.stepId);
        const endIndex = steps.findIndex((item: any) => item.stepId === endRow?.stepId);
        return childOnly
            ? steps.slice(startIndex + 1, endIndex).map((item: any) => item.stepId)
            : steps.slice(startIndex, endIndex + 1).map((item: any) => item.stepId);
    };

    getStepData?.forEach((step: any) => {
        const key = getBlockKey(step);
        if (!key) return;

        const blockEntry =
            blockMap.get(key) || { start: null, end: null, childIds: [], allIds: [] };

        // If this is a starting special NLP step, determine its matching end and children.
        if (step?.isSpecialNlp && step.name?.startsWith('Start')) {
            blockEntry.start = step;
            const correspondingEndRow = getEndNlpRowData(step);
            if (correspondingEndRow) {
                blockEntry.end = correspondingEndRow;
                blockEntry.childIds = getChildIds(step, correspondingEndRow, true);
                blockEntry.allIds = getChildIds(step, correspondingEndRow, false);
            }
        }
        blockMap.set(key, blockEntry);
    });
    return blockMap
}

const getParentConditionKey = (key: string): string =>
    key.includes('/') ? key.split('/').slice(0, -1).join('/') : key;

export const updateCheckboxStatus = (
    tableData: any,
    row: any,
    isChecked: boolean,
    selectedRows: any,
    stepPartialSelect: any,
    sectionTitle: string = 'Steps'
) => {
    // Create a new Set from the current selection for the given section.
    const updatedSelectSet = new Set(selectedRows[sectionTitle]);
    // Only run the special NLP handling if we're in the Steps section and the row qualifies.
    if (
        sectionTitle === 'Steps' &&
        (row?.isSpecialNlp || row?.conditionId || row?.parentSpecialNlpId)
    ) {
        const { updateStepPartialSelect } = handleSpecialNlp(row);
        return { updateSelectRow: { ...selectedRows, [sectionTitle]: updatedSelectSet }, updateStepPartialSelect };
    }

    // For regular rows, update the set based on the isChecked flag.
    isChecked ? updatedSelectSet.add(row.stepId) : updatedSelectSet.delete(row.stepId);
    return { updateSelectRow: { ...selectedRows, [sectionTitle]: updatedSelectSet } };

    // ----------------------- Helper functions -----------------------

    function handleSpecialNlp(currentRow: any) {
        const updateStepPartialSelect = new Set(stepPartialSelect);
        const blockMap = getBlockMap(tableData);

        // Recursively update children based on parent condition.
        const updateIfCondition = (row: any): void => {
            const key = row?.conditionSearchKey;
            const parentKey = getParentConditionKey(key);
            const parentData = blockMap.get(parentKey);
            if (parentData) {
                updateChild(parentData.start);
                if (
                    parentData.start?.conditionSearchKey?.includes('/') &&
                    parentData.start.nlpName !== 'IfCondition'
                ) {
                    updateIfCondition(parentData.start);
                }
            }
        };

        // Updates the child selection for a given row.
        const updateChild = (row: any): void => {
            if (row?.isSpecialNlp) {
                const key = row?.specialNlpId || row?.conditionSearchKey;
                const blockEntry = key && blockMap.get(key);
                if (blockEntry && Array.isArray(blockEntry.allIds)) {
                    blockEntry.allIds.forEach((id: any) => {
                        updateStepPartialSelect.delete(id);
                        isChecked ? updatedSelectSet.add(id) : updatedSelectSet.delete(id);
                    });
                }
            } else {
                isChecked ? updatedSelectSet.add(row?.stepId) : updatedSelectSet.delete(row?.stepId);
            }
        };

        // Recursively update parent selections based on the current row.
        const updateParent = (updateParentData: any): void => {
            let visited = true
            const recursiveUpdate = (parentData: any): void => {
                const childIds: string[] = parentData?.childIds;
                // For ElseIf or Else conditions, trigger a recursive update if needed.
                if (isElseIfConditions(parentData?.start)) {
                    if (isChecked) updateIfCondition(currentRow);
                }
                if (childIds?.length === 0) return;
                const allChildrenChecked = childIds.every((id) => updatedSelectSet.has(id));
                const someChildrenChecked = childIds.some((id) => updatedSelectSet.has(id));
                if (allChildrenChecked) {
                    updatedSelectSet.add(parentData.start?.stepId);
                    updatedSelectSet.add(parentData.end?.stepId);
                } else {
                    updatedSelectSet.delete(parentData.start?.stepId);
                    updatedSelectSet.delete(parentData.end?.stepId);
                }

                if (someChildrenChecked && !allChildrenChecked) {
                    updateStepPartialSelect.add(parentData.start?.stepId);
                    updateStepPartialSelect.add(parentData.end?.stepId);
                } else {
                    updateStepPartialSelect.delete(parentData.start?.stepId);
                    updateStepPartialSelect.delete(parentData.end?.stepId);
                }

                // Recurse upward if there is a parent reference.
                if (parentData?.start?.parentSpecialNlpId) {
                    const grandParent = blockMap.get(parentData.start.parentSpecialNlpId);
                    if (grandParent) recursiveUpdate(grandParent);
                }

                if (parentData?.start?.conditionSearchKey) {
                    const parentKey = getParentConditionKey(parentData?.start?.conditionSearchKey);
                    let conditionSearchKey = parentData?.start?.conditionSearchKey;
                    let conditionId = parentData?.start?.conditionId;
                    if (conditionSearchKey === conditionId && visited) {
                        visited = false;
                        const grandParent = blockMap.get(parentKey);
                        if (grandParent) recursiveUpdate(grandParent);
                        return;
                    }
                    // Skip if conditionSearchKey equals conditionId.
                    if (conditionSearchKey === conditionId) return;
                    const grandParent = blockMap.get(parentKey);
                    if (grandParent) recursiveUpdate(grandParent);
                    return;
                }
            };
            //isParent if isChild
            if (
                updateParentData?.conditionSearchKey === updateParentData?.conditionId && !updateParentData?.parentSpecialNlpId && updateParentData?.specialNlpId
            ) {
                const parentData = blockMap.get(updateParentData?.conditionSearchKey);
                if (parentData) {
                    recursiveUpdate(parentData);
                }
                return;
            }
            if (!updateParentData?.conditionSearchKey && !updateParentData?.conditionId && updateParentData?.specialNlpId && !updateParentData?.parentSpecialNlpId) {
                return;
            }
            if (
                updateParentData?.conditionSearchKey && updateParentData?.conditionSearchKey === updateParentData?.conditionId && updateParentData?.conditionId && updateParentData?.specialNlpId
            ) {
                const parentData = blockMap.get(updateParentData?.conditionSearchKey);
                if (parentData) {
                    recursiveUpdate(parentData);
                }
            }
            if (updateParentData?.parentSpecialNlpId) {
                const parentData = blockMap.get(updateParentData?.parentSpecialNlpId);
                if (parentData) {
                    recursiveUpdate(parentData);
                }
            }
            if (updateParentData?.conditionSearchKey) {
                const searchKey = (row?.isSpecialNlp && !isElseIfConditions(updateParentData) && !row?.specialNlpId)
                    ? getParentConditionKey(updateParentData.conditionSearchKey)
                    : updateParentData.conditionSearchKey;
                visited = true;
                const parentData = blockMap.get(searchKey);
                if (parentData) {
                    recursiveUpdate(parentData);
                    return;
                }
            }
        };
        updateChild(currentRow);
        updateParent(currentRow);

        return { updateStepPartialSelect };
    }
};


export function getUpdatedSelectedRows(tableData: any, prevSelectedRows: any) {
    const updatedSelected: Record<string, Set<any>> = {};
    tableData.forEach((section: any) => {
        const currentRowIds = section.data.map((row: any) => row.stepId);
        const previousSet = prevSelectedRows[section.title] || new Set();
        const newSet = new Set([...previousSet].filter((id) => currentRowIds.includes(id)));
        updatedSelected[section.title] = newSet;
    });
    return updatedSelected;
}

export function getUpdatedPartialSelect(tableData: any, prevPartialSelect: any) {
    const allCurrentIds = tableData.reduce((acc: any, section: any) => {
        section.data.forEach((row: any) => acc.add(row.stepId));
        return acc;
    }, new Set());
    return new Set([...prevPartialSelect].filter((id) => allCurrentIds.has(id)));
}

export function getUpdatedExpandedRows(
    tableData: any[],
    prevExpandedRows: Record<string, boolean>,
    defaultExpanded: string
): Record<string, boolean> {
    const sectionTitlesToExpand: Record<string, string> = {
        Steps: 'Steps',
        Depends: 'Depends on Scripts',
        PRE: 'Pre Conditions',
        POST: 'Post Conditions',
    };

    const newExpandedRows: Record<string, boolean> = {};

    tableData.forEach((section) => {
        const title = section.title;

        const wasPreviouslyExpanded = title in prevExpandedRows;
        const shouldExpandByDefault =
            defaultExpanded === 'All'
                ? Object.values(sectionTitlesToExpand).includes(title)
                : title === sectionTitlesToExpand[defaultExpanded];

        newExpandedRows[title] = wasPreviouslyExpanded
            ? prevExpandedRows[title] ?? false
            : shouldExpandByDefault;
    });

    return newExpandedRows;
}

export const hasSelectedIds = (rows?: { [key: string]: Set<string> }): boolean => {
    if (!rows) return false;
    for (const set of Object.values(rows)) {
        if (set && set.size > 0) return true;
    }
    return false;
}


export const gettingBlockMap = (tableData: any, selectedRows: any,
    stepPartialSelect: any): any => {
    let dynamicUpdate = getBlockMap(tableData);
    const updatedSelectedRows = new Set(selectedRows.Steps);
    const updateStepPartialSelect = new Set(stepPartialSelect);
    dynamicUpdate?.forEach((blockEntry: any) => {
        const childIds: string[] = blockEntry?.childIds;
        if (childIds?.length === 0) return;
        const allChildrenChecked = childIds.every((id) => updatedSelectedRows.has(id));
        const someChildrenChecked = childIds.some((id) => updatedSelectedRows.has(id));
        if (allChildrenChecked) {
            updatedSelectedRows.add(blockEntry.start.stepId);
            updatedSelectedRows.add(blockEntry.end.stepId);
        } else {
            updatedSelectedRows.delete(blockEntry.start.stepId);
            updatedSelectedRows.delete(blockEntry.end.stepId);
        }
        if (isElseIfConditions(blockEntry?.start) && (someChildrenChecked || allChildrenChecked)) {
            const key = blockEntry?.start?.conditionSearchKey;
            const parentKey = getParentConditionKey(key);
            const parentData = dynamicUpdate?.get(parentKey)?.allIds;
            if (parentData?.length === 0) return;
            parentData?.forEach((stepId: string) => {
                updatedSelectedRows.add(stepId);
                updateStepPartialSelect.delete(stepId);
            })
        }
        if (someChildrenChecked && !allChildrenChecked) {
            updateStepPartialSelect.add(blockEntry.start.stepId);
            updateStepPartialSelect.add(blockEntry.end.stepId);
        } else {
            updateStepPartialSelect.delete(blockEntry.start.stepId);
            updateStepPartialSelect.delete(blockEntry.end.stepId);
        }
    })
    return { updateSelectRow: { ...selectedRows, ['Steps']: updatedSelectedRows }, updateStepPartialSelect };
}