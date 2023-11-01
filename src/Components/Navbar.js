import React, { useRef, useState } from 'react'
import { VscSettings } from 'react-icons/vsc';
import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import PreferencesModal from './Utilities/PreferencesModal';
import "./Navbar.css"

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const buttonRef = useRef();

    const handleModalClick = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div className='nav'>
            <div className='nav-icon-container' onClick={handleModalClick} ref={buttonRef}>
                <div className='nav-icon'><VscSettings style={{ transform: 'rotate(-90deg)' }} /></div>
                <div className='nav-icon-text'>Display</div>
                <div className='nav-icon'>
                    {isModalOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            {isModalOpen && <PreferencesModal setIsModalOpen={setIsModalOpen} buttonRef={buttonRef} />}
        </div>
    )
}

export default Navbar