import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Gallery from './components/gallery/gallery'
import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import DonatePage from './pages/donatePage'

import Home from './components/home'
import Team from './pages/team'
import Article from './pages/articles'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route exact path='/team'>
          <Team />
        </Route>
        <Route exact path='/donate'>
          <DonatePage />
        </Route>
        <Route exact path='/article'>
          <Article />
        </Route>
      </Switch>
      <Route>
        <Footer />
      </Route>
      {/* <Route path='/shop'>
          <Shop />
        </Route> */}
      {/* <Route path='/cart'>
          <Cart />
        </Route> */}
    </>
  )
}

export default App
