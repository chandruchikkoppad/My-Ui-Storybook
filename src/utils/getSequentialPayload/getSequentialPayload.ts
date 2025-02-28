import { MachineExecutionInstance, SequentialMachineInstance } from './types';

export const getSequentialPayload = (
  data: MachineExecutionInstance[]
): SequentialMachineInstance[] => {
  return data.flatMap((item) =>
    item.runLevelExecutionDataSets.map((runLevel, index) => {
      const { runLevelExecutionDataSets, ...rest } = item;
      return {
        ...rest,
        ...runLevel,
        runCount: index + 1,
      };
    })
  );
};
