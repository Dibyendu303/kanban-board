import React from 'react'

const UserIcon = ({ userId }) => {
    return (
        <div className='user-container'>
            <div className='image-container'>
                <img src={`/assets/images/${userId}.jpeg`} className='user-image' alt='user-icon' />
            </div>
            <div className='user-status-outer'>
                <div className='user-status-inner'>

                </div>
            </div>
        </div>
    )
}

export default UserIcon