import React from 'react'
import { FaExclamation } from 'react-icons/fa';
import { TbAntennaBars1, TbAntennaBars2, TbAntennaBars3, TbAntennaBars5 } from 'react-icons/tb';
import TitleIcon from '../Utilities/TitleIcon';
import Tag from '../Utilities/Tag';
import UserIcon from '../Utilities/UserIcon';
import "./Card.css"
import { useSelector } from 'react-redux';
import { getPreference } from '../../features/ticketSlice';

const Card = (props) => {
    const { id, priority, status, tag, title } = props.ticket;
    const { user } = props;
    const preference = useSelector(getPreference);

    return (
        <div className='card-body'>
            <div className='card-title'>
                <div className='card-title-text'>{id}</div>
                {preference?.groupBy !== "user" && <UserIcon user={user} />}
            </div>
            <div className='card-heading'>
                {preference?.groupBy !== "status" && <TitleIcon title={status} />}
                <span>{title}</span>
            </div>
            <div className='card-icons'>
                {
                    preference?.groupBy !== "priority" &&
                    <div className='icon-outer-container' style={{ padding: `${priority === 4 && "5px"}` }}>
                        {priority === 4 ?
                            <div className='icon-inner-container'>
                                <FaExclamation />
                            </div>
                            :
                            priority === 3 ?
                                <TbAntennaBars5 />
                                :
                                priority === 2 ?
                                    <TbAntennaBars3 />
                                    : priority === 1 ?
                                        <TbAntennaBars2 />
                                        :
                                        <TbAntennaBars1 />
                        }
                    </div>}
                {tag.map((item, index) => {
                    return <Tag title={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Card