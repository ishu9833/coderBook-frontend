import React from 'react'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NotFound from './components/NotFound/NotFound'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
        <Route path='/home'>
            <Home/>
          </Route>
        <Route path='/aboutMe'>
            <AboutMe/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <Register/>
          </Route>
          <Route exact path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
