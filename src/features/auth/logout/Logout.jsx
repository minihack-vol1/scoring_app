import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const Logout = () => {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Logout