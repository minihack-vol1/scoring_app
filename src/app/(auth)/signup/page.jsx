import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <h1>アカウント作成</h1>
      {/* TODO: Clerk導入 */}
      <Link href="/dashboard">アカウント作成する</Link>
      <Link href="/signin">サインインする</Link>
    </>
  )
}

export default page
