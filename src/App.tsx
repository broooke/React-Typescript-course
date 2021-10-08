import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types'
import axios from 'axios'

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  } 

  return (
    <div>
      <Card onClick={(num) => console.log(num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Create</button>
      </Card>
      <UserList users={users} />
    </div>
  )
}

export default App
