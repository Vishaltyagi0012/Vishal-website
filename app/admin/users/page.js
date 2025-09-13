'use client';


import React, { useEffect, useState } from 'react'


const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getAllUsersData = async () => {
    try {
      setIsLoading(true)
      const user = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null

      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': user ? String(user.role) : ''
        },
      })

      const data = await response.json()
      console.log(data)

      if (response.ok) {
        setUsers(data.users)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteUser = async (id) => {
    try {
      const user = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null

      const response = await fetch(`http://localhost:5000/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'x-user-role': user ? String(user.role) : ''
        },
      })

      const data = await response.json()
      console.log(`Users after delete: ${data}`)

      if (response.ok) {
        getAllUsersData() // Refresh the users list
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsersData()
  }, [])

  if (isLoading) {
    return <div>Loading users...</div>
  }

  return (
    <section className="p-6 bg-gray-50 min-h-screen  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="mb-6  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-2  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Admin Users Data</h1>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <table className="table-auto w-full bg-white border border-gray-200 rounded-lg  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <thead className="bg-blue-600 text-white  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <tr>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold uppercase tracking-wide  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                Name
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold uppercase tracking-wide  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                Email
              </th>
              <th className="border border-gray-300 px-6 py-4 text-center font-semibold uppercase tracking-wide  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.map((curUser, index) => (
              <tr
                key={curUser._id || index}
                className="hover:bg-gray-50 transition-colors duration-200  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                <td className="border border-gray-300 px-6 py-4 text-gray-800 font-medium  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {curUser.name}
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-600  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {curUser.email}
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  <button
                    onClick={() => deleteUser(curUser._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

  )
}

export default AdminUsers
