import React from 'react'
import { FaExclamation } from 'react-icons/fa';
import { BsFillCircleFill } from 'react-icons/bs';
import "./Card.css"

const Card = () => {
    return (
        <div className='card-body'>
            <div className='card-title'>
                <div className='card-title-text'>CAM-11</div>
                <div className='user-container'>
                    <div className='image-container'>
                        <img src="/assets/images/user1.jpg" className='user-image' />
                    </div>
                    <div className='user-status-outer'>
                        <div className='user-status-inner'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='card-heading'>Conduct Security Vulnerbility Assessment</div>
            <div className='card-icons'>
                <div className='icon-outer-container'>
                    <div className='icon-inner-container'>
                        <FaExclamation />
                    </div>
                </div>
                <div className='card-icons__tag-container'>
                    <div className='card-icons__tag-container__icon'>
                        <BsFillCircleFill />
                    </div>
                    <div className='card-icons__tag-container__text'>
                        Feature request
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card