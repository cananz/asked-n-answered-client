import React, {Component} from 'react'
import {Button, Checkbox, Card, Form} from 'semantic-ui-react'




const LoginForm = (props) => {

  return (


      <Card centered>

        <Card.Content>
          <Card.Header>Sign In</Card.Header>



          <Form size="large">
            <Form.Input
              name="email"
              placeholder="Email address"
              type="text"
            />
            <Form.Input
              name="password"
              placeholder="Password"
              type="password"
            />

            <Button color='grey' size="large" type="submit">
              Log In
            </Button>
            <Button color='grey' size="large" type="submit">
              Sign Up
            </Button>
          </Form>

        </Card.Content>
      </Card>


      )
    }

export default LoginForm
