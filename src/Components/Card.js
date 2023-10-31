import React from 'react'
import { FaExclamation } from 'react-icons/fa';
import "./Card.css"
import Tag from './Tag';

const Card = (props) => {
    const { id, priority, status, tag, title, userId } = props.ticket;
    return (
        <div className='card-body'>
            <div className='card-title'>
                <div className='card-title-text'>{id}</div>
                <div className='user-container'>
                    <div className='image-container'>
                        <img src="/assets/images/user1.jpg" className='user-image' alt='user-icon' />
                    </div>
                    <div className='user-status-outer'>
                        <div className='user-status-inner'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='card-heading'>{title}</div>
            <div className='card-icons'>
                <div className='icon-outer-container'>
                    <div className='icon-inner-container'>
                        <FaExclamation />
                    </div>
                </div>
                {tag.map((item, index) => {
                    return <Tag title={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Card