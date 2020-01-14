import React, { Component, createRef } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {changeView, fetchingSession} from '../redux/actions'
import {Container, Loader, Button, Rail, Sticky, Segment, Menu, Message, Input} from 'semantic-ui-react'

import NavBar from '../Components/Session/NavBar'
import ProgressBar from '../Components/Session/ProgressBar'
import PromptsContainer from './PromptsContainer'



class SessionContainer extends Component {
  componentDidMount(){
    this.props.fetchingSession(this.props.match.params.pin)
    this.props.changeView("session")
    // debugger
  }

  sessionRef = createRef()

  submitAnswers = (e) => {
    console.log('e.target = ', e.target)
    console.log("this = ", this)
    
  }

  render() {

      return (
          <div ref={this.sessionRef}>

            <NavBar />

            <Sticky context={this.sessionRef}>
              <ProgressBar />
            </Sticky>

            {this.props.session.prompts ?
              <PromptsContainer prompts={this.props.session.prompts} />
            :
            <Loader />}

            <div className="submit-button">
              <Button
                color="teal"
                content="Submit Answers"
                onClick={this.submitAnswers}
              />
            </div>

          </div>)
  }
}
const mapStateToProps = state => {
  return {
    session: state.session,
    page: state.page,
    pin: state.landingPage.pinInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingSession: (pin) => {dispatch(fetchingSession(pin))},
    changeView: (view) => {dispatch(changeView(view))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer)





















//
