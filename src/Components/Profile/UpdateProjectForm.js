import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment, Form, Card, Placeholder, Loader, Image, Container, Icon} from 'semantic-ui-react'
import PromptFormField from './PromptFormField'
import PromptsContainer from '../../Containers/PromptsContainer'


class UpdateProjectForm extends Component {

  constructor(props) {
    super(props)
    this.state = ({...this.props})

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
                  {this.props.project.prompts.map(prompt => (<Card key={prompt.id} centered>
                    <Image fluid src={prompt.img ? prompt.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbu0YXGvzhEkGw5NFoj4DGiTeoq3FlBrdBGgzFbdSJiLipQQly&s"} />
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





              </Segment>

            )
          }


          }

const mapStateToProps = (state) => {
  return {
    activeProjectTab: state.currentUser.activeProjectTab,
    project: state.currentUser.projects.find(proj => proj.id === state.currentUser.activeProjectTab)
  }
}



const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps)(UpdateProjectForm)
