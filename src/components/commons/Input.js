import React from 'react'
const STYLES=['input-primary'];
const SIZES= ['input-large', 'input-medium', 'input-small'];
const ALIGNMENT=['left', 'center', 'right'];
const AUTO_COMPLETE=['off','on']
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

    return (
        <div className={checkInputAlignment}>
            <input
             className={`${checkInputStyle} ${checkInputSize}`}
             onChange={onChange}
             type={type}
             autoComplete={checkAutoComplete}
             />

        </div>
    )
}
