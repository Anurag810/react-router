import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const {userId} = useParams()
  return (
    <div>User Detailsm for user {userId}</div>
  )
}

export default UserDetails