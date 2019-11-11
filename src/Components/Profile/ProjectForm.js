import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment, Form, Card, Loader} from 'semantic-ui-react'
import PromptFormField from './PromptFormField'
import PromptsContainer from '../../Containers/PromptsContainer'


class ProjectForm extends Component {

constructor(props) {
  super(props)
  this.state = {...this.props.project
    // id: this.props.project.id,
    // title: this.props.project.title,
    // subtitle: this.props.project.subtitle,
    // prompts: this.props.project.prompts
  }
  // // this.setState({project: this.props.project})
}

  render() {
    console.log('inside form props= ', this.props)
    console.log('inside form state = ', this.state)
    let {project} = this.props
    // let {title, subtitle} = this.props.project
    return (
      <Segment inverted>
        <Card fluid centered>
          <Card.Content textAlign='center'>
            <Form>

              <Form.Input
                fluid
                label='Title'
                value={project ? project.title : ''}
                placeholder='Title'
              />
              <Form.Input
                fluid
                label='Subtitle'
                value={project ? project.subtitle : ''}
                placeholder='Subtitle'
              />
            </Form>
          </Card.Content>

        </Card>

        <PromptFormField />
        <PromptFormField />
        <PromptFormField />
        <PromptFormField />
        <PromptFormField />


      </Segment>

          )
          }


          }

const mapStateToProps = (state) => ({

    project: state.currentUser.projects.find(proj => proj.id === state.currentUser.activeProjectTab)

})

// const mapStateToProps = (state, ownProps) => ({
//   painting: state.paintings.find(p => p.id === ownProps.match.params.paintingId)
// })

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps)(ProjectForm)
