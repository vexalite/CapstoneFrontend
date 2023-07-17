import React from 'react'
import { Link } from 'react-router-dom'

export default function ProxyContent() {
  return (
    <div style={{height: '60vh'}}>
      <Link to='/entry'>
        <button>Click to submit</button>
      </Link>
    </div>
  )
}
