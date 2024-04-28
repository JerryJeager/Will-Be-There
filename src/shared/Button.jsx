import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button {...props} className='bg-[#0D35FB] text-white p-3 px-4 rounded-lg hover:shadow-xl shadow-[#0D35FB] duration-200 active:scale-100 hover:bg-opacity-80 font-semibold'>{props.text}</button>
    </div>
  )
}
