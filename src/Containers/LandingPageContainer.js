import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeView, fetchingLiveSessions} from '../redux/actions'
// import {pinInputChange} from '../red'
import { Grid, Container, Header, Menu, Segment, Button, Message, Image, Card, Placeholder } from 'semantic-ui-react'
import LoginForm from '../Components/LandingPage/LoginForm'
import JoinSessionForm from '../Components/LandingPage/JoinSessionForm'


class LandingPage extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  // }

  componentDidMount() {

    this.props.changeView("landing")
  }



  render() {
    return (


  <Container fluid textAlign='center'>


    <Message size="massive">
      <Image floated='left' size='large' src="https://images.pexels.com/photos/355988/pexels-photo-355988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Grid verticalAlign='middle' columns={2}>
        <Grid.Row>


          <Grid.Column width={10}>

            <Container fluid>
              <Header className='shadows font' size="huge" as="h1">
                Asked
              </Header>
              <Header className='shadows font' size="huge" as="h1">
                -N-
              </Header>
              <Header className='shadows font' size="huge" as="h1">
                Answered
              </Header>


            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>

        </Grid.Row>
      </Grid>
      <Card.Group>

        <LoginForm />


        <JoinSessionForm />
      </Card.Group>
    </Message>

  </Container>



    )}

    }

    const mapStateToProps = state => {
      return {
        // pinInput: state.landingPage.pinInput,
        page: state.page,
        liveSessions: state.landingPage.liveSessions
      }
    }

    const mapDispatchToProps = (dispatch) => {
      return {
        changeView: (viewPage) => {dispatch(changeView(viewPage))},

        // pinInputChange: (value) => {dispatch(pinInputChange(value))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage))
