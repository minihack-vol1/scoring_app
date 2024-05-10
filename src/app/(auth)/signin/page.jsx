import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <h1>サインイン</h1>
      {/* TODO: Clerk導入 */}
      <Link href="/dashboard">サインインする</Link>
      <Link href="/signup">アカウントを作成する</Link>
    </>
  )
}

export default page
