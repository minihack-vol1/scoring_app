import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
      <h1>ダッシュボード</h1>
      <Link href="/events/new">新しくイベントを作成する</Link>

      <h2>あなたのイベント一覧</h2>
      {/* TODO: アサインされたイベントを表示 */}
      <Link href="/events/1/scores/new">イベント1</Link>
    </>
  )
}

export default page
