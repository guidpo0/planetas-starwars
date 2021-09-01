import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import './FiltersSelected.css';

function FiltersSelected() {
  const {
    contextFunctions: { removeNumericValuesFilter },
    filters: { filterByNumericValues },
  } = useContext(PlanetsContext);

  return (
    <div className="filters-selected-container">
      {
        filterByNumericValues.map(({ column, comparison, value }, index) => (
          <div key={ index } data-testid="filter" className="filter-selected">
            <button
              id={ column }
              type="button"
              onClick={ removeNumericValuesFilter }
            >
              x
            </button>
            <p>
              { `${column} ${comparison} ${value}` }
            </p>
          </div>
        ))
      }
    </div>
  );
}

export default FiltersSelected;
