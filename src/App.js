import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {fetchingSession} from './redux/actions'
// import LandingPageContainer from './Containers/LandingPageContainer'
import SessionContainer from './Containers/SessionContainer'


class App extends Component {

  componentDidMount(){
    this.props.fetchingSession()
  }

  render() {

    return (
      <div className='App'>
        {/* <Switch>
          <Route exact path="/welcome" component={LandingPageContainer} />
          <Route path="/session"
            component={SessionContainer} />
        </Switch> */}
        <SessionContainer />
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchingProjects: () => { dispatch( fetchingProjects() )},
    fetchingSession: () => {dispatch( fetchingSession())}

  }
}


export default withRouter(connect(null, mapDispatchToProps)(App))
