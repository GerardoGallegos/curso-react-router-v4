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
  return (
    <h2>productos</h2>
  )
}

const ProductosCategoria = ({ match }) => {
  console.log(match)
  return (
    <h3>
      Categoria: { match.params.categoria } <br/>
      ID: { match.params.id }
    </h3>
  )
}

const App = () => (
  <BrowserRouter>
    <>
      <Route path='/productos' exact render={Productos} />
      <Route
        path='/productos/:categoria/:id?'
        render={ProductosCategoria}
      />
    </>
  </BrowserRouter>
)

export default App
