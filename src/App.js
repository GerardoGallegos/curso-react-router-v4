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
      <Route path='/hola/' render={Hola} />
      <Route path='/productos'>
        {({ match }) => {
          if (!match) return null
          return (
            <Productos />
          )
        }}
      </Route>
    </>
  </BrowserRouter>
)

export default App
