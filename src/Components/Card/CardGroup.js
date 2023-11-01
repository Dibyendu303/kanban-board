import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import Card from './Card';
import CardGroupHeadingIcon from './CardGroupHeadingIcon';
import UserIcon from '../Utilities/UserIcon';

const CardGroup = (props) => {
    const { title, value, userId } = props.group;
    return (
        <div className='card-group-item'>
            <div className='card-group-header'>
                <div className='card-group-title-container'>
                    {userId ?
                        <UserIcon userId={userId} />
                        :
                        <CardGroupHeadingIcon title={title} />
                    }
                    <span className='card-group-title-text'>{title}</span>
                    <span className='card-group-title-number'>{value.length}</span>
                </div>
                <div className='card-group-icon-container'>
                    <FaPlus />
                    <BsThreeDots />
                </div>
            </div>
            <div className='card-group-list'>
                {value.map((ticket) => {
                    return <Card ticket={ticket} key={ticket.id} />
                })}
            </div>
        </div>
    )
}

export default CardGroup