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

  return (
    <>
      <h1>採点する</h1>
      <div className="boards">
        {criteria.map((criterion) => (
          <Board key={criterion.id} name={criterion.name} items={teams} />
        ))}
      </div>
    </>
  );
}

export default page
