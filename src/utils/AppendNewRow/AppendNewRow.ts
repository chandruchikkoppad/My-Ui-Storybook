export const appendNewRow = (tableData: any, AddNlp: any) => {

    const { action, sourceIndex, nlpName, id } = AddNlp;

    if (!action) return tableData;

    const updatedTreeData = [...tableData];
    let newNodeBase = {
        stepId: 'stepId-9745-9745',
        isNew: true,
        disabled: false,
        ...(nlpName && { name: nlpName }),
        ...(id && { id: id }),
    }

    switch (action) {
        case 'addBelow':
            if (sourceIndex !== undefined) {
                updatedTreeData.splice(sourceIndex + 1, 0, newNodeBase);
            }
            break;

        case 'replaceNlp':
            if (sourceIndex !== undefined) {
                updatedTreeData.splice(sourceIndex, 0, newNodeBase);
            }
            break;
        case 'EditNlp':
            if (sourceIndex !== undefined) {
                updatedTreeData.splice(sourceIndex, 1);
                updatedTreeData.splice(sourceIndex, 0, newNodeBase);
            }
            break;

        case 'addLast':
            updatedTreeData.push(newNodeBase);
            break;

        default:
            break;
    }

    return updatedTreeData;
};