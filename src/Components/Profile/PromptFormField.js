import React from 'react'
import {Card, Input, Form, Button, Icon} from 'semantic-ui-react'

const PromptFormField = props => {

  let {content, img, correctAnswer, incorrectAnswer} = props.prompt

  return (
    <Card fluid centered color='teal'>
      <Card.Content textAlign='center'>
        <Button
          floated='right'
          icon
          compact
          color='red'
          onClick={deletePrompt}
        >
          <Icon name='delete'/>
        </Button>
        <Form>
          <Form.Input
            fluid
            name='content'
            placeholder='Prompt or Question'
            value={content}
            label='Question'
            onChange={e => props.addPrompt(e)}
          />

          <Form.Input
            fluid
            name='img'
            placeholder='Paste image url here'
            value={img}
            label='Image'
            onChange={e => props.addPrompt(e)}
          />

          <Form.Group widths='equal'>
            <Form.Field inline>
              <Input
                fluid
                name='correctAnswer'
                placeholder='Answer Option A'
                value=''
                label='A. '
              />
            </Form.Field>

            <Form.Field inline>
              <Input
                fluid
                name='incorrectAnswer'
                placeholder='Answer Option B'
                value=''
                label='B. '
              />
            </Form.Field>
          </Form.Group>


          <Form.Group widths='equal'>
            <Form.Field inline>
              <Input
                fluid
                name='incorrectAnswer'
                placeholder='Answer Option C'
                value=''
                label='C. '
              />
            </Form.Field>

            <Form.Field>
              <Input
                fluid
                name='incorrectAnswer'
                placeholder='Answer Option D'
                value=''
                label='D. '
              />
            </Form.Field>
          </Form.Group>

        </Form>
      </Card.Content>
    </Card>
  )

}

const deletePrompt = (e) => {

}

export default PromptFormField
