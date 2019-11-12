import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link, Switch, Route, withRouter} from 'react-router-dom'
import {Form, Segment, Grid, Container, Message, Loader, Menu} from 'semantic-ui-react'
import {selectProject, loadNewProjectForm, fetchingUserProjects} from '../../redux/actions'
import NewProjectForm from './NewProjectForm'
import UpdateProjectForm from './UpdateProjectForm'


class ProjectMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {activeProjectTab: this.props.activeProjectTab}
  }

  componentDidMount() {
    this.props.fetchingUserProjects(this.props.userId)
  }

  onClick = (e, {id}) => {
    if (id === 'new') {
      this.props.newProject()
    }else{
      this.props.selectProject(id)
    }
  }



  render() {
    let {projects} = this.props
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>

            <Menu.Item
              name='Create New'
              active={this.props.activeProjectTab === 'new'}
              id='new'
              onClick={this.onClick}
            />



            {projects.map(project =>
              <Menu.Item
                name={project.title}
                key={project.id}
                active={this.props.activeProjectTab === project.id}
                id={project.id}
                onClick={this.onClick}
              />)}
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>

          {this.props.activeProjectTab === 'new' ?
            <NewProjectForm />
          :
          <UpdateProjectForm
            projectId={this.props.activeProjectTab}
          />
          }


        </Grid.Column>
      </Grid>


    )
  }
}


const mapStateToProps = state => {
  return {
    userId: state.currentUser.id,
    projects: state.currentUser.projects,
    activeProjectTab: state.currentUser.activeProjectTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectProject: (projectId) => {dispatch(selectProject(projectId))},
    newProject: () => {dispatch(loadNewProjectForm())},
    fetchingUserProjects: (userId) => {dispatch(fetchingUserProjects(userId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectMenu)
