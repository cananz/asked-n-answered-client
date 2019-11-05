import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchingSession, pinInputChange} from '../redux/actions'
// import {pinInputChange} from '../red'



class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pinInput: this.props.pinInput,
      loginInput: ''
    }
  }

  // componentDidMount() {
  //   this.props.fetchingSession()
  // }

  handlePinChange = (e) => {
    this.setState({pinInput: e.target.value})

  }

  handlePinSubmit = (e) => {
    e.preventDefault()

    this.props.fetchingSession()
  }

  render() {

    return (

      <div>

        <p>Log in form</p>

        <Link to='/session/11U8J'>
          <p>Enter Session</p>
        </Link>
        {/* <input
          type='text'
          value={this.state.pinInput}
          onChange={this.handlePinChange} />
        <button onClick={() => this.props.fetchingSession()} /> */}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    pinInput: state.landingPage.pinInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingSession: () => {dispatch(fetchingSession())},
    pinInputChange: (value) => {dispatch(pinInputChange(value))}
  }
}


export default connect(null, mapDispatchToProps)(LandingPage)
