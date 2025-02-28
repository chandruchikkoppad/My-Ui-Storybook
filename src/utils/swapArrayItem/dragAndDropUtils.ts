export const rearrangeDragItem = (
    initialArray: any[],
    oldIndex: number,
    newIndex: number
): any[] => {
    const updatedData = [...initialArray];
    const movedItem = updatedData[oldIndex];
    updatedData.splice(oldIndex, 1);
    updatedData.splice(newIndex, 0, movedItem);
    return updatedData;
};