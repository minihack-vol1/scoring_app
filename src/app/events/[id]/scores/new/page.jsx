"use client"

import "./style.css"

import React, { useState } from 'react'
import Board from './Board';

const page = () => {
  return (
    <>
      <h1>採点する</h1>
      <div className="boards">
        <Board name="つよさ" />
        <Board name="かっこよさ" />
        <Board name="かわいさ" />
        <Board name="ヤバさ" />
        <Board name="おもしろさ" />
      </div>
    </>
  );
}

export default page
