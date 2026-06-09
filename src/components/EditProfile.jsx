import React, { useState } from 'react'
import UserCard from './UserCard'
import defaultUserImg from '../assets/userDefaultImg.png'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { Backend_Base_Url } from '../utils/constent'
function EditProfile({ user }) {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [age, setAge] = useState(user?.age)
    const [photoUrl, SetPhotoUrl] = useState(user?.photoUrl)
    const [about, setAbout] = useState(user?.about)
    const [error, setError] = useState("")
    const [save, setSave] = useState(false)
    const updateProfile = async () => {
        try {
            const res = await axios.patch(Backend_Base_Url + '/profile', {
                firstName,
                lastName,
                age,
                photoUrl,
                about,
            }, { withCredentials: true });
            dispatch(addUser(res?.data?.data))
            setSave(true)
            setTimeout(()=>{
                 setSave(false)  
            } ,3000)
            console.log(res.data.data)
        } catch (err) {
           setError(err.response.message)
        }
    }

    return (
        <div className='flex items-center gap-5'>
            <div className="card card-border bg-neutral w-96 mt-2">
                <div className="card-body">
                    <h2 className="card-title text-white">Edit Profile</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white">First Name</legend>
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="input" placeholder="Enter First Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white">Last Name</legend>
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="input" placeholder="Enter Last Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white">Age</legend>
                        <input value={age} onChange={(e) => setAge(e.target.value)} type="text" className="input" placeholder="Enter Your Age" />
                    </fieldset>
                    {/* <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white">Add Photo</legend>
                        <input type="file" value={photoUrl} className="input" accept=".jpg,.jpeg,.png" />
                    </fieldset> */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white">Your bio</legend>
                        <textarea className="textarea h-18" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Bio"></textarea>
                    </fieldset>

                    <p className='err text-red-500 text-xs'>{error}</p>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={updateProfile}>Update Now</button>
                    </div>
                </div>
            </div>

            <div className="card bg-neutral w-86 shadow-sm pt-4">
                <figure>
                    <img
                        src={photoUrl || defaultUserImg}
                        alt="Photo" width="200" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white capitalize">{firstName + " " + lastName}</h2>
                    <span className='text-white capitalize'>Age: {age}</span>
                    <p className='text-white'>{about}</p>
                </div>
            </div>

            {save && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Message sent successfully.</span>
                </div>
            </div>}

        </div>
    )
}

export default EditProfile