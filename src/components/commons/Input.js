import React from 'react'
import PropTypes from 'prop-types';

const STYLES=['input-primary'];
const SIZES= ['input-large', 'input-medium', 'input-small'];
const ALIGNMENT=['left', 'center', 'right'];
const AUTO_COMPLETE=['off','on'];
const TYPES=['text', 'password']
export const Input = ({
    placeholder, 
    name, 
    value, 
    onChange,
    type,
    inputStyles,
    inputSize,
    autoComplete,
    inputAlignment,
}) => {
    const checkInputStyle =STYLES.includes(inputStyles)?inputStyles:STYLES[0];
    const checkInputSize=SIZES.includes(inputSize)?inputSize:SIZES[0];
    const checkInputAlignment =ALIGNMENT.includes(inputAlignment)?inputAlignment:ALIGNMENT[1];
    const checkAutoComplete=AUTO_COMPLETE.includes(autoComplete)?autoComplete:AUTO_COMPLETE[0];
    const checkType=TYPES.includes(type)?type:TYPES[0]

    return (
        <div className={checkInputAlignment}>
            <input
             className={`${checkInputStyle} ${checkInputSize}`}
             onChange={onChange}
             type={type}
             autoComplete={checkAutoComplete}
             name={name}
             placeholder={placeholder}
             value ={value}
             />

        </div>
    )
}
Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    inputSize: PropTypes.string,
    inputStyles: PropTypes.string,
    autoComplete: PropTypes.string,
    inputAlignment: PropTypes.string,
    type: PropTypes.string,
}