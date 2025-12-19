import React from 'react'
import { UsersDetailsProvider } from './context/usersDetailsProvider'
import UserInfo from './components/UserInfo'

const UsersDetails = () => {
  console.log("Hola")
  return (
    <UsersDetailsProvider>
      <UserInfo />
    </UsersDetailsProvider>
  )
}

export default UsersDetails
