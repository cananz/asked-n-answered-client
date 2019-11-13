import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment, Form, Card, Placeholder, Loader, Image, Container, Icon, Button} from 'semantic-ui-react'
import PromptFormField from './PromptFormField'
import PromptsContainer from '../../Containers/PromptsContainer'
import {showPromptForm, addingPromptToProject} from '../../redux/actions'


class UpdateProjectForm extends Component {

  constructor(props) {
    super(props)
    this.state = ({...this.props, promptDraft: {
      content: '',
      img: '',
      correctAnswer: '',
      incorrectAnswerB: '',
      incorrectAnswerC: '',
      incorrectAnswerD: ''

    }})

  }

  onClick = () => {
    console.log(this.state)
  }

  handlePromptFormChanges = (e) => {
    let {name, value} = e.target
    if (name === 'content') {
      this.setState({promptDraft: {...this.state.promptDraft, content: value}})
    } else if (name === 'img') {
      this.setState({promptDraft: {...this.state.promptDraft, img: value}})
    } else if (name === 'correctAnswer') {
      this.setState({promptDraft: {...this.state.promptDraft, correctAnswer: value}})
    } else if (name === 'incorrectAnswerB') {
      this.setState({promptDraft: {...this.state.promptDraft, incorrectAnswerB: value}})
    } else if (name === 'incorrectAnswerC') {
      this.setState({promptDraft: {...this.state.promptDraft, incorrectAnswerC: value}})
    }else if (name === 'incorrectAnswerD') {
      this.setState({promptDraft: {...this.state.promptDraft, incorrectAnswerD: value}})
    }

  }

  submitPrompt = e => {
    e.preventDefault()
    console.log(this.state.promptDraft)
    let {promptDraft} = this.state
    // let incorrectAnswers = [promptDraft.incorrectAnswerB, promptDraft.incorrectAnswerC, promptDraft.incorrectAnswerD]

    let promptToSend = {
      content: promptDraft.content,
      img: promptDraft.img,
      correctAnswer: promptDraft.correctAnswer,
      incorrectAnswers: [promptDraft.incorrectAnswerB, promptDraft.incorrectAnswerC, promptDraft.incorrectAnswerD],
      project_id: this.state.activeProjectTab
    }


    this.props.submitPrompt(promptToSend)

  }


          render() {
            console.log('my projects props for prompts = ', this.props.project.prompts);
            return (
                <Segment inverted>
                  <Card fluid centered>
                    <Card.Content textAlign='center'>
                      <Card.Header>{this.props.project.title}</Card.Header>
                      <Card.Meta>{this.props.project.subtitle}</Card.Meta>
                    </Card.Content>
                  </Card>



                  <Card.Group centered>

                    {this.props.project.prompts.map(prompt => (<Card
                      key={prompt.id}
                      centered
                      >

                      <Image
                      fluid
                      label={{ as: 'a', color: 'red', corner: 'right', icon: 'delete' }}
                      src={prompt.img ? prompt.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbu0YXGvzhEkGw5NFoj4DGiTeoq3FlBrdBGgzFbdSJiLipQQly&s"} />
                      <Card.Content verticalAlign='middle'>
                        <Card.Header>{prompt.content}</Card.Header>
                      </Card.Content>
                      <Card.Content extra>
                        <p><Icon name='check circle' color='teal' /> {prompt.correctAnswer.content}</p>
                        <p><Icon name='times circle' color='red' />
                          {prompt.incorrectAnswers[0].content}</p>
                        <p><Icon name='times circle' color='red' />
                          {prompt.incorrectAnswers[1].content}</p>
                        <p><Icon name='times circle' color='red' />
                          {prompt.incorrectAnswers[2].content}</p>
                      </Card.Content>

                    </Card>))}

                  </Card.Group>
                  <br/>

                  {this.props.addPrompt ?
                    <PromptFormField
                      onChange={this.handlePromptFormChanges}
                      promptDraft={this.state.promptDraft}
                      onSubmit={this.submitPrompt}
                      close={this.props.showPromptForm}
                    /> :

                    <Button fluid color='teal' onClick={this.props.showPromptForm}>
                      Add Question
                    </Button>
                  }





                </Segment>
            )
          }


          }

const mapStateToProps = (state) => {
  return {
    activeProjectTab: state.currentUser.activeProjectTab,
    project: state.currentUser.projects.find(proj => proj.id === state.currentUser.activeProjectTab),
    addPrompt: state.currentUser.addPrompt
  }
}



const mapDispatchToProps = dispatch => {
  return {
    showPromptForm: () => {dispatch(showPromptForm())},
    submitPrompt: (pObj) => {dispatch(addingPromptToProject(pObj))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProjectForm)









// {/* <Card>
//   <Image fluid src='https://icon-library.net/images/add-image-icon/add-image-icon-14.jpg' />
//   <Card.Content verticalAlign='middle'>
//     <Card.Header>Add Prompt or Question</Card.Header>
//   </Card.Content>
// </Card> */}
