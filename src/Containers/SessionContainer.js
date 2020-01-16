import React, { Component, createRef } from "react";
// import { Route, Switch, withRouter } from "react-router-dom";
import {connect} from 'react-redux'
import {changeView, fetchingSession, submitAnswers} from '../redux/actions'
import {Container, Loader, Button, Rail, Sticky, Segment, Menu, Message, Input, Card, Modal, Icon} from 'semantic-ui-react'

import NavBar from '../Components/Session/NavBar'
import ProgressBar from '../Components/Session/ProgressBar'
// import PromptsContainer from './PromptsContainer'
import PromptCard from '../Components/Session/PromptCard'


class SessionContainer extends Component {
  state = { submitModalOpen: false }

  componentDidMount(){
    this.props.fetchingSession(this.props.match.params.pin)
    this.props.changeView("session")
  }

  sessionRef = createRef()

  handleOpen = () => this.setState({ submitModalOpen: true })

  handleClose = () => this.setState({ submitModalOpen: false })

  submitAnswers = (e) => {
    this.handleClose()
    this.props.onSubmit()

    this.props.history.replace('/')
    // debugger





  }

  checkAnswers = (e) => {
    console.log('checking')
  }


  render() {
    let {numOfAnswers, numOfPrompts} = this.props.session

      return (
          <div ref={this.sessionRef}>

            <NavBar />

            <Sticky context={this.sessionRef}>
              <ProgressBar />
            </Sticky>

            {/* <PromptsContainer prompts={this.props.session.prompts} /> */}

            <Container textAlign='center'>

              {this.props.session.prompts ?
                (<Card.Group centered itemsPerRow={1}>

                  {this.props.session.prompts.map(prompt => <PromptCard key={prompt.id} promptId={prompt.id} />)}
                </Card.Group>)
              :
              <Loader active />
              }

            </Container>



            <div className="submit-button">
              <Modal
                trigger={
                  <Button
                    color="teal"
                    content="Submit Answers"
                    onClick={this.handleOpen}
                  />}
                open={this.state.submitModalOpen}
                onClose={this.handleClose}
              >


                <Modal.Header>
                  {numOfAnswers === numOfPrompts ?
                    `Did you check your answers?`
                  :
                  `Make sure you answer every question before you submit!`}
                </Modal.Header>

                <Modal.Actions>
                  <Button
                    onClick={this.handleClose}
                    content="Back"
                  />

                  {numOfAnswers === numOfPrompts ?
                    <Button
                      onClick={this.submitAnswers}
                      content="Submit!"
                      positive
                    />
                  : null}
                </Modal.Actions>

              </Modal>



              {/* <Button
                content="Check Answers"
                onClick={this.checkAnswers}
              /> */}

            </div>

          </div>)
  }
}
const mapStateToProps = state => {
  return {
    session: state.session,
    page: state.page,
    pin: state.landingPage.pinInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingSession: (pin) => {dispatch(fetchingSession(pin))},
    changeView: (view) => {dispatch(changeView(view))},
    onSubmit: () => {dispatch(submitAnswers())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer)





















//
