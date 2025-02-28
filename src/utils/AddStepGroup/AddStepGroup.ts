export const addPrePostStepGroup = (
    steps: any[],
    stepId: string,
    newSteps: any[]
): any[] => {
    return steps.map((step) => {
        if (step.stepId === stepId) {
            if (["Group", "PRE", "POST", 'Script'].includes(step.type)) {
                return {
                    ...step,
                    data: [...(newSteps || [])],
                };
            }
        }
        if (step.data) {
            return {
                ...step,
                data: addPrePostStepGroup(step.data, stepId, newSteps),
            };
        }
        return step;
    });
};

export const addStepGroup = (oldData: any[], title: string, stepId: string, newSteps: any[]): any[] => {
    return oldData.map((section) => {
        if (section.title === title) {
            return {
                ...section,
                data: addPrePostStepGroup(section.data, stepId, newSteps),
            };
        }
        return section;
    });
};