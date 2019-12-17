import React, { Component, createRef } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {changeView, fetchingSession} from '../redux/actions'
import {Container, Loader, Button, Rail, Sticky, Segment, Menu} from 'semantic-ui-react'

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
    console.log(e)
  }

  render() {
    // console.log('session container props = ', this.props)
    // let {session} = this.props
    console.log('sessionRef =    ', this.sessionRef)
    // console.log('window =    ', this)

      return (
          <div ref={this.sessionRef}>

            {/* <Menu fixed="top" borderless> */}
            <NavBar />
            {/* </Menu> */}

            <Sticky context={this.sessionRef}>
              <ProgressBar />
            </Sticky>


            {/* <Container fluid> */}


            <Sticky
              context={this.sessionRef}
              pushing
              bottomOffset={1}
              offset={200}
            >
              <Segment basic clearing>
                <Button
                  color="blue"
                  floated="right"
                  content="Submit Answers"
                  onClick={this.submitAnswers}
                />
              </Segment>
            </Sticky>





            {this.props.session.prompts ?
              <PromptsContainer prompts={this.props.session.prompts} />
            :
            <Loader />}

            {/* </Container> */}




          </div>)
  }
}
const mapStateToProps = state => {
  return {
    session: state.session,

    page: state.page,
    pin: state.landingPage.pinInput
    // ...state.session, ...state.page, ...state
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
