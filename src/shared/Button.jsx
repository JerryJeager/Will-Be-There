import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button className='bg-[#0D35FB] text-white p-2 rounded-lg hover:shadow-xl shadow-[#0D35FB] duration-200 active:scale-100 hover:bg-opacity-80'>{props.text}</button>
    </div>
  )
}
