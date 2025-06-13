import Typography from '../../Typography';
import {
  indexType,
  MachineData,
  MachineInstancesProps,
  RunLevelExecutionDataSet,
} from '../types';

const MachineInstances: React.FC<MachineInstancesProps> = ({
  getChildNodeComponent,
  parentNodeIndex,
  parentNodeData,
  verticalLineHeight,
  datasetHeight,
  curveHeights,
  itemRefs,
  datasetRef,
  isReadOnlyMode,
}) => {
  return (
    <>
      {parentNodeData?.machineInstances?.length === 0 ? (
        <>
          {!isReadOnlyMode && (
            <>
              <div className="ff-selectedMachines-connecting-line">
                <div className="ff-line">
                  <div className="ff-left-icon ff-left-icon-aligned"></div>
                  <div className="ff-right-icon"></div>
                </div>
              </div>
              <div className="ff-machine-instance ff-machine-env-button">
                {getChildNodeComponent({
                  isButton: true,
                  parentNodeData,
                  parentNodeIndex,
                })}
              </div>
            </>
          )}
        </>
      ) : (
        parentNodeData?.machineInstances?.map(
          (childNodeData: MachineData, childNodeIndex: indexType) => {
            const isFirstLine = childNodeIndex === 0;
            return (
              <div className="ff-machine-instance-row">
                <div
                  className={`ff-selectedMachines-connecting-line ${
                    !isFirstLine ? 'ff-second-line' : ''
                  }`}
                >
                  <div className="ff-line">
                    <div
                      className={`ff-left-icon ${
                        isFirstLine ? 'ff-left-icon-aligned' : ''
                      }`}
                    ></div>
                    <div className="ff-right-icon"></div>
                  </div>

                  {isFirstLine && (
                    <div
                      className="ff-vertical-line"
                      style={{ height: `${verticalLineHeight}px` }}
                    ></div>
                  )}
                </div>

                <div className="ff-machine-instance">
                  {childNodeData.runLevelExecutionDataSets.map(
                    (
                      runLevelExecutionDataSet: RunLevelExecutionDataSet,
                      runLevelExecutionDataSetIndex: indexType
                    ) => (
                      <div
                        key={
                          runLevelExecutionDataSet?.runLevelExecutionDataSetId
                        }
                        className="ff-run-level-execution-dataset"
                        ref={
                          runLevelExecutionDataSetIndex === 0
                            ? datasetRef
                            : null
                        }
                      >
                        <div
                          className="ff-execution-item"
                          ref={(element) =>
                            (itemRefs.current[runLevelExecutionDataSetIndex] =
                              element)
                          }
                        >
                          <div
                            className="ff-curved-connector"
                            style={{ top: `${-datasetHeight}px` }}
                          >
                            <div
                              className={`ff-curve ff-connector-${runLevelExecutionDataSetIndex}`}
                              style={{
                                height: `${curveHeights[runLevelExecutionDataSetIndex]}px`,
                              }}
                            >
                              <div
                                className={`ff-curve-right-icon ff-curve-right-icon-${runLevelExecutionDataSetIndex}`}
                              ></div>
                              {childNodeData?.runScriptCount && (
                                <div className="ff-selectedMachines-connecting-line-text">
                                  <Typography fontSize={8} fontWeight="regular">
                                    {`${childNodeData.runScriptCount} Script${
                                      childNodeData.runScriptCount !== 1
                                        ? 's'
                                        : ''
                                    }`}
                                  </Typography>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="ff-run-data-box">
                            {getChildNodeComponent({
                              isButton: false,
                              childNodeData,
                              childNodeIndex,
                              runLevelExecutionDataSet,
                              runLevelExecutionDataSetIndex,
                              parentNodeData,
                              parentNodeIndex,
                            })}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {childNodeIndex ===
                  parentNodeData.machineInstances.length - 1 && (
                  <>
                    {!isReadOnlyMode && (
                      <>
                        <div className="ff-selectedMachines-connecting-line ff-second-line">
                          <div className="ff-line">
                            <div className="ff-left-icon"></div>
                            <div className="ff-right-icon"></div>
                          </div>
                        </div>

                        <div className="ff-machine-instance ff-machine-env-button">
                          {getChildNodeComponent({
                            isButton: true,
                            parentNodeData,
                            parentNodeIndex,
                            childNodeIndex: childNodeIndex + 1,
                          })}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            );
          }
        )
      )}
    </>
  );
};

export default MachineInstances;
