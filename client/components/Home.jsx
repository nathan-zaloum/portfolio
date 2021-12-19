import React from 'react'

const Home = () => {
  return (
    <>
      <div className='background'></div>
      <div className='home-wrapper'>
        <div className='page'>
          <div className='text-container'>
            <h1>Hi there, I'm Nathan Zaloum.</h1>
            <h2>I'm a full stack software developer with a background in Game and App development.</h2>
            <div className='tech-stack'>
              <div className='tech'>HTML</div>
              <div className='tech'>CSS/SASS</div>
              <div className='tech'>C#</div>
              <div className='tech'>React</div>
              <div className='tech'>Handlebars</div>
              <div className='tech'>Redux</div>
              <div className='tech'>Node.js</div>
              <div className='tech'>Express.js</div>
              <div className='tech'>Jest</div>
              <div className='tech'>Knex/SQLite3</div>
              <div className='tech'>REST API</div>
              <div className='tech'>Unity</div>
              <div className='tech'>Vuforia</div>
            </div>
          </div>
          <div className='gif-container'>
            <img src='images/coding-graphic.gif'></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
