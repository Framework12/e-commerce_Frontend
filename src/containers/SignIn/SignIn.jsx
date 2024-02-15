import React, { useState ,useEffect} from 'react'
import Layout from "../../components/Layout/index";
import Input from "../../components/UI/Input/input";
import {Container,Form,Button,Row,Col} from "react-bootstrap"
import { useDispatch,useSelector } from 'react-redux';
import {login } from '../../actions';
import {Navigate} from "react-router-dom"

function SignIn() {

    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')
    const[errors,setErrors] =useState('')

    const dispatch = useDispatch()
    const auth = useSelector(state=>state.auth)

    const handleLogin = (e)=>{
        e.preventDefault()

        const user={
            email,
            password
        }

        dispatch(login(user))

    }
    if(auth.authenticate){
        return <Navigate to={'/'}/>
    }

  return (
    <Layout>
      <Container>
        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={(e)=>handleLogin(e)}>
              <Input
                label="Email address"
                placeholder="Email address"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                errorMessage="We'll never share your email with anyone else"
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default SignIn