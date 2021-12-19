import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Error404 from './Error404'
import Nav from './Nav'
import Home from './Home'
import Portfolio from './Portfolio'
import Games from './Games'
import Apps from './Apps'

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [toggleIcon, setToggleIcon] = useState('images/sun.png')

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light')
      setToggleIcon('images/moon.png')
    }
    if (theme === 'light') {
      setTheme('dark')
      setToggleIcon('images/sun.png')
    }
  }

  return (
    <div className={'theme ' + (theme === 'dark' ? 'theme--dark' : 'theme--light')}>
        <Nav />
        <Routes>
          <Route path='*'                element={ <Error404 />  } />
          <Route exact path='/'          element={ <Home />      } />
          <Route exact path='/portfolio' element={ <Portfolio /> } />
          <Route exact path='/games'     element={ <Games />     } />
          <Route exact path='/apps'      element={ <Apps />      } />
        </Routes>
        <div className='mode-switch' onClick={toggle}><img src={toggleIcon}></img></div>
    </div>
  )
}

export default App
