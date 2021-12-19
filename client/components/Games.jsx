import React from 'react'

import Card from './Card'

import { titles, descriptions, images, links, buttons } from '../utils/game-dictionary'

const Games = () => {
  return (
    <>
      <div className='background'></div>
      <div className='list-wrapper'>
        <ul className='cards'>
          {titles.map((title, i) => <li key={i} className='cards-item'>
            <Card title={titles[i]} desc={descriptions[i]} img_url={images[i]} link_url={links[i]} button_title={buttons[i]} />
          </li>)}
        </ul>
      </div>
    </>
  )
}

export default Games
