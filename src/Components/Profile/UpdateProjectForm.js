import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment, Statistic, Checkbox, Form, Card, Placeholder, Loader, Image, Container, Icon, Button} from 'semantic-ui-react'
import PromptFormField from './PromptFormField'
import ShowPromptCard from './ShowPromptCard'
// import PromptsContainer from '../../Containers/PromptsContainer'
import {showPromptForm, addingPromptToProject, deletingPrompt, changePromptDraft, toggleSession} from '../../redux/actions'


class UpdateProjectForm extends Component {

  constructor(props) {
    super(props)
    this.state = ({...this.props
    })

  }

  // onClick = () => {
  //   console.log(this.state)
  // }

  handlePromptFormChanges = (e) => {
    let {name, value} = e.target
    if (name === 'content') {
        this.props.handlePromptChange({content: value})

    } else if (name === 'img') {
        this.props.handlePromptChange({img: value})

    } else if (name === 'correctAnswer') {
        this.props.handlePromptChange({correctAnswer: value})

    } else if (name === 'incorrectAnswerB') {
        this.props.handlePromptChange({incorrectAnswerB: value})

    } else if (name === 'incorrectAnswerC') {
        this.props.handlePromptChange({incorrectAnswerC: value})

    }else if (name === 'incorrectAnswerD') {
        this.props.handlePromptChange({incorrectAnswerD: value})

    }


  }

  submitPrompt = e => {
    e.preventDefault()
    // console.log(this.state.promptDraft)
    let {promptDraft} = this.props
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

  deletePrompt = e => {
    console.log('delete', e.target.parentElement);
    this.props.deletePrompt(e.target.parentElement.id)
  }


  render() {
    console.log('my projects props for prompts = ', this.props.project.prompts);
    return (
        <Segment inverted>
          <Card fluid>
            <Card.Content>
              <Checkbox
                label={this.props.project.live ? 'LIVE!' : 'NOT LIVE'}
                toggle
                floated='left'
                onChange={() => this.props.toggleSession(this.props.project.id)}
                checked={this.props.project.live} />

              <Statistic floated='right'>
                <Statistic.Value>
                  {this.props.project.pin}
                </Statistic.Value>
              </Statistic>
            </Card.Content>
          </Card>
          <Card fluid centered>
            <Card.Content textAlign='center'>
              <Card.Header>{this.props.project.title}</Card.Header>
              <Card.Meta>{this.props.project.subtitle}</Card.Meta>

            </Card.Content>
          </Card>



          <Card.Group centered>

            {this.props.project.prompts.map(prompt =>

              <ShowPromptCard
                prompt={prompt}
                deletePrompt={this.deletePrompt} />

            )}



          </Card.Group>
          <br/>

          {this.props.addPrompt ?
            <PromptFormField
              onChange={this.handlePromptFormChanges}
              promptDraft={this.props.promptDraft}
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
    addPrompt: state.currentUser.addPrompt,
    promptDraft: state.currentUser.promptDraft
  }
}



const mapDispatchToProps = dispatch => {
  return {
    showPromptForm: () => {dispatch(showPromptForm())},
    toggleSession: (projId) => {dispatch(toggleSession(projId))},
    submitPrompt: (pObj) => {dispatch(addingPromptToProject(pObj))},
    deletePrompt: (promptId) => {dispatch(deletingPrompt(promptId))},
    handlePromptChange: (promptDraftObj) => {dispatch(changePromptDraft(promptDraftObj))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProjectForm)








              //
              //
              // (<Card key={prompt.id} centered>
              //
              //
              //   <Image fluid
              //     label={{ as: 'a', id: prompt.id, color: 'red', corner: 'right', icon: 'delete', onClick: this.deletePrompt}}
              //
              //     src={prompt.img ? prompt.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbu0YXGvzhEkGw5NFoj4DGiTeoq3FlBrdBGgzFbdSJiLipQQly&s"} />
              //   <Card.Content verticalAlign='middle'>
              //     <Card.Header>{prompt.content}</Card.Header>
              //   </Card.Content>
              //   <Card.Content extra>
              //     <p><Icon name='check circle' color='teal' /> {prompt.correctAnswer.content}</p>
              //     <p><Icon name='times circle' color='red' />
              //       {prompt.incorrectAnswers[0].content}</p>
              //     <p><Icon name='times circle' color='red' />
              //       {prompt.incorrectAnswers[1].content}</p>
              //     <p><Icon name='times circle' color='red' />
              //       {prompt.incorrectAnswers[2].content}</p>
              //   </Card.Content>
              //
              // </Card>)
