import React from 'react';
import './App.css';
import Column from './components/Column/Column';

const App = () => {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <Column name='TODO'>
          <p>fist text</p>
        </Column>
      </div>
      
      <div className='col-md-3'>
        <Column name='In Progress'>
          <p>2 text</p>
        </Column>
      </div>
      
      <div className='col-md-3'>
        <Column name='Testing'>
          <p>3 text</p>
        </Column>
      </div>
      
      <div className='col-md-3'>
        <Column name='Done'>
          <p>4 text</p>
        </Column>
      </div>
    </div>
  );
};

export default App;