import { createContext, useEffect, useState } from "react";

export const MembersContext = createContext()
export const MembersProvider = ({children}) => {
    const apiUri = "https://localhost:7107/api/members"

    //jag
    const[members, setMembers] = useState([])
    const[loading, setLoading] = useState(false)

    const getMembers = async () => {
        setLoading(true)
        const res = await fetch(apiUri)

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