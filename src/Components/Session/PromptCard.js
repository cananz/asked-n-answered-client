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
        selected: prompt.selected,
        id: prompt.id,
        content: prompt.content,
        img: prompt.img,
        correctAnswer: prompt.correctAnswer,
        incorrectAnswers: prompt.incorrectAnswers

    }
  }





  handleChange = (e, {value}) => {
    e.preventDefault()
    this.setState({selected: value})

    this.props.onSelect({...this.state, selected: value})
  }


  render() {

    // console.log('prompt card = ', this.state)
    let {prompt} = this.props

    return (

      <Card>

        <Image
          size='medium'
          src={prompt.img}
          centered
          verticalAlign="middle"

        />
        <Card.Content>

          <Card.Header>
            {prompt ? prompt.content : null}
          </Card.Header>




          <Form.Field as='h3'>
            <Radio
              checked={this.state.selected === prompt.incorrectAnswers[1].id}
              name={prompt.id}
              label={prompt.incorrectAnswers[1].content}
              value={prompt.incorrectAnswers[1].id}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field as='h3'>
            <Radio
              checked={this.state.selected === prompt.incorrectAnswers[2].id}
              name={prompt.id}
              label={prompt.incorrectAnswers[2].content}
              value={prompt.incorrectAnswers[2].id}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field as='h3'>
            <Radio
              checked={this.state.selected === prompt.correctAnswer.id}
              name={prompt.id}
              label={prompt.correctAnswer.content}
              value={prompt.correctAnswer.id}
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field as='h3'>
            <Radio
              checked={this.state.selected === prompt.incorrectAnswers[0].id}
              name={prompt.id}
              label={prompt.incorrectAnswers[0].content}
              value={prompt.incorrectAnswers[0].id}
              onChange={this.handleChange}
            />
          </Form.Field>
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
    onSelect: (promptObj) => {dispatch(selectingAnswer(promptObj))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PromptCard))
