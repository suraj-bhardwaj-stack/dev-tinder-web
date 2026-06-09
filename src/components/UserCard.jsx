import React from 'react'
import defaultUserImg from '../assets/userDefaultImg.png'
function UserCard({user}) {
    console.log(user)
    const {firstName , lastName , photoUrl} = user;
    return (
        <div className="card bg-neutral w-86 shadow-sm pt-4">
            <figure>
                <img
                    src={photoUrl || defaultUserImg}
                    alt="Photo" width="200" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white capitalize">{firstName +" " + lastName}</h2>
                <p className='text-white'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-between my-2">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard