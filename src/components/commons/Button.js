import React from 'react';
import PropTypes from 'prop-types';

    const STYLES=['btn-primary', 'btn-outline'];
    const SIZES=['btn-small','btn-medium', 'btn-large'];
    const ALIGNED=['btn-left', 'btn-left','btn-right'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonAligned,
    disabled
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    const checkButtonSize= SIZES.includes(buttonSize)?buttonSize:SIZES[0]
    const checkAligned = ALIGNED.includes(buttonAligned)?buttonAligned:ALIGNED[0]

    return (
        <div className={checkAligned} >
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
        </div>
    )
}
Button.propTypes = {
    children:PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    buttonAligned: PropTypes.string,
    buttonSize: PropTypes.string,
    buttonStyle: PropTypes.string,
}