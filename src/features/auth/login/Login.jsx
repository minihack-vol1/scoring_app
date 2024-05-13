import { SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'

const Login = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  )
}

export default Login