import React, { useState } from 'react';
import './App.css';
import { ColumnsArray, CardsArray, CardModel, ColumnModel } from './api'
import { Column } from './components/Column';
import { Card, CardsList } from './components/Card';
import { getById } from './common/functions';
import { Modal } from './common/components';


const App = () => {
  const [user, setUser] = useState('');
  const [columns, setColumns] = useState(ColumnsArray);
  const [metModalActive, setMetModalActive] = useState(true);
  const [cardModalActive, setCardModalActive] = useState(false);
  const [cards, setCards] = useState(CardsArray);
  const [openCard, setOpenCard] = useState({} as CardModel);
  const [renamedColumn, setRenamedColumn] = useState({} as ColumnModel);
  const [renameModalActive, setRenameModalActive] = useState(false);

  function openCardModel(cardId: number) {
    setCardModalActive(true);
    setOpenCard(getById(cards, cardId));
  }

  function setRenamedColumnById(id: number) {
    setRenamedColumn(getById(columns, id));
  }

  function setColumnName(id: number, name: string) {
    setColumns(columns.map(column => {
      if(column.id === id) {
        column.name = name;
      }
      return column;
    }));
  }

  return (
    <div className='app'>
      <header>
        Hello, {user}
        <button className='fl_r' onClick={() => setMetModalActive(true)}>Set name</button>
      </header>
      <div className='row'>
        {columns.map(column => {
          return (
            <div className='col-md-3' key={column.id}>
              <Column 
                name={column.name} 
                id={column.id} 
                key={column.id} 
                setRenameModalActive={setRenameModalActive} 
                setRenamedColumn={setRenamedColumnById}
              >
                <CardsList 
                  cards={cards.filter(card => card.columnId === column.id)}
                  openCardModel={openCardModel}
                  key={column.id}
                />
              </Column>
            </div>
          );
        })}
      </div>
      <Modal active={cardModalActive} setActive={setCardModalActive}>
        <Card title={openCard.title} description={openCard.description} author={openCard.author} column={getById(columns, openCard.columnId)?.name}/>
      </Modal>
      <Modal active={metModalActive} setActive={setMetModalActive}>
        <form onSubmit={ event => {
          setMetModalActive(false);
          event.preventDefault();
        } }>
          <label>
            Имя:
            <input type="text" value={user} onChange={event => setUser(event.target.value)} />
          </label>
          <input type="submit" value="Отправить" />
        </form>
      </Modal>
      <Modal active={renameModalActive} setActive={setRenameModalActive}>
        <form onSubmit={ event => {
            setRenameModalActive(false);
            event.preventDefault();
        } }>
            <label>
                Имя:
                <input type="text" value={renamedColumn.name} onChange={event => setColumnName(renamedColumn.id, event.target.value)} />
            </label>
            <input type="submit" value="Отправить" />
        </form>
      </Modal>
    </div>
  );
};

export default App;