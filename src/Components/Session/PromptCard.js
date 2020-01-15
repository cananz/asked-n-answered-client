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
        answers: prompt.answers
    }
  }


  handleChange = (e, {value}) => {

    e.preventDefault()

    this.setState({selected: value})

    this.props.onSelect({...this.state, selected: value})
  }


  render() {

    let {prompt, answers} = this.props

    return (

      <Card>

        <Image
          size='medium'
          src={prompt.img}
          centered
          verticalAlign="middle"
        />

        <Card.Content>

          {/* ---QUESTION--- */}
          <Card.Header>
            {prompt ? prompt.content : null}
          </Card.Header>

          {/* ---ANSWERS--- */}
          {answers.map(answer =>
            (<Form.Field as='h3' key={answer.id}>
              <Radio
                checked={this.state.selected === answer.id}
                label={answer.content}
                value={answer.id}
                onChange={this.handleChange}
              />
            </Form.Field>)
          )}

        </Card.Content>

      </Card>
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  let prompt = state.session.prompts.find(p => p.id === ownProps.promptId)

  return {
    prompt: prompt,
    answers: prompt.answers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (promptObj) => {dispatch(selectingAnswer(promptObj))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PromptCard))
