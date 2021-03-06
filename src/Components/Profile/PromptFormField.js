import React from 'react'
import {Card, Input, Form, Button, Icon} from 'semantic-ui-react'

const PromptFormField = props => {

  // let {content, img, correctAnswer, incorrectAnswer} = props.prompt

  return (
    <Card fluid centered color='teal'>
      <Button
        icon
        onClick={props.close}
        floated='left'
      compact>
        <Icon name='delete' color='red' />
      </Button>
      <Card.Content textAlign='center'>
        <Form onSubmit={props.onSubmit}>
          <Form.Input
            onChange={props.onChange}
            fluid
            name='content'
            placeholder='Prompt or Question'
            value={props.promptDraft.content}
            label='Question'

          />

          <Form.Input
            onChange={props.onChange}
            fluid
            name='img'
            placeholder='Paste image url here'
            value={props.promptDraft.img}
            label='Image'
          />

          <Form.Group widths='equal'>
            <Form.Field inline>
              <Input
                onChange={props.onChange}
                fluid
                name='correctAnswer'
                placeholder='Answer Option A'
                value={props.promptDraft.correctAnswer}
                label={{color: 'teal', icon: 'check circle'}}
              />
            </Form.Field>

            <Form.Field inline>
              <Input
                onChange={props.onChange}
                fluid
                name='incorrectAnswerB'
                placeholder='Answer Option B'
                value={props.promptDraft.incorrectAnswerB}
                label={{color: 'red', icon: 'times circle'}}
              />
            </Form.Field>
          </Form.Group>


          <Form.Group widths='equal'>
            <Form.Field inline>
              <Input
                onChange={props.onChange}
                fluid
                name='incorrectAnswerC'
                placeholder='Answer Option C'
                value={props.promptDraft.incorrectAnswerC}
                label={{color: 'red', icon: 'times circle'}}
              />
            </Form.Field>

            <Form.Field>
              <Input
                onChange={props.onChange}
                fluid
                name='incorrectAnswerD'
                placeholder='Answer Option D'
                value={props.promptDraft.incorrectAnswerD}
                label={{color: 'red', icon: 'times circle'}}
              />
            </Form.Field>
          </Form.Group>

          <Form.Button
            type="submit"
            content='Add'
            color='teal'
            fluid
          />

        </Form>
      </Card.Content>
    </Card>
  )

}

// const deletePrompt = (e) => {
//
// }

export default PromptFormField
