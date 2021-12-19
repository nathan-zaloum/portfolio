import React from 'react'
import { useNavigate } from 'react-router'

const Nav = () => {
  const navigate = useNavigate()

  const navHandle = (link) => {
    navigate(link)
  }

  return (
    <div className='nav-wrapper'>
      <nav>
        <a onClick={() => navHandle('/')} className='logo'>Nathan Zaloum</a>
        <ul>
          <li><a onClick={() => navHandle('/portfolio')}>Portfolio</a></li>
          <li><a onClick={() => navHandle('/games')}>Games</a></li>
          <li><a onClick={() => navHandle('/apps')}>Apps</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
