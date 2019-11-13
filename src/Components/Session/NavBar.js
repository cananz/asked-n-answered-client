import React from 'react'
import {connect} from 'react-redux'
import {Statistic, Segment, Header, Grid, Icon, Menu, Button, Container, Sticky} from 'semantic-ui-react'
import ProgressBar from './ProgressBar'


const NavBar = props => {
  // let {title, subtitle, user} = props.session.project

  // console.log('NavBar props = ', props)

  // console.log('NavBar props.session.project = ', props.project.title)
  return (
    <Sticky>
      <Header block fluid>

        {/* <Menu color='black' fixed='top' inverted borderless size='large'>

          <Menu.Item position='left'>
          <Statistic inverted size='mini'>
          <Statistic.Label>Hosted By</Statistic.Label>
          <Statistic.Value text>
          <Icon name='user' circular />
          {props.host ? props.host : null}
          </Statistic.Value>
          </Statistic>
        </Menu.Item> */}

        {/* <Menu.Item position='middle'>
          <Header inverted as='h3'>{props.title ? props.title : null}</Header>
          <Header inverted as='h4'>{props.subtitle ? props.subtitle : null}</Header>

        </Menu.Item> */}

        {/* <Menu.Item position='right'> */}
        {/* <Button>Submit Answers</Button> */}

        {/* </Menu.Item> */}

        {/* </Menu> */}

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
          <Grid.Column width={8} as={'h1'} textAlign='center'>
            {props.title ? props.title : null}
            <Header as='h4'>{props.subtitle ? props.subtitle : null}</Header>
          </Grid.Column>

          <Grid.Column width={4}>
            <Button basic>Check Answers</Button>
          </Grid.Column>

        </Grid>

      </Header>
    </Sticky>



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
