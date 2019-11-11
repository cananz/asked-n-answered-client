import React from 'react'
import {Card, Input, Form} from 'semantic-ui-react'

const PromptFormField = props => {

  return (
    <Card fluid centered>
      <Card.Content textAlign='center'>
        <Form>
          <Form.Input
            fluid
            placeholder='Prompt or Question'
            value={props.content ? props.content : ''}
            label='Question'
          />

          <Form.Input
            fluid
            placeholder='Paste image url here'
            value={props.image ? props.image : ''}
            label='Image'
          />

          <Form.Group widths='equal'>
            <Form.Field inline>
              <Input
                fluid
                placeholder='Answer Option A'
                value={props.correctAnswer ? props.correctAnswer.content : ''}
                label='A. '
              />
            </Form.Field>

            <Form.Field inline>
              <Input
                fluid
                placeholder='Answer Option B'
                value={props.incorrectAnswers ? props.incorrectAnswers[0].content : ''}
                label='B. '
              />
            </Form.Field>
          </Form.Group>


          <Form.Group widths='equal'>
            <Form.Field inline>
              <Input
                fluid
                placeholder='Answer Option C'
                value={props.incorrectAnswers ? props.incorrectAnswers[1].content : ''}
                label='C. '
              />
            </Form.Field>

            <Form.Field>
              <Input
                fluid
                placeholder='Answer Option D'
                value={props.incorrectAnswers ? props.incorrectAnswers[2].content : ''}
                label='D. '
              />
            </Form.Field>
          </Form.Group>

        </Form>
      </Card.Content>
    </Card>
  )

}

export default PromptFormField
