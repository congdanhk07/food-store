'use client'
import React from 'react'

function Error({ error }) {
  return (
    <>
      <main className='error'>
        <h1>An error occurred!</h1>
        <p>Failed to load meals. Please try again later</p>
      </main>
    </>
  )
}

export default Error
