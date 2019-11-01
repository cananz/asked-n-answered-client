import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {fetchingProjects} from './redux/actions'

class App extends Component {

  componentDidMount(){
    this.props.fetchingProjects()
  }

  render() {

    return (
      <div className='App'>


      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingProjects: () => { dispatch( fetchingProjects() )}
  }
}


export default connect(null, mapDispatchToProps)(App)
