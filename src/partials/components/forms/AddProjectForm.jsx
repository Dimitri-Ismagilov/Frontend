import React, { useState, useContext } from "react";
import { validateProjectForm } from "../../../utils/validateProjectForm";
import { ProjectsContext } from "../../../contexts/ProjectsContext";
import { ClientsContext } from '../../../contexts/ClientsContext'

const AddProjectForm = ({ onClose, clients, users }) => {
    const { addProject } = useContext(ProjectsContext);

    const [formData, setFormData] = useState({
        projectName: "",
        clientId: "",
        description: "",
        startDate: "",
        endDate: "",
        ownerId: "",
        budget: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateProjectForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const newProject = {
            projectName: formData.projectName,
            description: formData.description,
            startDate: formData.startDate,
            endDate: formData.endDate,
            budget: parseFloat(formData.budget),
            clientId: formData.clientId,
            userId: formData.ownerId,
            statusId: 1
        };

        await addProject(newProject);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="modal-form">
            {/* Alla fält med uppdaterade namn */}
            <label>Project Name</label>
            <input name="projectName" value={formData.projectName} onChange={handleChange} />
            {errors.projectName && <span className="error">{errors.projectName}</span>}
            
            <label>Client</label>
            <select name="clientName" value={formData.clientName} onChange={handleChange}>
            <option value="">-- Select client --</option>
            {
       clients.map((client) => (
        <option key={client.id} value={client.id}>{client.clientName}</option>
    ))}
        </select>
            {errors.clientId && <span className="error">{errors.clientId}</span>}

        </form>
    );
};

export default AddProjectForm;