import axios from 'axios'
import React, { useEffect } from 'react'
import { Backend_Base_Url } from '../utils/constent'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

function Feed() {
  const dispatch = useDispatch()
   const feed = useSelector(store => store.feed)
  const fetchFeed = async () => {
   
    try {
      const res = await axios.get(Backend_Base_Url + '/feed', {
        withCredentials: true,
      })
      dispatch(addFeed(res?.data?.data))
      console.log(res.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  

  useEffect(() => {
    fetchFeed()
  }, [])
  return (
    <div>
      {feed && <UserCard user={feed[0]} />}
        
    </div>
  )
}

export default Feed