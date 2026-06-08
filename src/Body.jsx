import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Backend_Base_Url } from './utils/constent'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './utils/userSlice'
import Feed from './components/Feed'

function Body() {
   const dispatch = useDispatch()
   const navigate = useNavigate()
  const fetchUser = async ()=>{
    try{
      const res = await axios.get(Backend_Base_Url + '/profile', {
        withCredentials: true,
      })
      dispatch(addUser(res.data))
    }catch(err){
      if(err.status == 401){
        navigate('/login')
      }
      console.error(err)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body