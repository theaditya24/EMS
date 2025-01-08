import React, { useEffect, useState } from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'
import { getLocalStorage } from '../../utils/LocalStorage'

const AdminDash = (props) => {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const { admin } = getLocalStorage();
    setAdminData(admin[0]); // Assuming there's only one admin
  }, []);

  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser={props.changeUser} data={adminData} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDash