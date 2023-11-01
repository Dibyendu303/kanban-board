import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import Card from './Card';
import CardGroupHeadingIcon from './CardGroupHeadingIcon';
import UserIcon from '../Utilities/UserIcon';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/ticketSlice';

const CardGroup = (props) => {
    const { title, value, userId } = props.group;
    const users = useSelector(selectUser);

    return (
        <div className='card-group-item'>
            <div className='card-group-header'>
                <div className='card-group-title-container'>
                    {userId ?
                        <UserIcon user={users.find(({ id }) => id === userId)} />
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
                    return <Card ticket={ticket} key={ticket.id} user={users.find(({ id }) => id === ticket.userId)} />
                })}
            </div>
        </div>
    )
}

export default CardGroup