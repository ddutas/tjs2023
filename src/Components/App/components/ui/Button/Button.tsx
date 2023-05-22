import React from 'react'
import styles from './Button.module.css'
import PropTypes from 'prop-types'

interface I_ButtonProps {

    onButtonClick: Function
    style?: object
    bgColor?: string
    children: string|React.ReactNode|Array<string|React.ReactNode>
    type?: 'button'|'submit'|'reset' 

}

const Button: React.FC<I_ButtonProps> = (props) => {
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
    type: PropTypes.oneOf(['button','submit','reset'])
}

Button.defaultProps= {
    bgColor: 'lime',
    type: 'button'
}

export default Button;