import React from 'react'
import "./PreferencesModal.css"

const PreferencesModal = () => {
    return (
        <div className='modal-body'>
            <div className='modal-option-container'>
                <span className='modal-option-text'>
                    Grouping
                </span>
                <select className='modal-select'>
                    <option value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className='modal-option-container'>
                <span className='modal-option-text'>
                    Ordering
                </span>
                <select className='modal-select'>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    )
}

export default PreferencesModal