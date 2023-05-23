import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.css';

const initialState= {}
/**
 * templateName component
 * 
 * @param {any} props
 * @returns React.Component Template render
 */
const TemplateName = (props) => {

  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      { props.children }
    </div>
  )
};

TemplateName.propTypes = {
  children: PropTypes.array.isRequired
};

TemplateName.defaultProps = {};

export default TemplateName;
