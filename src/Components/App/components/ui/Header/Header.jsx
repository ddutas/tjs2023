import React , { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const initialState= {}
/**
 * header component
 * 
 * @param {any} props
 * @returns React.Component Template render
 */
const Header = (props) => {

  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    console.log('Header mounted')
  },[]);

  return (
    <div className={styles.Header} data-testid="Header">
      { props.children }
    </div>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
