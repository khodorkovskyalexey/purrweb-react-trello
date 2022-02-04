import React from 'react';
import './App.css';
import Column from './components/Column/Column';
import { columns } from './api'

const App = () => {
  return (
    <div>
      <div className='row'>
        {columns.map(column => {
          return (
            <div className='col-md-3'>
              <Column name={column.name} key={column.id}>
                <p>Column content</p>
              </Column>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;