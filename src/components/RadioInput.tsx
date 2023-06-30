'use client'
import React from 'react'
interface RadioInputProps {
    isToggled: boolean;
    htmlFor: string;
    onToggle: any;
}

const RadioInput = (props: RadioInputProps) => {
  return (
    <div className="checkbox-wrapper-18">
        <div className="round">
            <input type="checkbox" id={props.htmlFor} checked={props.isToggled} onChange={props.onToggle}/>
            <label htmlFor={props.htmlFor}></label>
        </div>
    </div>
  )
}

export default RadioInput