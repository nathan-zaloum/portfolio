import React from 'react'

import { checkVideo } from '../utils/utils'

const Card = ({ img_url, link_url, title, desc, button_title }) => {

  return (
    <div className='card'>
        {checkVideo(img_url) ?
          <div className='card-image'><iframe width='500' height='300' src={img_url} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe></div> :
          <div className="card-image"><img src={img_url} /></div>
        }
        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            {desc.map((d, i) => <p key={i} className="card-text">{d}</p>)}
            <div className='card-spacer'></div>
            {link_url === '' ?
              <button className="btn card-btn">{button_title}</button> :
              <a href={link_url} target='_blank'><button className="btn card-btn">{button_title}</button></a>
            }
        </div>
    </div>
  )
}

export default Card
