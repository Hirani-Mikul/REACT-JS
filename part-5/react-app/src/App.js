import React from "react";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import route from "./utils/route"

import Header from "./Components/header";

import "./style.css"
import Form from "./Components/form";
import { GlobalProvider } from "./context/GlobalContext";


export default function App() {
  return (  
  <Router>
    <GlobalProvider>
    <div className="container">
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
 )
}