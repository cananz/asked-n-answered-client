import React, {Component} from 'react'
import {Button, Checkbox, Card, Form} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loggingIn, loginInputChange} from '../../redux/actions'


class LoginForm extends Component {

  handleLogIn = (e) => {
    e.preventDefault()
    console.log(this.props)
    this.props.history.push("/profile/" + '1')
  }

  render() {
    let {props} = this
  console.log('login form props = ', props.history)
  return (


      <Card centered>

        <Card.Content>
          <Card.Header>Sign In</Card.Header>



          <Form size="large">
            <Form.Input
              name="email"
              placeholder="Email address"
              type="text"
              value={props.emailText}
            />
            <Form.Input
              name="password"
              placeholder="Password"
              type="password"
            />

            <Button color='grey' size="large" type="submit" onClick={this.handleLogIn}>
              Log In
            </Button>
            <Button color='grey' size="large">
              Sign Up
            </Button>
          </Form>

        </Card.Content>
      </Card>


      )
    }
  }

const mapStateToProps = state => {
  return {
    emailText: state.landingPage.emailText
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (emailText) => {
      dispatch(loggingIn(emailText))
    },
    onChange: (emailText) => {
      dispatch(loginInputChange(emailText))
    }
    // onSubmit: (pin) => {dispatch(fetchingSession(pin))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
