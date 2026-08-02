import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl'>
      
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-700 text-white text-sm px-3 py-1 rounded'>
        {data.category}
        </h3>

        <h4 className='text-sm text-red-100'>
        {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold text-white'>
      {data.taskTitle}
      </h2>

      <p className='text-sm mt-2 text-red-50 leading-5'>
         {data.taskDescription}
        </p>

      <div className='mt-6'>
        <button
          className='w-full py-2 rounded-lg bg-red-700 text-white font-semibold cursor-not-allowed'
        >
          Failed
        </button>
      </div>

    </div>
  )
}

export default FailedTask