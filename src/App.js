import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h2>Hola</h2>
)

const Productos = () => (
  <h2>productos</h2>
)

const Home = () => (
  <h2>Home</h2>
)

const App = () => (
  <BrowserRouter>
    <>
      <Route path='/' exact component={Home} />
      <Route path='/' exact component={Home} />
      <Route path='/hola/' component={Hola} />
      <Route path='/productos' component={Productos} />
    </>
  </BrowserRouter>
)

export default App
