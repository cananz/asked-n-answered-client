import React from 'react'
import {connect} from 'react-redux'
import {Statistic, Segment, Header, Grid, Icon, Menu, Button, Container, Sticky} from 'semantic-ui-react'
import ProgressBar from './ProgressBar'


const NavBar = props => {
  // let {title, subtitle, user} = props.session.project

  return (


  <Segment attached="bottom" secondary>

    <Grid verticalAlign='middle'>

      <Grid.Column width={4}>
        {/* left - user email */}
        <Statistic size='mini' color='teal'>
          <Statistic.Label>Hosted By</Statistic.Label>
          <Statistic.Value text>
            <Icon name='user' circular />
            {props.host ? props.host : null}
          </Statistic.Value>
        </Statistic>
      </Grid.Column>

      {/*  center - title */}
      <Grid.Column
        width={8}
        textAlign='center'
      >
        <Header as="h2"
          content={props.title ? props.title : null}
          subheader={props.subtitle ? props.subtitle : null}
        />

        {/* <ProgressBar /> */}
      </Grid.Column>

      <Grid.Column width={4}>
        <Button basic disabled>Check Answers</Button>
      </Grid.Column>


    </Grid>


  </Segment>



)}


function mapStateToProps(state) {
  // debugger
  return {...state.session}
  // {
  //   session: state.session,
  //   // project: state.session.project
  // }
}

export default connect(mapStateToProps)(NavBar)
