export const rearrangeDragItem = (
    initialArray: any[],
    oldIndex: number,
    newIndex: number,
): any[] => {
    const updatedData = [...initialArray];
    const movedItem = updatedData[oldIndex];
    let execOrder: number;

    if (!updatedData[newIndex + 1]) {
        execOrder = updatedData[newIndex].executionOrder + 1;
    } else if (!updatedData[newIndex - 1]) {
        execOrder = updatedData[newIndex].executionOrder / 2;
    } else {
        if (newIndex > oldIndex) {
            execOrder =
                (updatedData[newIndex].executionOrder +
                    updatedData[newIndex + 1].executionOrder) /
                2;
        } else {
            execOrder =
                (updatedData[newIndex].executionOrder +
                    updatedData[newIndex - 1].executionOrder) /
                2;
        }
    }

    const updatedItem: any = {
        ...movedItem,
        executionOrder: execOrder,
        ...(movedItem._id ? { id: movedItem._id } : {})
    };

    updatedData.splice(oldIndex, 1);
    updatedData.splice(newIndex, 0, updatedItem);

    return updatedData;
};