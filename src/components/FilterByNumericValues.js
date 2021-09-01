import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './FilterByNumericValues.css';
import donwArrow from '../images/down-arrow.png';

function FilterByNumericValues() {
  const {
    contextFunctions: { newNumericValuesFilter },
    filters: { columnFiltersAvailable },
  } = useContext(PlanetsContext);
  const [showFilter, setShowFilter] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function handleValueIputChange() {
    const form = document.querySelector('.filter-by-numeric-container');
    setButtonDisabled(!form.checkValidity());
  }

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
    <form className="filter-by-numeric-container">
      <button onClick={ handleClick } type="button" className="donw-arrow">
        <img
          src={ donwArrow }
          alt="down arrow"
        />
      </button>
      <p className="filter-by-numeric-title">Outros filtros</p>
      <div className="filter-by-numeric-inputs">
        <label
          htmlFor="column-filter"
          className="filter-by-numeric-column-label"
        >
          Tipo
          <select
            id="column-filter"
            data-testid="column-filter"
          >
            { columnFiltersAvailable.map((column, index) => (
              <option key={ index }>{ column }</option>
            )) }
          </select>
        </label>
        <label htmlFor="comparison-filter">
          Comparação
          <select
            id="comparison-filter"
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label
          htmlFor="value-filter"
          className="filter-by-numeric-value-label"
        >
          Valor
          <input
            required
            onChange={ handleValueIputChange }
            type="number"
            id="value-filter"
            data-testid="value-filter"
            pattern=".{1,}"
          />
        </label>
        <button
          disabled={ buttonDisabled }
          type="button"
          data-testid="button-filter"
          className="filter-by-numeric-btn"
          onClick={ newNumericValuesFilter }
        >
          Adicionar Filtro
        </button>
      </div>
    </form>
  );
}

export default FilterByNumericValues;
