import React from"react"
import ProjectEmblem from "../../../assets//images//project-emblem.svg"
import { calculateDaysLeft, getDaysLeftStatusClass, getDeadlineText } from "../../../units/dateUnits"


const ProjectCard = ({ project}) => {
    const daysLeft = calculateDaysLeft(project.endDate)
    const daysLeftClass = getDaysLeftStatusClass(daysLeft)
    const deadlineText = getDeadlineText(daysLeft)


    return (
        <div className="card project-card">
            <div className="project-card-header">
                <img src={ProjectEmblem} alt="project emblem" className="project-icon" />
                <div className="project-info">
                    <h6 className="project-title">{project.projectName}</h6>
                    <p className="project-client">{project.client?.clientName}</p>
                </div>
                <button className="options-button">⋯</button>
            </div>

            <p className="project-description">{project.description}</p>
            <div className={`project-days-left ${daysLeftClass}`}>
                {deadlineText}
            </div>
        </div>
    )
}

export default ProjectCard