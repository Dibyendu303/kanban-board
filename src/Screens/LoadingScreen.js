import React from 'react';
import "./LoadingScreen.css";

const LoadingScreen = () => {
    return (
        <div className='loading-container'>
            <img src="/assets/images/loading.svg" alt="" className='spinner-item' />
            <span className='main-text'>
                Loading...
            </span>
            <span className='sub-text'>It will take a few seconds</span>
        </div>
    )
}

export default LoadingScreen