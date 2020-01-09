import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment, Statistic, Checkbox, Card, Loader, Button} from 'semantic-ui-react'
import PromptFormField from './PromptFormField'
import ShowPromptCard from './ShowPromptCard'
// import PromptsContainer from '../../Containers/PromptsContainer'
import {showPromptForm, addingPromptToProject, deletingPrompt, changePromptDraft, toggleSession} from '../../redux/actions'


class UpdateProjectForm extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = ({...this.props})
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

    let {promptDraft} = this.props

    let promptToSend = {
      content: promptDraft.content,
      img: promptDraft.img,
      correctAnswer: promptDraft.correctAnswer,
      incorrectAnswers: [promptDraft.incorrectAnswerB, promptDraft.incorrectAnswerC, promptDraft.incorrectAnswerD],
      project_id: this.props.activeProjectTab
    }

    this.props.submitPrompt(promptToSend)
  }

  deletePrompt = e => {
    this.props.deletePrompt(e.target.parentElement.id)
  }


  render() {
    // console.log('my projects props for prompts = ', this.props.project.prompts);
    let {project} = this.props

    const showPrompts = project.prompts.map(prompt =>
      <ShowPromptCard
        prompt={prompt}
        key={prompt.id}
        deletePrompt={this.deletePrompt} />
    )


    return (
        <Segment inverted>
          {/* TOGGLE AND PIN CARD */}
          <Card fluid>
            <Card.Content>

              {/* LIVE TOGGLE */}
              <Checkbox
                label={project.live ? 'LIVE!' : 'NOT LIVE'}
                toggle
                floated='left'
                onChange={() => this.props.toggleSession(this.props.project.id)}
                checked={this.props.project.live}
              />
              {/* PROJECT PIN */}
              <Statistic floated='right'>
                <Statistic.Value>
                  {this.props.project.pin}
                </Statistic.Value>
              </Statistic>

            </Card.Content>
          </Card>

          {/* PROJECT TITLE & SUBTITLE CARD */}
          <Card fluid centered>
            <Card.Content textAlign='center'>
              <Card.Header>{this.props.project.title}</Card.Header>
              <Card.Meta>{this.props.project.subtitle}</Card.Meta>

            </Card.Content>
          </Card>


          {/* PROMPT CARDS */}
          <Card.Group centered>
            {project.prompts ? showPrompts : <Loader active />}
          </Card.Group>

          <br/>


          {/* ADD PROMPT TOGGLE */}
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
