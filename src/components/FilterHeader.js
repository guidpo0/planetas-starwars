import React from 'react';
import FilterByNumericValues from './FilterByNumericValues';
import FilterByOrder from './FilterByOrder';
import FilterByText from './FilterByText';
import './FilterHeader.css';
import starWars from '../images/starwars-logo.png';

function FilterHeader() {
  return (
    <header className="header">
      <img src={ starWars } alt="StarWars logo" className="header-title" />
      <div className="filters-container">
        <FilterByText />
        <FilterByOrder />
        <FilterByNumericValues />
      </div>
    </header>
  );
}

export default FilterHeader;
