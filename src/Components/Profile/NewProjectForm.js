import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment, Form, Card, Loader, Button} from 'semantic-ui-react'
import PromptFormField from './PromptFormField'
import PromptsContainer from '../../Containers/PromptsContainer'
import {changeDraftTitle, changeDraftSubtitle, initiatingNewProject} from '../../redux/actions'


class NewProjectForm extends Component {

  constructor(props) {
    super(props)
    this.state = {...this.props.draftObj,

      // title: '',
      // subtitle: '',
      // prompts: []
    }
  }

  handleChange = (e) => {

  }

  // onTitleSubmit = e => {
  //     e.preventDefault()
  //     this.setState({})
  // }


  render() {

    // let {title, subtitle} = this.props.projectDraft

    return (
      <Segment inverted>
        <Card fluid centered>
          <Card.Content textAlign='center'>
            <Form onSubmit={this.onTitleSubmit}>

              <Form.Input
                fluid
                label='Title'
                value={this.props.projectDraft ? this.props.projectDraft.title : ''}
                placeholder='Title'
                type='text'
                onChange={e => this.props.onTitleChange(e.target.value)}
              />
              <Form.Input
                fluid
                label='Subtitle'
                type='text'
                value={this.props.projectDraft ? this.props.projectDraft.subtitle : ''}
                placeholder='Subtitle'
                onChange={e => this.props.onSubtitleChange(e.target.value)}
              />

            </Form>

          </Card.Content>

        </Card>





        <Button
          content='Create Project'
          fluid
          color='teal'
          onClick={e => this.props.onSubmit({...this.props.projectDraft})

          }
        />

      </Segment>

    )
  }


  }

const mapStateToProps = (state) => {
  return {
    activeProjectTab: state.currentUser.activeProjectTab,
    projectDraft: state.currentUser.projectDraft
  }
}



const mapDispatchToProps = dispatch => {
  return {
    onTitleChange: (text) => {dispatch(changeDraftTitle(text))},
    onSubtitleChange: (text) => {dispatch(changeDraftSubtitle(text))},
    onSubmit: (projObj) => {dispatch(initiatingNewProject(projObj))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm)
