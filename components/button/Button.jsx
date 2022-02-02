import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-regular-svg-icons';
function Button({ onClick, className, value }) {
    return (
        <>
            <button
                type='button'
                onClick={onClick}
                className={className}
            >
                {value}<FontAwesomeIcon icon={faFile} className='icon-button' />
            </button>
        </>

    );
}

export default Button;
