import React, { Fragment } from 'react'
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'
import './App.css'

const Hola = () => (
  <h2>Hola</h2>
)

const Home = (props) => {
  console.log(props)
  return (
    <h2>Home</h2>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const NavActive = {
  color: 'orangered'
}

const Navegacion = () => (
  <nav style={navStyles}>
    <NavLink to='/' exact activeStyle={NavActive}>
      Home
    </NavLink>
  
    <NavLink to='/hola' activeClassName='activa'>
      Hola
    </NavLink>
  
    <NavLink to='/productos' activeStyle={NavActive} >
      Productos
    </NavLink>
  </nav>
)

const Productos = (props) => {
  debugger
  return (
    <h2>productos</h2>
  )
}

const App = () => (
  <BrowserRouter>
    <>
      <Navegacion />
      <Route path='/' exact component={Home} />
      <Route path='/hola/' render={Hola} />
      <Route path='/productos' render={Productos} />
    </>
  </BrowserRouter>
)

export default App
