import React , { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const initialState= {}
/**
 * memeForm component
 * 
 * @param {any} props
 * @returns React.Component Template render
 */
const MemeForm = (props) => {

  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    console.log('MemeForm mounted')
  },[]);

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      memeForm Component
    </div>
  )
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
