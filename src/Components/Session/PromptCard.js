import React from 'react'
// import {connect} from 'react-redux'
import {Card, Loader, Item, Button, Image, Form} from 'semantic-ui-react'

export default class PromptCard extends React.Component {

  // renderCards = () => {
  //   let {prompts} = this.props.project
  //   prompts.map(prompt => )
  // }

  render() {

    console.log('prompt card = ', this.props.prompt)
    let {prompt} = this.props
    return (

      <Card>
        {/* {prompt ? <Card.Header as={'h4'}>{prompt.content}</Card.Header> : <Loader active />} */}
        <Card.Content>
          <Item.Image size='medium' src="https://amysantee.files.wordpress.com/2014/06/question-1828268_960_720.jpg" />
          <Item>
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>{prompt.content}</Item.Header>

              <Item.Extra>
              </Item.Extra>
            </Item.Content>
          </Item>

          {/* <Button floated='right'>Save</Button> */}
        </Card.Content>
        <Card.Content>
          <Form size='huge'>
            <Form.Group>
              <Form.Field
                label={prompt.correctAnswer.content}
                control='input'
                type='radio'
              />

              
          </Form.Group>
          </Form>
        </Card.Content>
        </Card>
    )
  }

}
