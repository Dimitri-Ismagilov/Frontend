import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext()
export const ProjectsProvider = ({children}) => {
    const apiUri = "https://localhost:7107/api/projects"

    // jag
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    const getProjects = async () => {
        setLoading(true)
        const res = await fetch(apiUri)

        if (res.ok) {
            const data = await res.json()
            setProjects(data)
        }

        setLoading(false)
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <ProjectsContext.Provider value= {{projects, loading, getProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}