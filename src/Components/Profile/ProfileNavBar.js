import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu, Header, Container, Image} from 'semantic-ui-react'
import {changeView} from '../../redux/actions'


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

    <Menu inverted borderless>
      <Container>
        <Menu.Item header pointing>
          <Image size='tiny' src='https://dsgequip.com/wp-content/uploads/2014/04/questions-graphic.jpg' style={{ marginRight: '1.5em' }} />
          Asked-n-Answered
        </Menu.Item>

        <Menu.Item
          active={this.state.activeMenuItem === 'projects'}
        >
          {`${this.props.currentUser.firstName}'s '`} Projects
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'

          />
        </Menu.Menu>

    </Container>
    </Menu>




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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer)
