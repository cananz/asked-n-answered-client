import React, {Component} from 'react'
import {connect} from 'react-redux'
// import ProgressIcons from './ProgressIcon'
import {
  // Container,
  Progress,
  Segment,
  Rating
  // Header
} from 'semantic-ui-react'


class ProgressBar extends Component {

  render() {

    return (

     <Segment attached="bottom" inverted textAlign="center">

       <Progress
         inverted
         progress='ratio'
         value={this.props.numOfAnswers}
         total={this.props.numOfPrompts}
         color="blue"
       />
       
     </Segment>
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
