import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs';

const Tag = (props) => {
    const { title } = props;

    return (
        <div className='card-icons__tag-container'>
            <div className='card-icons__tag-container__icon'>
                <BsFillCircleFill />
            </div>
            <div className='card-icons__tag-container__text'>
                {title}
            </div>
        </div>
    )
}

export default Tag