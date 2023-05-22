import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    console.log(props)
    return (
        <button 
            className={ styles.Button } 
            onClick={ (evt) => { 
                props.onButtonClick('hello')
            }}
            style={{...props.style, backgroundColor: props.bgColor}}
            type={props.type}
        >
            { props.children }
        </button>
    );
}

Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    bgColor: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.oneOf(['submit','button','reset']).isRequired
}

Button.defaultProps= {
    bgColor: 'lime',
    type: 'button'
}

export default Button;