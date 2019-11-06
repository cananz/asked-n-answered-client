import React from 'react'
import {connect} from 'react-redux'
import {Statistic, Header, Grid, Icon} from 'semantic-ui-react'


const NavBar = props => {
  // let {title, subtitle, user} = props.session.project

  console.log('NavBar props = ', props)

  // console.log('NavBar props.session.project = ', props.project.title)
  return (

    <Header block>
      <Grid verticalAlign='middle'>
        <Grid.Column width={4}>
          <Statistic size='mini' color='teal'>
            <Statistic.Label>Hosted By</Statistic.Label>
            <Statistic.Value text>
              <Icon name='user' circular />
              {props.host ? props.host : null}
            </Statistic.Value>
          </Statistic>
        </Grid.Column>

        <Grid.Column width={8} as={'h2'} textAlign='center'>{props.title ? props.title : null}</Grid.Column>

        <Grid.Column width={4}></Grid.Column>

      </Grid>
  </Header>
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
