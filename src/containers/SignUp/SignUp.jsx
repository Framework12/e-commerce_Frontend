import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layout/index";
import Input from "../../components/UI/Input/input"
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Navigate} from "react-router-dom"
import { signup } from '../../actions';

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const auth = useSelector(state=>state.auth)
  const user = useSelector(state=>state.user)
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user.loading) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }, [user.loading]);


  if (auth.authenticate) {
    return <Navigate to={"/"} />;
  }

  if(user.loading){
    return <p>Loading...</p>
  }
  // if(!user.loading){
  //   return <Navigate to={"/"} />;
  // }

  const userSignup= (e)=>{
   e.preventDefault()

   const user = {
     email,
     password,
     firstName,lastName
   };
   dispatch(signup(user))
  }
  return (
    <Layout>
      <Container>
        {user.message}
        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={(e) => {setFirstName(e.target.value)}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={(e) => {setLastName(e.target.value)}}
                  />
                </Col>
              </Row>
              <Input
                label="Email address"
                placeholder="Email address"
                type="text"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                errorMessage="We'll never share your email with anyone else"
              />
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
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

export default SignUp