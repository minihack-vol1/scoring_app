"use client"

import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.get("/api/user")
      .then((res) => {
        const { userId } = res.data
        const name = e.target.name.value

        axios.post("/api/events", { name, userId })
          .then((res2) => {
            alert("イベントを作成しました")

            const { lastInsertId } = res2.data
            router.push(`/events/${lastInsertId}`)
          })
          .catch((err) => {
            alert("エラーが発生しました")
            console.error(err);
          })
      })
      .catch((err) => {
        alert("エラーが発生しました")
        console.error(err);
      })
  }

  return (
    <>
      <h1>イベントを作成する</h1>
      <form method='post' onSubmit={handleSubmit}>
        <label htmlFor="name">イベント名</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">作成</button>
      </form>
    </>
  )
}

export default Page
