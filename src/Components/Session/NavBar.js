import React from 'react'
import {connect} from 'react-redux'
import {Statistic, Segment, Grid, Loader} from 'semantic-ui-react'
import ProgressBar from './ProgressBar'
import CreatedBy from './CreatedBy'
import Title from './Title'

const NavBar = props => {
  // let {title, subtitle, user} = props.session.project

  return (


  <Segment attached="top" secondary>


    <Grid columns='equal' verticalAlign='middle'>

      <Grid.Column>
        <Statistic
          color="teal"
          size="mini"
          value={props.pin}
          label="pin"
          floated="left"
        />
      </Grid.Column>

      {/*  center - title */}
      <Grid.Column width={8} textAlign='center'>
        {props.title ? <Title /> : <Loader active />}

      </Grid.Column>



      <Grid.Column>
        {/* <Loader active /> */}
        <CreatedBy />
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
