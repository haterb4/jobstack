import React from "react";

const ToggleSwitch = ({isToggled, onToggle}: {isToggled: boolean, onToggle: any}) => {
    return (
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    );
  };

export default ToggleSwitch;