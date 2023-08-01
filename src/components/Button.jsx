import React from 'react'

const Button = ({value}) => {
    return (
        <button type="submit" className={value === 'Submit' ? 'submit' : 'edit'}>{value}</button>
    )
}

export default Button