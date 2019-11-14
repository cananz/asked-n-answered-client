import React, { Component } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {changeView, fetchingSession} from '../redux/actions'
import {Container, Loader, Button, Sticky} from 'semantic-ui-react'
import NavBar from '../Components/Session/NavBar'
import ProgressBar from '../Components/Session/ProgressBar'
import PromptsContainer from './PromptsContainer'



class SessionContainer extends Component {
  componentDidMount(){
    this.props.fetchingSession(this.props.match.params.pin)
    this.props.changeView("session")
    // debugger
  }

  render() {
    console.log('session container props = ', this.props)
    // let {session} = this.props

      return (
        <Container fluid>
          <Sticky>
            {/* <Container fluid> */}
            <NavBar />
            {/* </Container> */}
          </Sticky>

          <Container fluid>
            <ProgressBar />

            {this.props.session.prompts ?
              <PromptsContainer prompts={this.props.session.prompts} />
            :
            <Loader />}
            <Button fluid />
          </Container>
        </Container>)
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
