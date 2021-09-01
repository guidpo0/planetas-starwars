import React from 'react';
import FilterHeader from './components/FilterHeader';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import FiltersSelected from './components/FiltersSelected';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <div className="root">
        <span className="planet-0" />
        <span className="planet-1" />
        <span className="planet-2" />
        <span className="planet-3" />
        <span className="planet-4" />
        <span className="planet-5" />
        <span className="planet-6" />
        <FilterHeader />
        <FiltersSelected />
        <Table />
      </div>
    </PlanetsProvider>
  );
}

export default App;
