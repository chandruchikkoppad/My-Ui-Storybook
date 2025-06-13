import React from "react";
import "./OsTree.scss";
import { OsTreeProps } from "./type";

const OsTree: React.FC<OsTreeProps> = ({
  rootLabel,
  childrenLabels,
  align = "center",
  direction = "horizontal",
}) => {
  const count = childrenLabels.length;

  if (direction === "vertical") {
    return (
      <div
        className="ff-os-tree-vertical"
        style={{ "--child-count": count } as React.CSSProperties}
      >
        <div className={`ff-os-tree-vertical__row ff-os-tree-vertical__row--${align}`}>
          <div className="ff-os-tree-vertical__root-label">{rootLabel}</div>
          <div className="ff-os-tree-vertical__horizontal-line" />
        </div>
        <div className="ff-os-tree-vertical__vertical-line-wrapper">
          <div className="ff-os-tree-vertical__vertical-line" />
          {childrenLabels.map((label, index) => (
            <div key={index} className="ff-os-tree-vertical__child">
              <div className="ff-os-tree-vertical__child-connector" />
              <div className="ff-os-tree-vertical__child-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`ff-os-tree ff-os-tree--${align}`}
      style={{ "--child-count": count } as React.CSSProperties}
    >
      <div className="ff-os-tree__root-wrapper">
        <div className="ff-os-tree__root-label">{rootLabel}</div>
        <div className="ff-os-tree__vertical-root" />
      </div>

      <div className="ff-os-tree__horizontal-connector">
        {childrenLabels.map((_, index) => (
          <div key={index} className="ff-os-tree__vertical-child" />
        ))}
      </div>

      <div className="ff-os-tree__children">
        {childrenLabels.map((label, index) => (
          <div key={index} className="ff-os-tree__child-container">
            <div className="ff-os-tree__child-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OsTree;
