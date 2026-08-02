import React from 'react'

const AcceptTask = ({data}) => {


  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-blue-700 text-sm px-3 py-1 rounded'>
        {data.category}
        </h3>

        <h4 className='text-sm text-white'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-semibold text-white'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-2 text-gray-100 leading-5'>
      {data.taskDescription}
       </p>

      <div className='flex justify-between gap-3 mt-6'>
        <button className='flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-medium transition'>
        Mark as  Completed
        </button>

        <button className='flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-medium transition'>
        Mark as  Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask