import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Card, Loader, Item, Button, Image, Form, Radio} from 'semantic-ui-react'
import {selectingAnswer} from '../../redux/actions'

class PromptCard extends React.Component {

  constructor(props) {
    super(props)
    let {prompt} = this.props
    this.state = {
      selected: '',

        id: prompt.id,
        content: prompt.content,
        image: prompt.image,
        correctAnswer: prompt.correctAnswer,
        incorrectAnswers: prompt.incorrectAnswers

    }
  }




  handleChange = (e, {value}) => {
    this.setState({selected: value})

  }


  render() {

    console.log('prompt card = ', this.state)
    let {prompt} = this.props
    let {correctAnswer, incorrectAnswers} = this.props.prompt
    return (

      <Card>

        <Card.Content>
          <Item.Image size='medium' src="https://amysantee.files.wordpress.com/2014/06/question-1828268_960_720.jpg" />
          <Item>
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>{prompt ? prompt.content : null}</Item.Header>

              <Item.Extra>
              </Item.Extra>
            </Item.Content>
          </Item>
          <Form>
            <Form.Field>
              <Radio
                checked={this.state.selected === prompt.incorrectAnswers[1].id}
                name={prompt.id}
                label={prompt.incorrectAnswers[1].content}
                value={prompt.incorrectAnswers[1].id}
                onChange={this.handleChange}
              />
              <Radio
                checked={this.state.selected === prompt.incorrectAnswers[2].id}
                name={prompt.id}
                label={prompt.incorrectAnswers[2].content}
                value={prompt.incorrectAnswers[2].id}
                onChange={this.handleChange}
              />
              <Radio
                checked={this.state.selected === prompt.correctAnswer.id}
                name={prompt.id}
                label={prompt.correctAnswer.content}
                value={prompt.correctAnswer.id}
                onChange={this.handleChange}
              />
              <Radio
                checked={this.state.selected === prompt.incorrectAnswers[0].id}
                name={prompt.id}
                label={prompt.incorrectAnswers[0].content}
                value={prompt.incorrectAnswers[0].id}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Card.Content>

        </Card>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    prompt: state.session.prompts.find(p => p.id === ownProps.promptId)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (answer) => {dispatch(selectingAnswer(answer))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PromptCard))
