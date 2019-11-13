import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu, Header, Container, Image, Grid, Segment, Icon} from 'semantic-ui-react'
import {changeView, logOut} from '../../redux/actions'
import { Link, NavLink, withRouter } from "react-router-dom";


class NavBarContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeNavItem: ''
    }
  }

componentDidMount() {

  this.setState({activeNavItem: 'projects'})

}


render() {


  return (



<Segment clearing inverted>

  <Header as='h1' floated='left'>Asked-n-Answered</Header>

  <Link to='/'>
    <Header
      onClick={this.props.logOut}
      floated='right'
      inverted
    >
      <Icon inverted name='log out' />
    LogOut</Header>
  </Link>

</Segment>





  )
}

}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    page: state.page,


  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeView: (view) => {dispatch(changeView(view))},
    logOut: () => {dispatch(logOut())}

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarContainer))












//
// <Menu inverted borderless>
//   {/* <Container fluid> */}
//   <Menu.Item header>
//     {/* <Image size='tiny' src='https://dsgequip.com/wp-content/uploads/2014/04/questions-graphic.jpg' style={{ marginRight: '1.5em' }} /> */}
//     Asked-n-Answered
//   </Menu.Item>
//
//   {/* <Menu.Item
//       active={this.state.activeMenuItem === 'projects'}
//       >
//       {`${this.props.currentUser.firstName}'s '`} Projects
//   </Menu.Item> */}
//
//   <Link to='/'>
//     {/* <Menu.Menu position='right'> */}
//     <Menu.Item
//       name='logout'
//       onClick={this.props.logOut}
//       position='right'
//     />
//     {/* </Menu.Menu> */}
//   </Link>
//
//   {/* </Container> */}
// </Menu>
