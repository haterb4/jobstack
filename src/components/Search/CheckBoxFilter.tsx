import React, { useState } from 'react'
import RadioInput from '../RadioInput';
import CheckboxInput from '../CheckboxInput';
interface RadioFilterProps {
    active: boolean;
    index: number;
    onChange: Function;
    filter: {
        title: string;
        id: string;
    }
}

const CheckBoxFilter = (props: RadioFilterProps) => {
  return (
    <div className='flex items-center my-4'>
        <CheckboxInput
            isToggled={props.active}
            onToggle={() => {
                props.onChange(props.index)
            }}
            htmlFor={props.filter.id}
            label={props.filter.title}
        />
    </div>
  )
}

export default CheckBoxFilter