import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {fetchingLiveSessions} from './redux/actions'
import LandingPageContainer from './Containers/LandingPageContainer'
import SessionContainer from './Containers/SessionContainer'
import ProfileContainer from './Containers/ProfileContainer'

class App extends Component {

  componentDidMount(){
    this.props.fetchingLiveSessions()
  }

  render() {

    return (
      <div className='App'>
        <Switch>
          <Route path="/sessions/:pin"
            component={SessionContainer} />
          <Route path="/profile/:id" component={ProfileContainer} />
          <Route path="/" component={LandingPageContainer} />
        </Switch>

      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingLiveSessions: () => {dispatch(fetchingLiveSessions())}

    // fetchingProjects: () => { dispatch( fetchingProjects() )},
    // fetchingSession: () => {dispatch( fetchingSession())}

  }
}


export default withRouter(connect(null, mapDispatchToProps)(App))
