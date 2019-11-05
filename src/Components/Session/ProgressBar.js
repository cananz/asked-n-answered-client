import React, {Component} from 'react'
import {connect} from 'react-redux'
// import ProgressIcons from './ProgressIcon'
import {Container, Progress} from 'semantic-ui-react'


class ProgressBar extends Component {
  // console.log('prompt count = ', props.project ? props.project.prompts.length : 'loading')



  // promptsLoaded = () => this.props.project ? this.props.project.prompts : []
  //
  // renderIcons = () => this.promptsLoaded().map(prompt => {
  //   return <Icon name='circle' color='teal' />
  // })

  render() {
    // console.log('prompt count = ', this.promptCount())

    return (
      <Container textAlign='center'>
        <Progress
          size='large'
          progress='ratio'
          value={2}
          total={10}
          color='black' 
        />
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return {...state.session}
}



export default connect(mapStateToProps)(ProgressBar)
