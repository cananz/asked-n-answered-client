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
      // selected: '',

        id: prompt.id,
        content: prompt.content,
        image: prompt.image,
        answers: prompt.answers

    }
  }



  handleChange = (e, {value}) => {
    e.preventDefault()

    // let r = {...value}




    this.setState( {...this.state, selected: !value['selected']})
    debugger
    console.log(this.state.answers)
  this.props.onSelect({value})
  // debugger

  }

  render() {

    console.log('prompt card = ', this.state)
    let {prompt} = this.props
    let {answers} = this.props.prompt
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

        </Card.Content>
        <Card.Content>
          <Form size='huge'>

            <Form.Group grouped on>


              <Form.Field
                key={answers[0].id}
                label={answers[0].content}
                control={Radio}
                name='answer'
                value={answers[0].content}/>
              <Form.Field
                key={answers[1].id}
                label={answers[1].content}
                control={Radio}
                name='answer'
                value={answers[1].content}/>
              <Form.Field
                key={answers[2].id}
                label={answers[2].content}
                control={Radio}
                name='answer'
                value={answers[2].content}/>
              <Form.Field
                key={answers[3].id}
                label={answers[3].content}
                control={Radio}
                name='answer'
                value={answers[3].content}/>


              {/* {this.state.answers ?
                this.state.answers.map(answer =>
                  <Form.Field
                  key={answer.id}
                  label={answer.content}
                  control={Radio}
                  name='answer'
                  value={answer}/>)
                :
                <Loader />
              } */}



            </Form.Group>
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
