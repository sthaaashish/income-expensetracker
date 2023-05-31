import React from 'react'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
            <a href='/home'>Home</a>
        </li>
        <li>
            <a href='/income'>income</a>
        </li>
        <li>
            <a href='/expense'>Expense</a>
        </li>
      </ul>
    </div>
  )
}
