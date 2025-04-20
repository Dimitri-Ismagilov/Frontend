import { createContext, useEffect, useState } from "react";

export const ProjectsContext = createContext()
export const ProjectsProvider = ({children}) => {
    const apiUri = "https://dimawebapp-d4e9d5ahexdbc7bw.swedencentral-01.azurewebsites.net/api/projects"

    // jag
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)

    const getProjects = async () => {
        setLoading(true)
        const res = await fetch(apiUri, {
            headers: {
                "X-API-KEY": "ZGRmMThkZmMtODg2Zi00NmM4LTljZDEtYzUyN2VjYTE1YWJi" 
            }
        })
    

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