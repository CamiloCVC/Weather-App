import React from 'react';
import Title from './Title.jsx'
import SearchBar from './SearchBar.jsx';
import './Nav.css';



function Nav({onSearch}) {
  return (
      <nav className="navbar">
        <div className="cont">
        <Title/>
        </div>
        <div className="cont2">
        <SearchBar
          onSearch={onSearch}
        />
        </div>
      </nav>
    
  );
};

export default Nav;
