import React, { useContext } from 'react'
import { ClientsContext } from '../../../contexts/ClientsContext'

const Clients = () => {
  const { clients, loading } = useContext(ClientsContext)

  return (
    <div>
      
      {/* lodding delen plus att man konrolerar om det finns nånting i den */}
      {
        clients.map(client =>(
          <div key={client.id}>{client.clientName}</div>
        ))
      }
    </div>
  )
}

export default Clients