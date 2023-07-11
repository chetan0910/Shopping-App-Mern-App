import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/shared/Message'
import Loader from '../components/shared/Loader'
import {register} from '../actions/userAction'
import FormContainer from '../components/shared/FormContainer'

const RegisterScreen = ({location,history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    

    const redirect = location.search ? location.search.split('=')[1] : "/";

    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister)
    const {loading,error,userInfo} = userRegister;

    useEffect(() => {
        if(userInfo){history.push(redirect)}
    },[history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch
        if(password !== confirmPassword){
            setMessage("Password do not match");
        }else {
        dispatch(register(name,email,password))
        }
    }

  return (
    <>
        <FormContainer>
            <h1>Register</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            {message && <Message variant="danger">{message}</Message>}
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='enter Name' value={name} onChange={(e) => setName(e.target.value) }></Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value) }></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value) }></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Re-enter password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) }></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>SIGN IN</Button>
            </Form>
            <Row>
                <Col>
                Have an account !
                <Link to={redirect ? `login?redirect=${redirect}`: '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer> 
    </>
  )
}

export default RegisterScreen;