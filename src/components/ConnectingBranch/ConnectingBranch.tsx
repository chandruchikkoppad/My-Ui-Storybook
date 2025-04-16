import React, { useEffect, useRef, useState } from 'react';
import './ConnectingBranch.scss';
import {
  ConnectBranchProps,
  MachineData,
  MachineInstance,
  indexType,
} from './types';
import { ArcherContainer, ArcherElement } from 'react-archer';
import MachineInstances from './BranchComponents/MachineInstances';
import Typography from '../Typography';
import { ffid } from '../../utils/ffID/ffid';
import { checkEmpty } from '../../utils/checkEmpty/checkEmpty';

const ConnectingBranch: React.FC<ConnectBranchProps> = ({
  data: machineData,
  noOfScripts,
  getChildNodeComponent,
  getParentNodeComponent,
  getParentNodeComponentActionItems,
  childNodeCurveHeight = 1.28,
  isReadOnlyMode = false,
}) => {
  const datasetRef = useRef<HTMLDivElement | null>(null);
  const [datasetHeight, setDatasetHeight] = useState<number>(0);
  const [curveHeights, setCurveHeights] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const calculateVerticalLineHeight = (
    machineInstances: MachineInstance[],
    datasetHeight: number,
    gap: number
  ): number => {
    if (machineInstances.length === 1 && isReadOnlyMode) {
      return 0;
    }

    const totalDataSets = machineInstances.reduce(
      (acc, instance, index) =>
        acc +
        (index !== machineInstances.length - 1 || !isReadOnlyMode
          ? instance.runLevelExecutionDataSets?.length || 0
          : 0),
      0
    );

    return totalDataSets * (datasetHeight + gap);
  };

  useEffect(() => {
    if (datasetRef.current) {
      setDatasetHeight(datasetRef.current.offsetHeight);
    }
  }, [machineData]);

  const calculateCurveHeight = () => {
    const heights = itemRefs.current.map((_, index) => {
      if (index === 0) return 0;
      return datasetHeight * childNodeCurveHeight;
    });
    setCurveHeights(heights);
  };

  useEffect(() => {
    calculateCurveHeight();
  }, [datasetHeight, machineData]);

  const calculateRowSpan = (machine: MachineData): number => {
    const baseRows = 1;
    const childrenRows = machine.machineInstances?.length + 1 || 0;
    return baseRows + childrenRows;
  };
  let currentRow = 1;
  const calculateRowSpanOnlyView = (parentNodeData: MachineData): number => {
    if (
      !parentNodeData?.machineInstances ||
      checkEmpty(parentNodeData.machineInstances)
    ) {
      return 1;
    }
    return parentNodeData.machineInstances.length;
  };

  const totalRows = machineData?.machines?.selectedMachines.reduce(
    (sum: number, parentNodeData: MachineData) => {
      if (!isReadOnlyMode) {
        return sum + calculateRowSpan(parentNodeData);
      } else {
        return sum + calculateRowSpanOnlyView(parentNodeData);
      }
    },
    0
  );
  const centerRow = Math.round(totalRows / 2);
  let dynamicTop =
    (centerRow === 1 && isReadOnlyMode && totalRows === 2) ||
    (centerRow === 1 && !isReadOnlyMode && totalRows === 2);

  return (
    <div className="connecting-branch-container">
      <ArcherContainer
        strokeColor="var(--brand-color)"
        strokeWidth={1}
        startMarker={true}
        endMarker={false}
        noCurves
      >
        <div className="ff-connecting-branch-grid-container">
          <ArcherElement id="rootNode">
            <div
              className="ff-grid-item ff-dynamic-item"
              style={{
                gridRow: centerRow,
                top: dynamicTop ? '44px' : '',
              }}
            >
              <div className="ff-script-count-container">
                <div className="ff-script-count-box">
                  <Typography>
                    {noOfScripts}
                  </Typography>
                  <Typography>Scripts</Typography>
                </div>
              </div>
            </div>
          </ArcherElement>

          {machineData?.machines?.selectedMachines.map(
            (parentNodeData: MachineData, parentNodeIndex: indexType) => {
              const rowStart = currentRow;
              const rowSpan = calculateRowSpan(parentNodeData);
              currentRow += rowSpan;
              const gap = 16;
              const verticalLineHeight = calculateVerticalLineHeight(
                parentNodeData?.machineInstances,
                datasetHeight,
                gap
              );
              return (
                <React.Fragment key={ffid()}>
                  <div
                    className="ff-selectedMachines"
                    style={{
                      gridRow: `${rowStart} / span ${rowSpan}`,
                    }}
                  >
                    <div className="ff-selectedMachines-input">
                      <div
                        className={`ff-input-box-container ${
                          !parentNodeData?.machineInstances.length
                            ? 'ff-input-box-aligned'
                            : ''
                        }`}
                      >
                        <ArcherElement
                          id={`parentnode${parentNodeIndex}`}
                          key={ffid()}
                          relations={[
                            {
                              targetId: 'rootNode',
                              targetAnchor: 'left',
                              sourceAnchor: 'left',
                            },
                          ]}
                        >
                          {/* Todo: here  we will add select dropdown */}
                          {getParentNodeComponent({
                            isMultiSelect: false,
                            parentNodeData,
                            parentNodeIndex,
                          })}
                        </ArcherElement>
                        {getParentNodeComponentActionItems({
                          parentNodeData,
                          parentNodeIndex,
                        })}
                      </div>
                    </div>
                    <MachineInstances
                      parentNodeIndex={parentNodeIndex}
                      parentNodeData={parentNodeData}
                      verticalLineHeight={verticalLineHeight}
                      datasetHeight={datasetHeight}
                      curveHeights={curveHeights}
                      itemRefs={itemRefs}
                      datasetRef={datasetRef}
                      getChildNodeComponent={getChildNodeComponent}
                      isReadOnlyMode={isReadOnlyMode}
                    />
                  </div>
                </React.Fragment>
              );
            }
          )}
          {/* Select Machine Input */}
          {!isReadOnlyMode && (
            <div
              className="ff-select-machine-input"
              style={{
                gridRow: `${currentRow}`,
              }}
            >
              <ArcherElement
                id="lastNode"
                relations={[
                  {
                    targetId: 'rootNode',
                    targetAnchor: 'left',
                    sourceAnchor: 'left',
                  },
                ]}
              >
                <div>{getParentNodeComponent({ isMultiSelect: true })}</div>
              </ArcherElement>
            </div>
          )}
        </div>
      </ArcherContainer>
    </div>
  );
};

export default ConnectingBranch;
