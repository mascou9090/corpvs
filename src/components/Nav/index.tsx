import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">SAIR</Link>
          </li>
          <li>
            <Link to="#">CONFIGURAÇÔES</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
