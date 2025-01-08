import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasks = ({data}) => {
  return (
    <div id='task' className='h-[55%] overflow-x-auto flex items-center justify-start w-full  mt-24 py-6 gap-4 flex-nowrap'>
      {/* <div className='flex-shrink-0 p-5 h-full w-[350px] bg-rose-800 rounded-xl '>
        <div className='flex items-center justify-between '>
          <h3 className='bg-red-500 px-3 py-1 rounded-2xl text-sm'>High</h3>
          <h4 className='font-medium text-lg'>20 feb 2025</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-10'>Make a youtube video</h2>
        <p className='text-sm mt-3 w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, hic! Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='flex-shrink-0 p-5 h-full w-[350px] bg-violet-700 rounded-xl '>
        <div className='flex items-center justify-between '>
          <h3 className='bg-red-500 px-3 py-1 rounded-2xl text-sm'>High</h3>
          <h4 className='font-medium text-lg'>20 feb 2025</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-10'>Make a youtube video</h2>
        <p className='text-sm mt-3 w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, hic! Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='flex-shrink-0 p-5 h-full w-[350px] bg-indigo-600 rounded-xl '>
        <div className='flex items-center justify-between '>
          <h3 className='bg-red-500 px-3 py-1 rounded-2xl text-sm'>High</h3>
          <h4 className='font-medium text-lg'>20 feb 2025</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-10'>Make a youtube video</h2>
        <p className='text-sm mt-3 w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, hic! Lorem ipsum dolor sit amet.</p>
      </div> */}

      {/* <div className='flex-shrink-0 p-5 h-full w-[350px] bg-cyan-500 rounded-xl '>
        <div className='flex items-center justify-between '>
          <h3 className='bg-red-500 px-3 py-1 rounded-2xl text-sm'>High</h3>
          <h4 className='font-medium text-lg'>20 feb 2025</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-10'>Make a youtube video</h2>
        <p className='text-sm mt-3 w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, hic! Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='flex-shrink-0 p-5 h-full w-[350px] bg-emerald-400 rounded-xl '>
        <div className='flex items-center justify-between '>
          <h3 className='bg-red-500 px-3 py-1 rounded-2xl text-sm'>High</h3>
          <h4 className='font-medium text-lg'>20 feb 2025</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-10'>Make a youtube video</h2>
        <p className='text-sm mt-3 w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, hic! Lorem ipsum dolor sit amet.</p>
      </div>
      
      <div className='flex-shrink-0 p-5 h-full w-[350px] bg-rose-800 rounded-xl '>
        <div className='flex items-center justify-between '>
          <h3 className='bg-red-500 px-3 py-1 rounded-2xl text-sm'>High</h3>
          <h4 className='font-medium text-lg'>20 feb 2025</h4>
        </div>
        <h2 className='text-2xl font-semibold mt-10'>Make a youtube video</h2>
        <p className='text-sm mt-3 w-[85%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, hic! Lorem ipsum dolor sit amet.</p>
      </div> */}

{data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }

            })}
      
    </div>
  )
}

export default Tasks