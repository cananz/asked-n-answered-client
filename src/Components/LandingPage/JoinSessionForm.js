import React from 'react'
import {Card, Button, Form, Message} from 'semantic-ui-react'
import {pinInputChange, fetchingSession, checkPin} from '../../redux/actions'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const handlePinSubmit = (e, props) => {
  e.preventDefault()
  // props.onSubmit(props.pinInput)
  // debugger
  if (props.pinIsValid) {

  if (props.pinIsValid) {
    props.clearInput()
    props.history.push("/sessions/" + props.pinInput)
  }else{

  }

}


const JoinSessionForm = props => {

  console.log('join session form props = ', props)
  console.log('join session form props history = ', props.history)

  return (
    <Card centered>

      <Card.Content>
        <Card.Header className='shadows font'>Join a Session</Card.Header>

        <Form size='massive' onSubmit={e => handlePinSubmit(e, props)}>
          <Form.Input
            placeholder='Pin'
            value={props.pinInput}
            type='text'
            onChange={e => props.onChange(e.target.value.toUpperCase())}
          />

          <Button
            color='grey'
            size='massive'
            type='submit'
            content='Join'
            disabled={!props.pinIsValid}
          />

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
    },
    clearInput: () => {dispatch(pinInputChange(""))}
    // onSubmit: (pin) => {dispatch(fetchingSession(pin))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JoinSessionForm))
