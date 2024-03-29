'use client'
import { Layout } from '@/app/components/ui'
import { useEffect, useState } from 'react'

const UsersPage = () => {
  const [users, setUsers] = useState<any>([])

  const getUsers = async () => {
    const response = await fetch('/api/users')
    const data = await response.json()
    setUsers(data.data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  return (
    <Layout>
      <div className="flex flex-col items-center gap-5 my-5">
        {users &&
          users.map((user: any) => (
            <div
              key={user.id}
              className="flex items-center rounded-xl pl-5 bg-white h-20 w-4/5 md:w-1/5 text-indigo-900"
            >
              <img
                src={user.picture}
                alt="User Profile"
                className="w-10 h-10 rounded-full mr-2"
              />

              <div>
                <h1 className="text-3xl font-bold text-indigo-900">
                  {user.firstName}
                </h1>
                <span className="text-gray-400">{user.title}</span>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default UsersPage
