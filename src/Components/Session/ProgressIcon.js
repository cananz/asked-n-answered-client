import React from 'react'
import {Icon} from 'semantic-ui-react'

const ProgressIcon = props => {
  return (
  <Icon.Group size='big'>
    {props.prompts.map(prompt => {
      return (<Icon name='circle' color='teal' />)
    })}
  <Icon.Group />
  )
}


export default ProgressIcon
