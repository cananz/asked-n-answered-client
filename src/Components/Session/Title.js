import React from 'react'
import {connect} from 'react-redux'
import {Header, Loader} from 'semantic-ui-react'

const Title = props => {

  return (

    <Header
      as="h2"
      content={props.title ? props.title : null}
      subheader={props.subtitle ? props.subtitle : null}
    />

  )
}

const mapStateToProps = (state) => {
  return {...state.session}
}

export default connect(mapStateToProps)(Title)
