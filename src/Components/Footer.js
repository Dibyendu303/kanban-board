import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-body'>
            <span className='footer-text'>Made by Dibyendu</span>
            <div className='footer-icons'>
                <a href='https://www.linkedin.com/in/dibyendu303/' target="_blank" without rel="noreferrer">
                    <div className='footer-icon-box'>
                        <FaLinkedin style={{ color: "#3b82f6" }} />
                    </div>
                </a>
                <a href='https://github.com/dibyendu303/' target="_blank" without rel="noreferrer">
                    <div className='footer-icon-box'>
                        <FaGithub style={{ color: "#000000" }} />
                    </div>
                </a>
                <a href='https://www.instagram.com/dib303/' target="_blank" without rel="noreferrer">
                    <div className='footer-icon-box'>
                        <GrInstagram style={{ color: "#ef4444" }} />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Footer