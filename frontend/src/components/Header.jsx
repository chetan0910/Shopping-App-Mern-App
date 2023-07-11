import React from 'react'
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userAction'

const Header = () => {
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  }

  return (
    <>
      
      <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand>ONLINE SHOP</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
            <i className="fa-solid fa-cart-shopping"></i>
                &nbsp; CART</Nav.Link>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                   

                  </NavDropdown>
                ) : (
                  <Nav.Link href="/login">
            <i className="fa-solid fa-user"></i>
                &nbsp; SIGN IN</Nav.Link>
                )}
            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header
