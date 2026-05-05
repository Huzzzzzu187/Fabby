import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-slate-500'>{text1}</p> <span className='text-slate-900 font-bold'>{text2}</span>
      <p className='w-8 sm:w-12 h-[2px] bg-[var(--color-primary)] rounded-full'></p>
    </div>
  )
}

export default Title
