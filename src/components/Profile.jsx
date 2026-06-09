import React from 'react'
import EditProfile from './EditProfile'
import UserCard from './UserCard'
import { useSelector } from 'react-redux'

function Profile() {
const user = useSelector(store => store.user)

  return (
    user && <div className='flex justify-center gap-3 w-full my-4 items-center'>
        <EditProfile user={user}/>
       
    </div>
  )
}

export default Profile