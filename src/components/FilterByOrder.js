import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './FilterByOrder.css';
import donwArrow from '../images/down-arrow.png';

function FilterByOrder() {
  const [orderColumn, setOrderColumn] = useState('name');
  const [orderSort, setOrderSort] = useState('ASC');
  const [showFilter, setShowFilter] = useState(false);

  const { data, contextFunctions: { newOrderSort } } = useContext(PlanetsContext);

  function handleOrderColumnChange({ target: { value } }) {
    setOrderColumn(value);
  }

  function handleOrderSortChange({ target: { id } }) {
    setOrderSort(
      id.includes('asc') ? 'ASC' : 'DESC',
    );
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
    <div className="filter-by-order-container">
      <button onClick={ handleClick } type="button" className="donw-arrow">
        <img
          src={ donwArrow }
          alt="down arrow"
        />
      </button>
      <p className="filter-by-order-title">Ordenar por</p>
      <div className="filter-by-order-inputs">
        <label
          htmlFor="column-sort"
          className="filter-by-order-column-label"
        >
          Coluna
          <select
            onChange={ handleOrderColumnChange }
            id="column-sort"
            data-testid="column-sort"
          >
            {
              data[0] !== undefined
                ? Object.keys(data[0]).map((column, index) => (
                  <option key={ index }>{ column }</option>
                ))
                : <option>Carregando</option>
            }
          </select>
        </label>
        <div className="radios-container">
          <label htmlFor="column-sort-input-asc">
            <input
              type="radio"
              id="column-sort-input-asc"
              name="column-sort-input"
              data-testid="column-sort-input-asc"
              defaultChecked
              onChange={ handleOrderSortChange }
            />
            Ascendente
          </label>
          <label htmlFor="column-sort-input-desc">
            <input
              type="radio"
              name="column-sort-input"
              id="column-sort-input-desc"
              data-testid="column-sort-input-desc"
              onChange={ handleOrderSortChange }
            />
            Descendente
          </label>
        </div>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => newOrderSort(orderColumn, orderSort) }
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default FilterByOrder;
