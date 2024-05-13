import Login from '@/src/features/auth/login/Login'
import Logout from '@/src/features/auth/logout/Logout'
import React from 'react'

const Header = () => {
  return (
    <header>
      <Login />
      <Logout />
    </header>
  )
}

export default Header