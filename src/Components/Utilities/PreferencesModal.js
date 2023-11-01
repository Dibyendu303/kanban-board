import React, { useEffect, useRef, useState } from 'react'
import "./PreferencesModal.css"
import { useDispatch } from 'react-redux';
import { groupTickets, setPreference } from '../../features/ticketSlice';

const PreferencesModal = ({ setIsModalOpen, buttonRef }) => {
    const modalEl = useRef();
    const [option, setOption] = useState({
        groupBy: "status",
        orderBy: "priority"
    });
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        const newPreference = {
            ...option,
            [e.target.name]: e.target.value,
        };
        console.log(newPreference);
        setOption(newPreference);
        dispatch(setPreference(newPreference));
        dispatch(groupTickets());
        setIsModalOpen(false);
    }

    useEffect(() => {
        const savedPreference = JSON.parse(localStorage.getItem("kanbanBoard"));
        if (savedPreference) {
            setOption(savedPreference);
        }
    }, []);

    useEffect(() => {
        const handler = (event) => {
            if (!modalEl.current || buttonRef?.current?.contains(event.target)) {
                return;
            }
            if (!modalEl.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    return (
        <div className='modal-body' ref={modalEl}>
            <div className='modal-option-container'>
                <span className='modal-option-text'>
                    Grouping
                </span>
                <select className='modal-select' name="groupBy" id="groupBy" onChange={handleOnChange} value={option.groupBy}>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className='modal-option-container'>
                <span className='modal-option-text'>
                    Ordering
                </span>
                <select className='modal-select' name="orderBy" id="orderBy" onChange={handleOnChange} value={option.orderBy}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    )
}

export default PreferencesModal