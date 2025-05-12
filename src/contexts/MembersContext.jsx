import { createContext, useEffect, useState } from "react";

export const MembersContext = createContext()
export const MembersProvider = ({children}) => {
    const apiUri = "https://dimawebapp-d4e9d5ahexdbc7bw.swedencentral-01.azurewebsites.net/api/users"

    const[members, setMembers] = useState([])
    const[loading, setLoading] = useState(false)

    const getMembers = async () => {
        setLoading(true)
        const res = await fetch(apiUri, {
            headers: {
                "X-API-KEY": "ZGRmMThkZmMtODg2Zi00NmM4LTljZDEtYzUyN2VjYTE1YWJi"  
            }
        })

        if (res.ok) {
            const data = await res.json()
            setMembers(data)
        }

        setLoading(false)
    }

    useEffect (() => {
        getMembers()
    }, [])

    return (
        <MembersContext.Provider value= {{members, loading, getMembers}}>
            {children}
        </MembersContext.Provider>
    )
}