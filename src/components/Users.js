import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function Users() {
  const [searchParams, setSearchParams] = useSearchParams()
  const users = ["Anurag Mishra", "Laksh Mishra", "Jigar Mishra"]
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      {
        showActiveUsers ? <h4>Active users</h4> : <h4>All Users</h4>
      }
      <button onClick={() => setSearchParams({filter: "active"})}>Active User</button>
      <button onClick={() => setSearchParams({})}>Reset Filter</button>
      <nav>
        {
          users.map((user, index) => <Link to={index.toString()} key={index}>{user}</Link>)
        }
        <Link to='admin'>Administrator</Link>
			</nav>
      <Outlet/>
    </div>
  )
}

export default Users