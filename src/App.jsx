import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './MainPage';
import OrderPizza from './orderPizza';
import OrderPizzaOptions from './orderPizzaOptions';
import OrderPizzaComplete from './orderPizzaComplete';
import Success from './success';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/order-pizza/main" component={OrderPizza} />
      <Route path="/order-pizza/options" component={OrderPizzaOptions} />
      <Route path="/order-pizza/complete" component={OrderPizzaComplete} />
      <Route path="/success" component={Success} />
    </Router>
  );
}

export default App;

