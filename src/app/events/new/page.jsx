"use client"

import React from 'react'
import axios from 'axios'

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.get("/api/user")
      .then((response) => {
        console.log(response)
        const { userId } = response.data
        const name = e.target.name.value

        axios.post("/api/events", { name, userId })
          .then(() => {
            alert("イベントを作成しました")
          })
          .catch(() => {
            alert("エラーが発生しました")
          })
      })
      .catch(() => {
        alert("エラーが発生しました")
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

export default page
