import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar, About, AboutContact, Home, NotFound } from './components.js'

//wersja 1 - brak Switcha
let routing1 = (
  <div>
    <Route path='/about/contact' component={AboutContact} />
    <Route path='/about' component={About} />
    <Route path='/' component={Home} />
    <Route component={NotFound} />
  </div>
);

//wersja 2 - zła kolejność
let routing2 = (
  <Switch>
    <Route path='/about' component={About} />
    <Route path='/about/contact' component={AboutContact} />
    <Route exact path='/' component={Home} />
    <Route component={NotFound} />
  </Switch>
);

//wersja 3- poprwana wersja
let routing3 = (
  <Switch>
    <Route path='/about/contact' component={AboutContact} />
    <Route path='/about' component={About} />
    <Route exact path='/' component={Home} />
    <Route component={NotFound} />
  </Switch>
);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {routing3}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
