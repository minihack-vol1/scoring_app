import React from 'react'

const page = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

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
