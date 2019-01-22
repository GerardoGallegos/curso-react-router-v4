import React, { Fragment } from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import queryString from 'query-string'
import './App.css'

const Productos = ({ location }) => {
  // const query = new URLSearchParams(location.search)
  // const color = query.get('color')
  // const talla = query.get('talla')

  const { color, talla } = queryString.parse(location.search)

  return (
    <h2>Color: { color } talla: { talla }</h2>
  )
}

const App = () => (
  <BrowserRouter>
    <>
      <Route path='/productos' exact render={Productos} />
    </>
  </BrowserRouter>
)

export default App
