import React, { useState } from 'react';
import './App.css';
import { ColumnsArray } from './api'
import { Column } from './components/Column';
import { Modal } from './components/Modal';


const App = () => {
  const [user, setUser] = useState('');
  const [columns, setColumns] = useState(ColumnsArray);
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='app'>
      <header>
        <p>Hello, {user}</p>
        <button onClick={() => setModalActive(true)}>Set name</button>
      </header>
      <div className='row'>
        {columns.map(column => {
          return (
            <div className='col-md-3' key={column.id}>
              <Column name={column.name} key={column.id}>
                <p>Column content</p>
              </Column>
            </div>
          );
        })}
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <form onSubmit={ event => {
          setModalActive(false);
          event.preventDefault();
        } }>
          <label>
            Имя:
            <input type="text" value={user} onChange={event => setUser(event.target.value)} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </Modal>
    </div>
  );
};

export default App;