import React, {Component} from 'react'
import {connect} from 'react-redux'
// import ProgressIcons from './ProgressIcon'
import {
  Button,
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
       {/* submit button appears when all questions answered */}
       {/* {this.props.numOfAnswers === this.props.numOfPrompts ? <Button content="Submit"/> : <Button disabled content="Submit" />} */}

       
       {/* <Button
         content="Submit Answers"
       /> */}

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
