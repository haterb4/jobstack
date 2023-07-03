'use client'

import React, { useState } from 'react'
import ToggleSwitch from '../ToggleSwitch'
interface ToggleFilterProps {
    active: boolean;
    toggler: Function;
    index: number;
    label: string
}

const ToggleFilter = (props: ToggleFilterProps) => {
  const [isActive, setIsActive] = useState(props.active)
  return (
    <div className='flex items-center my-4'>
        <ToggleSwitch    isToggled={isActive} onToggle={() => {
                setIsActive((previous) => !previous)
                props.toggler(props.index)
            }}
        />
        <h2 className='capitalize ml-3'>{props.label}</h2>
    </div>
  )
}

export default ToggleFilter