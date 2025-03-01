import React from 'react';

import Header from './Components/Header';
import MessageArea from './Components/MessageArea';

import './utils.css';
import './style.css';
import Form from './Components/Form';
import { GlobalProvider } from './Utils/Context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        <Header />
        <MessageArea />
        <Form />
      </div>
    </GlobalProvider>
  );
}

export default App;
