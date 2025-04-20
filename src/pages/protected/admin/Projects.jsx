import React, { useContext, useState } from "react"
import { ProjectsContext } from "../../../contexts/ProjectsContext"
import ModalButton from "../../../partials/components/ModalButton"
import LoadingSpinner from "../../../partials/components/LoadingSpinner"
import ProjectCard from "../../../partials/components/project/ProjectCard"
import AddProjectModal from "../../../partials/components/project/AddProjectModal"

const Projects = () => {

  const { projects, loading } = useContext(ProjectsContext)
  const [activeTab, setActiveTab] = useState("all")
  const completedProjects = projects.filter( (p) => p.status?.statusName === "COMPLETED")
  const [ModalOpen, setModalOpen] = useState(false)


  return (
    <section id="projects" className="section-body">
      <div className="page-header">
        <h1 className="h2">Projects</h1>
        {/* <ModalButton type="add" target="#addProjectModal" text="Add Project" /> */}
        <ModalButton type="primary" onClick={() => setModalOpen(true)} text="Add Project" />
        <AddProjectModal isOpen={ModalOpen} onClose={() => setModalOpen(false)} />
      </div>
      
      <div className="tabs">
        <button className={`tab ${activeTab === "all" ? "active-tab" : ""}`} onClick={() => setActiveTab("all")}> All [{projects.length}]</button>
        <button className={`tab ${activeTab === "completed" ? "active-tab" : ""}`} onClick={() => setActiveTab("completed")}>Completed [{completedProjects.length}]</button>

      </div>
      {loading && <LoadingSpinner />}

      {!loading && projects.length === 0 && (
        <p className="content">No projects found.</p>
      )}

      {!loading && projects.length > 0 && (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects