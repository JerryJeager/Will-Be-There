import React from 'react'

export const Button = (props) => {
  return (
    <div>
        <button className='bg-[#0D35FB] text-white w-[11rem]  md:w-[14rem] p-[0.8rem] md:p-[1rem] md:px-[1.5rem] md:py-[1rem] rounded-lg hover:shadow-xl shadow-[#0D35FB] duration-200 active:scale-100 hover:bg-opacity-80'>{props.text}</button>
    </div>
  )
}
