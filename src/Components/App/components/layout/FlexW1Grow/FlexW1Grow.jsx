import React from 'react';
import PropTypes from 'prop-types';
import styles from './FlexW1Grow.module.css';

const initialState= {}
/**
 * flexW1Grow component
 * 
 * @param {any} props
 * @returns React.Component Template render
 */
const FlexW1Grow = (props) => {

  return (
    <div className={styles.FlexW1Grow} data-testid="FlexW1Grow">
      { props.children }
    </div>
  )
};

FlexW1Grow.propTypes = {
  children: PropTypes.any.isRequired
};

FlexW1Grow.defaultProps = {};

export default FlexW1Grow;
