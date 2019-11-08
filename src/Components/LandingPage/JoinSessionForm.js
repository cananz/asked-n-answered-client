import React from 'react'
import {Card, Button, Form} from 'semantic-ui-react'
import {pinInputChange, fetchingSession, checkPin} from '../../redux/actions'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const handlePinSubmit = (e, props) => {
  e.preventDefault()
  // props.onSubmit(props.pinInput)
  props.history.push("/sessions/" + props.pinInput)

}


const JoinSessionForm = props => {

  console.log('join session form props = ', props)
  console.log('join session form props history = ', props.history)

  return (
    <Card centered>

      <Card.Content>
        <Card.Header>Join a Session</Card.Header>

        <Form size='massive' onSubmit={e => handlePinSubmit(e, props)}>
          <Form.Input
            placeholder='Pin'
            value={props.pinInput}
            type='text'
            onChange={e => props.onChange(e.target.value)}
          />

          <Button
            disabled={!props.pinIsValid}
            color='grey'
            size='massive'
            type='submit'>
          Join
          </Button>
        </Form>
      </Card.Content>

    </Card>

  )
}

const mapStateToProps = state => {
  return {
    pinInput: state.landingPage.pinInput,
    pinIsValid: state.landingPage.pinIsValid

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: (pinInput) => {
      dispatch(pinInputChange(pinInput))
      dispatch(checkPin(pinInput))
    }
    // onSubmit: (pin) => {dispatch(fetchingSession(pin))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinSessionForm))
