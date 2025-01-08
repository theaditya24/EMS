import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='w-[25%] bg-red-400 rounded-xl px-9 py-6'>
          <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
          <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[25%] bg-orange-500 rounded-xl px-9 py-6'>
          <h2 className='text-3xl font-bold'>{data.taskCounts.completed}</h2>
          <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[25%] bg-lime-400 rounded-xl px-9 py-6'>
          <h2 className='text-3xl text-black font-bold'>{data.taskCounts.active}</h2>
          <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
      <div className='w-[25%] bg-sky-950 rounded-xl px-9 py-6'>
          <h2 className='text-3xl font-bold'>{data.taskCounts.failed}</h2>
          <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers