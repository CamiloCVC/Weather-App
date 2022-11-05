import React from 'react';
import './Card.css';


export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="cardContainer">
        <div className="cardTitle">
            <button onClick={onClose} className="closeButtom"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="7" x2="20" y2="7" />
  <line x1="10" y1="11" x2="10" y2="17" />
  <line x1="14" y1="11" x2="14" y2="17" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg></button>
            <h5 className="card-title">{name}</h5>
        </div>
        <div className="card-body">
          <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="100" height="100" alt="" />
          <div className="contentTemp">
            <div className="temp">
              <p>Min</p>
              <p>{(min-273.15).toFixed(1)}°</p>
            </div>
            <div className="temp">
              <p>Max</p>
              <p>{(max-273.15).toFixed(1)}°</p>
            </div>
          </div>
        </div>
      </div>
    );
};
