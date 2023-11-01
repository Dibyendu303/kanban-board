import React from 'react'

const UserIcon = ({ user }) => {
    return (
        <div className='user-container'>
            <div className='image-container'>
                <img src={`/assets/images/${user.id}.jpeg`} className='user-image' alt='user-icon' />
            </div>
            <div className='user-status-outer'>
                <div className='user-status-inner' style={{ backgroundColor: `${user.available && "#4ade80"}` }}>

                </div>
            </div>
        </div>
    )
}

export default UserIcon