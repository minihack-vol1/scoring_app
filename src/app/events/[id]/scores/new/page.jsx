"use client"

import "./style.css"

import React, { useState } from 'react'
import Board from './Board';

const page = () => {
  // TODO: チーム一覧情報の取得
  const teams = [
    "ねずみ",
    "うし",
    "とら",
    "うさぎ",
    "りゅう",
    "へび",
    "うま",
    "ひつじ",
    "さる",
    "とり",
    "いぬ",
    "いのしし",
  ]

  // TODO: 採点基準一覧の取得
  const criteria = [
    { id: "strength", name: "つよさ" },
    { id: "coolness", name: "かっこよさ" },
    { id: "cuteness", name: "かわいさ" },
    { id: "awesomeness", name: "ヤバさ" },
    { id: "funniness", name: "おもしろさ" },
  ]

  const handleSubmit = () => {
    // 各ボードの順位を取得
    const rankings = criteria.map((criterion) => {
      const board = document.getElementById(criterion.id)
      const items = Array.from(board.children).map((item) => item.textContent)
      return { criterion: criterion.id, ranking: items }
    })

    // TODO: ランキング情報を送信
    console.log(rankings)
  }

  return (
    <>
      <h1>採点する</h1>
      <div className="boards">
        {criteria.map((criterion) => (
          <Board
            id={criterion.id}
            key={criterion.id}
            name={criterion.name}
            items={teams}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>確定する！</button>
    </>
  );
}

export default page
