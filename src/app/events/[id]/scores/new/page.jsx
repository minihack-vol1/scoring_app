"use client"

import React, { useState } from 'react'
import Board from './Board';

const page = () => {
  return (
    <>
      <h1>採点する</h1>
      <div className="boards">
        <Board />
        <Board />
        <Board />
      </div>
    </>
  );
}

export default page
