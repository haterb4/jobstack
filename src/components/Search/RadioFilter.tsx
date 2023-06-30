import React, { useState } from 'react'
import RadioInput from '../RadioInput';
interface RadioFilterProps {
    active: boolean;
    index: number;
    onChange: Function;
    filter: {
        title: string;
        id: string;
    }
}

const RadioFilter = (props: RadioFilterProps) => {
  return (
    <div className='flex items-center my-4'>
        <RadioInput
            isToggled={props.active}
            onToggle={() => {
                props.onChange(props.index)
            }}
            htmlFor={props.filter.id}
        />
        <h2 className='capitalize ml-3'>{props.filter.title}</h2>
    </div>
  )
}

export default RadioFilter