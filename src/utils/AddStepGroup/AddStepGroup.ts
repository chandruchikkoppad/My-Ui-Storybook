import { ffid } from "../ffID/ffid";

export const addPrePostStepGroup = (
    steps: any[],
    stepId: string,
    newStep: any[]
): any[] => {
    //!Note : This function is used to override the stepId because in some step Groups we are using the same stepId for multiple steps. So we need to override the stepId for the new steps.
    let newSteps = newStep?.map((step) => ({ ...step, stepId: ffid() }))

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