import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <h1>イベントを作成する</h1>

      {/* TODO: form作成 */}
      <Link href="/events/1">イベント作成</Link>
    </>
  )
}

export default page
