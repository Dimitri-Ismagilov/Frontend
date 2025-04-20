import React, { useState, useContext } from "react";
import { validateProjectForm } from "../../../utils/validateProjectForm";
import { ProjectsContext } from "../../../contexts/ProjectsContext";

const AddProjectForm = ({ onClose, clients, users }) => {
    
    const { addProject } = useContext(ProjectsContext)

    const [formData, setFormData] = useState({
        projectName: "",
        clientName: "",
        description: "",
        startDate: "",
        endDate: "",
        firstName: "",
        budget: "",
    })

    const [errors, setErrors] = useState({})

    if (!clients || !users) return <p>Loading form data...</p>

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev)  => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validateProjectForm(formData)
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors)
          return
        }

        const newProject = {
            projectName: formData.projectName,
            description: formData.description,
            startDate: new Date(formData.startDate).toISOString(),
            endDate: new Date(formData.endDate).toISOString(),
            budget: parseFloat(formData.budget),
            client: {
              id: formData.clientName,
            },
            user: {
              id: formData.firstName,
            },
            status: { statusName: "IN_PROGRESS" },
          }
      
          await addProject(newProject)
          onClose()
        }

    return (
        <form onSubmit={handleSubmit} className="modal-form">
            <label>Project Name</label>
            <input name="projectName" value={formData.projectName} onChange={handleChange} />
            {errors.projectName && <span className="error">{errors.projectName}</span>}
        
            <label>Client</label>
            <select name="clientName" value={formData.clientName} onChange={handleChange}>
            <option value="">-- Select client --</option>
            {clients.map((client) => (
                <option key={client.id} value={client.id}>{client.clientName}</option>
            ))}
            </select>
            {errors.clientId && <span className="error">{errors.clientId}</span>}
        
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
            {errors.description && <span className="error">{errors.description}</span>}
        
            <label>Start Date</label>
            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
            {errors.startDate && <span className="error">{errors.startDate}</span>}
        
            <label>End Date</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
            {errors.endDate && <span className="error">{errors.endDate}</span>}
        
            <label>Project Owner</label>
            <select name="firstName" value={formData.firstName} onChange={handleChange}>
            <option value="">-- Select owner --</option>
            {users.map((user) => (
                <option key={user.id} value={user.id}>{user.firstName} {user.lastName}</option>
            ))}
            </select>
            {errors.ownerId && <span className="error">{errors.ownerId}</span>}
        
            <label>Budget</label>
            <div className="input-with-symbol">
            <span>$</span>
            <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                step="0.01"
            />
            </div>
            {errors.budget && <span className="error">{errors.budget}</span>}
        
            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}


export default AddProjectForm