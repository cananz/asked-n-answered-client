import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeView, fetchingLiveSessions} from '../redux/actions'
// import {pinInputChange} from '../red'
import { Grid, Container, Header, Menu, Segment, Button, Message, Image, Card } from 'semantic-ui-react'
import LoginForm from '../Components/LandingPage/LoginForm'
import JoinSessionForm from '../Components/LandingPage/JoinSessionForm'


class LandingPage extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  // }

  componentDidMount() {
    this.props.fetchingLiveSessions()
  }



  render() {
    return (


  <Segment color='black' inverted vertical textAlign='center'>

    {/* <Link to='/session/11U8J'>
      <p>Enter Session</p>
    </Link> */}
    {/* <input
      type='text'
      value={this.state.pinInput}
      onChange={this.handlePinChange} />
    <button onClick={() => this.props.fetchingSession()} /> */}
    <Message color='black' size="massive">
      <Grid verticalAlign='middle' columns={2}>
        <Grid.Row>
          <Grid.Column stretched width={5}>
            <Image src="http://media.virbcdn.com/cdn_images/resize_500x500/0d/00995da8bf77b1b9-doggywhitewebsite.jpg" />
          </Grid.Column>

          <Grid.Column width={11}>

            <Container color='black'>
              <Header inverted size="huge" as="h1">
                Asked-N-Answered
              </Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* <Button size="large" primary>
                Learn more &raquo;
              </Button> */}

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
  </Segment>



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
        fetchingLiveSessions: () => {dispatch(fetchingLiveSessions())}
        // pinInputChange: (value) => {dispatch(pinInputChange(value))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage))
