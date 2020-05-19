import React from 'react';
import {BrowserRouter, NavLink, Link, Switch, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1> Home component </h1>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h1> About component </h1>
    </div>
  )
}

const NavbarLink = () => {
  return (
    <ul className='navbar'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  )
}

const NavbarNavlink = () => {
  return (
    <ul className='navbar'>
      <li><NavLink exact to='/' activeclassname="active">Home</NavLink></li>
      <li><NavLink exact to='/about' activeclassname="active">About</NavLink></li>
    </ul>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <NavbarLink /> <br/>
      <NavbarNavlink />
      <Switch>
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
