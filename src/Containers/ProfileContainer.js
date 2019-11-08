import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {loggingIn} from '../redux/actions'
import {Form, Segment, Grid, Container, Message, Loader} from 'semantic-ui-react'
import NavBar from '../Components/Session/NavBar'
// import UserProjectList from '../Components/Session/ProgressBar'
// import PromptsContainer from './PromptsContainer'

class ProfileContainer extends Component {
  // constructor() {
  //
  // }

  componentDidMount(){
    this.props.loggingIn()
  }

  render() {

    return (

      <Container fluid textAlign='center'>
      <Message color='grey' size="massive">
      <Grid >
      <Grid.Row>
        <Grid.Column>
          Header
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4}>
        <Segment color='white' vertical inverted placeholder>
          Project Cards Here
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
        <Segment color='white' vertical inverted placeholder>
          Project Cards Here
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
        <Segment color='white' vertical inverted placeholder>
          Project Cards Here
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
        <Segment color='white' vertical inverted placeholder>
          Project Cards Here
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        <Segment color='white' vertical inverted placeholder>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      </Grid>

      <Container>
      <Form>
      
      </Form>
      </Container>
      </Message>
      </Container>
    )
  }





}



const mapStateToProps = state => {
  return {
    ...state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loggingIn: () => {dispatch(loggingIn())},
    // changeView: (view) => {dispatch(changeView(view))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))
