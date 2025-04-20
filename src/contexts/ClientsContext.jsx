import { createContext, useEffect, useState } from "react";

export const ClientsContext = createContext()
export const ClientsProvider = ({children}) =>{
    const apiUri = "https://localhost:7107/api/clients"

    //bra att utveckla mer lägga till felmeddelande eller något annat

    //Funktioner på vad jag vill hämta från databasen
    const [clients, setClients] = useState([])
    //för att animera en spiner meddan den laddar informatinen
    const [loading, setLoading] = useState(false)

    const getClients = async () => {
        setLoading(true)
        try {
            const res = await fetch(apiUri, {
                   headers: {
                        "X-API-KEY": "ZGRmMThkZmMtODg2Zi00NmM4LTljZDEtYzUyN2VjYTE1YWJi" 
                }
            })
            if (res.ok){
                const data = await res.json()
                setClients(data)
            }
        }

        catch {console.log}

        setLoading(false)
    }

    //för att hämta clienter direct
    useEffect(() => {
        getClients()
    }, [])

    return(

        //här kan vi mappa våra olicka statevärden eller metoder som vi vill göra axessbara utanför.
        <ClientsContext.Provider value= {{clients, loading, getClients}}> 
        {children}
        </ClientsContext.Provider>
    )
}