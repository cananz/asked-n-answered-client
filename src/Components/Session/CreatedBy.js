import React from 'react'
import {connect} from 'react-redux'
import {Statistic, Icon, Loader} from 'semantic-ui-react'

const CreatedBy = props => {


  return (
    <Statistic
      size='mini'
      color='teal'
      floated="right"
    >

      <Statistic.Value text>
        <Icon name='user' circular />
        {props.host ? props.host : <Loader size="mini" active inline />}
      </Statistic.Value>

      <Statistic.Label>Created By</Statistic.Label>

    </Statistic>
  )
}

const mapStateToProps = (state) => {
  return {...state.session}
}

export default connect(mapStateToProps)(CreatedBy)
