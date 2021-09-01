import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './FilterByText.css';
import donwArrow from '../images/down-arrow.png';

function FilterByText() {
  const { contextFunctions: { handleNameFilterChange } } = useContext(PlanetsContext);
  const [showFilter, setShowFilter] = useState(false);

  function handleClick({ target }) {
    const button = target.parentNode;
    const container = target.parentNode.parentNode;
    if (!showFilter) {
      container.classList.add('show-filter');
      button.classList.add('rotate-button');
    } else {
      container.classList.remove('show-filter');
      button.classList.remove('rotate-button');
    }
    setShowFilter(!showFilter);
  }

  return (
    <div className="filter-by-text-container">
      <button onClick={ handleClick } type="button" className="donw-arrow">
        <img
          src={ donwArrow }
          alt="down arrow"
        />
      </button>
      <div
        className="filter-by-text-label"
      >
        Filtrar pelo nome
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleNameFilterChange }
          placeholder="Digite o nome do planeta"
        />
      </div>
    </div>
  );
}

export default FilterByText;
