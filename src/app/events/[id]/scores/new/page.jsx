"use client"

import "./style.css"

import React, { useState } from 'react'
import Board from './Board';

const page = () => {
  return (
    <>
      <h1>採点する</h1>
      <div className="boards">
        <Board id="1" />
        <Board id="2" />
        <Board id="3" />
        <Board id="4" />
        <Board id="5" />
      </div>
    </>
  );
}

export default page
