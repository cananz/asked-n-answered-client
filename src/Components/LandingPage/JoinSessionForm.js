import React from 'react'
import {Card, Button, Form, Message} from 'semantic-ui-react'
import {pinInputChange, fetchingSession, checkPin} from '../../redux/actions'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

const handlePinSubmit = (e, props) => {
  e.preventDefault()

  if (props.pinIsValid) {
    props.clearInput()
    props.history.push("/sessions/" + props.pinInput)

  }else{
    e.target.classList.add("error")
  }

}


const JoinSessionForm = props => {


  return (
    <Card centered>

      <Card.Content>
        <Card.Header className='shadows font'>Join a Session</Card.Header>

        <Form size='massive' onSubmit={e => handlePinSubmit(e, props)} >
          <Form.Input
            placeholder='Pin'
            value={props.pinInput}
            type='text'
            onChange={e => props.onChange(e.target.value.toUpperCase())}
          />

          {/* MESSAGE visible when invalid pin entered */}
          <Message
            error
            content="Invalid Pin"
            size="mini"
          />

          <Button
            color='grey'
            size='massive'
            type='submit'
            content='Join'
          />

          {/* BTN disabled unless pin is valid */}
          {/* <Button
            color='grey'
            size='massive'
            type='submit'
            content='Join'
            disabled={!props.pinIsValid}
          /> */}

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
