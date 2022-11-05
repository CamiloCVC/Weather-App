import React from 'react';
import './Cards.css';
import x from '../img/fondoplaceholder.png' 

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if (cities.length !== 0){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            id={c.id}
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
          /> )}
      </div>
    );}
    else{
      return(
          <div className="img-placeholder">
            <img src={x} alt="Not found" />
          </div>
        )}
}
