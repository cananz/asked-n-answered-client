import React from 'react'

import {Segment, Form, Card, Placeholder, Loader, Image, Container, Icon, Button} from 'semantic-ui-react'


const ShowPromptCard = props => {

  let {prompt} = props

  return (
    <Card key={prompt.id} centered>


      <Image fluid
        label={{ as: 'a', id: prompt.id, color: 'red', corner: 'right', icon: 'delete', onClick: props.deletePrompt}}

        src={prompt.img ? prompt.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbu0YXGvzhEkGw5NFoj4DGiTeoq3FlBrdBGgzFbdSJiLipQQly&s"} />


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

    </Card>
  )
}

export default ShowPromptCard
