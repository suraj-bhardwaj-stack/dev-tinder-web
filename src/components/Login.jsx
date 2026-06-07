import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { Backend_Base_Url } from './utils/constent';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const loginHandler = async () =>{
        const res = await axios.post(Backend_Base_Url + "/login", {
            emailId: email, // ← rename this
            password,
        },{withCredentials: true})
        console.log(res.data.user)
        dispatch(addUser(res.data.user))
    }

  return (
     <div className="card card-border bg-neutral w-96 absolute left-1/2 -translate-x-1/2 top-30">
      <div className="card-body">
        <h2 className="card-title text-white">Login</h2>
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-white">Email ID</legend>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" placeholder="Enter Email" />
        </fieldset>
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-white">Password</legend>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Enter Password" />
        </fieldset>

        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={loginHandler}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login