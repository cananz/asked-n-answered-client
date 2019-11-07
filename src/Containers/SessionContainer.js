import React, { Component } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {changeView} from '../redux/actions'
import {Container, Loader} from 'semantic-ui-react'
import NavBar from '../Components/Session/NavBar'
import ProgressContainer from '../Components/Session/ProgressBar'
import PromptsContainer from './PromptsContainer'



class SessionContainer extends Component {
  componentDidMount(){
    // this.props.fetchingSession()
    this.props.changeView("session")
  }

  render() {
    console.log('session container props = ', this.props)
    // let {session} = this.props

      return (
        <Container fluid>

          <NavBar />

          <ProgressContainer />

          {this.props.prompts ?
            <PromptsContainer prompts={this.props.prompts} />
          :
          null}

        </Container>)
  }
}
const mapStateToProps = state => {
  return {...state.session, ...state.page}
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchingSession: () => {dispatch(fetchingSession())}
    changeView: (view) => {dispatch(changeView(view))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer)





















//
