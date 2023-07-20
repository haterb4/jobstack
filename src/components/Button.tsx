"use client"

import React from 'react'
interface ButtonProps {
    text: string;
    handleClick?: Function
    containerClass?: string;
}

const Button:React.FC<ButtonProps> = (props) => {
  return (
    <button onClick={() => { props?.handleClick && props?.handleClick() }} className={`px-12 py-3 pt-4 rounded-md bg-blue-600 text-white capitalize ${props.containerClass}`}>
        {props.text}
    </button>
  )
}

export default Button