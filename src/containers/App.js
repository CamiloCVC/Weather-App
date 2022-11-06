import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route , Routes } from 'react-router-dom';
import Ciudad from '../components/Ciudad';
import Footer from '../components/Footer';
import Swal from 'sweetalert2'

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }   

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    if (cities.every((e) => removeAccents(e.name.toLowerCase()) !== removeAccents(ciudad.toLowerCase()))) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(r => r.json())
        .then((recurso) => {
  
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
          } else {Swal.fire({
            icon: 'question',
            title: `${ciudad}?`,
            text: 'This city does not exist!',
            confirmButtonColor: '#448881',
            width: '26em',
            focusConfirm: "false"
          })}
        });
      } else {Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'This city is repeated!',
        confirmButtonColor: '#448881',
        width: '26em',
      });}
  
    }
    
  
  return (
    <div className="App">
      <div className='contenido'>
      <Nav onSearch={onSearch}/>
      <Routes>
      <Route
      path='/'
      element={<Cards cities={cities}
      onClose={onClose} />}
      />
      <Route
      path='/ciudad/:ciudadId'
      element={<Ciudad city={cities}/>}
      />
      </Routes>
      </div>
      {/* <div className='footer'>
        <p>camilo </p>
      </div> */}
      <Footer/>
      </div>
  );
}

export default App;



  
