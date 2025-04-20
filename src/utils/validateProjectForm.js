export const validateProjectForm =(data) => {
    const errors = {}
    if (!data.projectName) errors.projectName = "Project name is required."
    if (!data.projectName)errors.projectName = "Client is required"
    if (!data.description) errors.description = " Description is required."
    if (!data.startDate) errors.startData = "Start date is required"
    if (!data.endDate) errors.endDate = "End date is required"
    if (!data.firstName) errors.firstName = "Project owner is required."
    if (!data.budget || data.budget <=0) errors.budget = "Budget must be greater than 0."

    return errors
}