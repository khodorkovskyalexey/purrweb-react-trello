import React, { useState } from 'react';
import './App.css';
import { ColumnsArray } from './api'
import { Column } from './components/Column';
import { Modal } from './components/Modal';


const App = () => {
  const [user, setUser] = useState('');
  const [columns, setColumns] = useState(ColumnsArray);
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className='app'>
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
        <Modal active={modalActive} setActive={setModalActive}/>
    </div>
  );
};

export default App;