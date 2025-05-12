import React, { useContext } from 'react'
import { MembersContext } from '../../../contexts/MembersContext'

const Members = () => {

const { members, loading } = useContext(MembersContext)

  return (
    <div>
      <h1 className="h2">Members</h1>
      {
        members.map(member =>(
          <div key={member.id}>{member.firstName} {member.lastName}</div>
        ))
      }
    </div>
  )
}

export default Members