import React, { useContext } from 'react'
import { ProjectsContext } from '../../../contexts/ProjectsContext'

const Projects = () => {

  const { projects, loading } = useContext(ProjectsContext)


  return (
    <div>
      Projects
    </div>
  )
}

export default Projects
