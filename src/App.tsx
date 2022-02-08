import React, { useState } from 'react';
import './App.css';
import { ColumnsArray, CardsArray, CardModel } from './api'
import { Column } from './components/Column';
import { Modal } from './common/components';
import { Card, CardsList } from './components/Card';
import { getById } from './common/functions';


const App = () => {
  const [user, setUser] = useState('');
  const [columns, setColumns] = useState(ColumnsArray);
  const [metModalActive, setMetModalActive] = useState(true);
  const [cardModalActive, setCardModalActive] = useState(false);
  const [cards, setCards] = useState(CardsArray);
  const [openCard, setOpenCard] = useState({} as CardModel);

  function openCardModel(cardId: number) {
    setCardModalActive(true);
    setOpenCard(getById(cards, cardId));
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
              <Column name={column.name} key={column.id}>
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
    </div>
  );
};

export default App;