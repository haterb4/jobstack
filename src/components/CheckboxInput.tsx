'use client'
import React from 'react'
interface CheckboxInputProps {
    isToggled: boolean;
    htmlFor: string;
    onToggle: any;
    label: string;
}

const CheckboxInput = (props: CheckboxInputProps) => {
  return (
    <div className="checkbox-wrapper-46">
      <input className="inp-cbx" id={props.htmlFor} type="checkbox" />
      <label className="cbx" htmlFor={props.htmlFor}><span>
        <svg width="12px" height="10px" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg></span><span>{props.label}</span>
      </label>
    </div>
  )
}

export default CheckboxInput
