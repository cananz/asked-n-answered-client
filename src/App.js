import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
// import {fetchingSession} from './redux/actions'
import LandingPageContainer from './Containers/LandingPageContainer'
import SessionContainer from './Containers/SessionContainer'


class App extends Component {

  componentDidMount(){
    // this.props.fetchingSession()
  }

  render() {

    return (
      <div className='App'>
        <Switch>
          <Route path="/sessions/:pin"
            component={SessionContainer} />
          <Route path="/" component={LandingPageContainer} />
        </Switch>
        {/* <SessionContainer /> */}
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchingProjects: () => { dispatch( fetchingProjects() )},
    // fetchingSession: () => {dispatch( fetchingSession())}

  }
}


export default withRouter(App)
