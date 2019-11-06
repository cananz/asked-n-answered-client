import React, {Component} from 'react'
// import {Route, withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'

import {Container, Card, Loader} from 'semantic-ui-react'
import PromptCard from '../Components/Session/PromptCard'


class PromptsContainer extends Component {



  render() {
    let {prompts} = this.props
    console.log('inside PromptsContainer prompts = ', prompts)
    return (
      <Container textAlign='center'>
        <Card.Group centered itemsPerRow={1}>
          {/* <PromptCard /> */}
          {/* {this.props.project ? <PromptCards project={this.props.pro} /> : <Loader active />} */}
          {prompts.map((prompt, index) => <PromptCard key={index} prompt={prompt} />)}
        </Card.Group>
      </Container>
    )
  }

}

// const mapStateToProps = state => {
//   return {...state.session}
//     // title: state.session.project.title,
//     // prompts: state.session.project.prompts
//
//
// }

export default PromptsContainer
