import React from 'react'
import { FaCircleHalfStroke } from 'react-icons/fa6';
import { MdCancel } from 'react-icons/md';
import { HiCheckCircle } from 'react-icons/hi';
import { TbCircle } from 'react-icons/tb';
import { FaExclamation } from 'react-icons/fa';
import { TbAntennaBars1, TbAntennaBars2, TbAntennaBars3, TbAntennaBars5, TbCircleDotted } from 'react-icons/tb';

const CardGroupHeadingIcon = ({ title }) => {
    return (
        <div className='card-group-title-icon'>
            {
                title === "Cancelled" ?
                    <MdCancel style={{ color: "#9ca3af" }} />
                    :
                    title === "Done" ?
                        <HiCheckCircle style={{ color: "#4f46e5" }} />
                        :
                        title === "In progress" ?
                            <FaCircleHalfStroke style={{ color: "#facc15" }} />
                            :
                            title === "Todo" ?
                                <TbCircle style={{ color: "#9ca3af" }} />
                                :
                                title === "Backlog" ?
                                    <TbCircleDotted style={{ color: "#6b7280" }} />
                                    :
                                    title === "Urgent" ?
                                        <div className='icon-inner-container' style={{ backgroundColor: "#f97316" }}>
                                            <FaExclamation />
                                        </div>
                                        :
                                        title === "High" ?
                                            <TbAntennaBars5 style={{ color: "#6b7280" }} />
                                            :
                                            title === "Medium" ?
                                                <TbAntennaBars3 style={{ color: "#6b7280" }} />
                                                : title === "Low" ?
                                                    <TbAntennaBars2 style={{ color: "#6b7280" }} />
                                                    :
                                                    title === "No priority" ?
                                                        <TbAntennaBars1 style={{ color: "#6b7280" }} />
                                                        :
                                                        <></>
            }
        </div >
    )
}

export default CardGroupHeadingIcon