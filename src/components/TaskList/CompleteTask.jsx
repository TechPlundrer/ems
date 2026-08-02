import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-500 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-emerald-700 text-white text-sm px-3 py-1 rounded'>
        {data.category}
        </h3>

        <h4 className='text-sm text-emerald-100'>
        {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold text-white'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-2 text-emerald-50 leading-5'>
      {data.taskDescription}
        </p>

      <div className='mt-6'>
        <button
          className='w-full py-2 rounded-lg bg-emerald-700 text-white font-semibold cursor-not-allowed'
        >
          Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask