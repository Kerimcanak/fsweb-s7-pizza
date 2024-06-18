import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './MainPage';
import OrderPizza from './orderPizza';
import Success from './success';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/order-pizza" component={OrderPizza} />
      <Route path="/success" component={Success} />
    </Router>
  );
}

export default App;

