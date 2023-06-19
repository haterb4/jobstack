"use client"

import React from 'react'
interface ButtonProps {
    text: string;
    handleClick?: Function
    containerClass?: string;
}

const Button:React.FC<ButtonProps> = ({text, handleClick}) => {
  return (
    <button onClick={() => { handleClick && handleClick() }} className="px-12 py-3 pt-4 rounded-md bg-blue-600 text-white capitalize">
        {text}
    </button>
  )
}

export default Button