import React, {Component} from 'react'
import {connect} from 'react-redux'
// import ProgressIcons from './ProgressIcon'
import {Container, Progress} from 'semantic-ui-react'


class ProgressBar extends Component {

  render() {
    // console.log('prompt count = ', this.promptCount())

    console.log('ProgressBar = ',this.props);

    return (
      <Container textAlign='center'>
        <Progress
          size='large'
          progress='ratio'
          value={this.props.numOfAnswers}
          total={this.props.numOfPrompts}
          color='black'
        />
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  let withAnswers = state.session.prompts.filter(prompt => prompt.selected)
  // debugger
  return {//...state.session
    numOfAnswers: state.session.numOfAnswers,
    // numOfAnswers: withAnswers.length,
    numOfPrompts: state.session.numOfPrompts
  }
}



export default connect(mapStateToProps)(ProgressBar)
