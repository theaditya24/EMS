import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import Tasks from '../TaskList/Tasks'

const EmployeeDash = (props) => {
  return (
    <div className='p-14 bg-[#1C1C1C] h-screen'>
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumbers data={props.data} />
      <Tasks data={props.data}/>
    </div>
  )
}

export default EmployeeDash