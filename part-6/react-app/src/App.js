import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import route from './Routes/route';

import CompletedTodo from './CompleteTodo';
import { GlobalProvider } from './context/GlobalContext';
import Header from './Header';

import './style.css';
import TodoList from './TodoList';

const App = () => {
  return (
    <Router>
      <GlobalProvider>
        <div className='container'>
          <Header />
          <Switch>
            {route.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
};

export default App;
