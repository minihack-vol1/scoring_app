import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <h1>イベント詳細</h1>
      <Link href="/events/1/scores">採点結果をみる</Link>
    </>
  )
}

export default page
