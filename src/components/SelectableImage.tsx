import React from "react";

type Props = {
  selectableRef: any;
  isSelected: any;
  children: any;
};

const SelectableImage = ({ children, isSelected, selectableRef }: Props) => {
  return (
    <div
      ref={selectableRef}
      style={{
        border: isSelected ? "2px solid #007bff" : "2px solid transparent",
        margin: 10,
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
};

export default SelectableImage;
