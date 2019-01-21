import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Hola = () => (
  <h2>Hola</h2>
)

const Productos = () => (
  <h2>productos</h2>
)

const App = () => (
  <BrowserRouter>
    <>
      <Route path='/hola' component={Hola} />
      <Route path='/productos' component={Productos} />
    </>
  </BrowserRouter>
)

export default App
