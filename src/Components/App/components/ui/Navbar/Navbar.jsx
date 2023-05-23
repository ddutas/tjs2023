import React , { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import Container from 'react-bootstrap/Container';
import * as BS from 'react-bootstrap';


const initialState= {}
/**
 * navbar component
 * 
 * @param {any} props
 * @returns React.Component Template render
 */
const Navbar = (props) => {

  const [state, setState] = useState(initialState);
  
  useEffect(() => {
    console.log('Navbar mounted')
  },[]);

  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <BS.Navbar bg="dark" variant="dark" expand="lg">
        <BS.Container fluid>
          <BS.Navbar.Brand href="#home">Navigation</BS.Navbar.Brand>
          <BS.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <BS.Navbar.Collapse id="basic-navbar-nav">
            <BS.Nav className="me-auto">
              <BS.Nav.Link href="#home">Home</BS.Nav.Link>
              <BS.Nav.Link href="#link">Link</BS.Nav.Link>
              <BS.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <BS.NavDropdown.Item href="#action/3.1">Action</BS.NavDropdown.Item>
                <BS.NavDropdown.Item href="#action/3.2">
                  Another action
                </BS.NavDropdown.Item>
                <BS.NavDropdown.Item href="#action/3.3">Something</BS.NavDropdown.Item>
                <BS.NavDropdown.Divider />
                <BS.NavDropdown.Item href="#action/3.4">
                  Separated link
                </BS.NavDropdown.Item>
              </BS.NavDropdown>
            </BS.Nav>
          </BS.Navbar.Collapse>
        </BS.Container>
      </BS.Navbar>
    </div>
  )
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
