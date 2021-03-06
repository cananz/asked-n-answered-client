import React, { Component, createRef } from "react";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {loggingIn, changeView} from '../redux/actions'
import {Form, Segment, Grid, Container, Message, Loader, Menu, Sticky} from 'semantic-ui-react'
import ProfileNavBar from '../Components/Profile/ProfileNavBar'
import ProjectMenu from '../Components/Profile/ProjectMenu'
// import PromptsContainer from './PromptsContainer'

class ProfileContainer extends Component {


  componentDidMount(){
    this.props.loggingIn()

  }

  profileRef = createRef()

  render() {

    let {currentUser} = this.props
    // console.log('currentUser = ', currentUser)

    return (
      <div ref={this.profileRef}>
        <Container fluid>
          <Sticky context={this.profileRef}>
            <ProfileNavBar />
          </Sticky>


          <Message color='grey' size="massive">


            <ProjectMenu />


          </Message>
        </Container>
      </div>
    )
  }





}



const mapStateToProps = state => {
  return {
    currentUser: {...state.currentUser},
    page: {...state.page}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loggingIn: () => {dispatch(loggingIn())},
    changeView: (view) => {dispatch(changeView(view))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))
