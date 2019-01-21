import React, { Fragment } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Hola = () => (
  <h2>Hola</h2>
)

const Productos = () => (
  <h2>productos</h2>
)

const Home = (props) => {
  console.log(props)
  return (
    <h2>Home { props.location.state.message }</h2>
  )
}

const navStyles = {
  display: 'flex',
  justifyContent: 'space-around'
}

const Navegacion = () => (
  <nav style={navStyles}>
    <Link to={{
      pathname: '/',
      search: '?ordenar=nombre',
      hash: '#hash-otro',
      state: {
        message: 'Soy Ninja PRO',
        cantidad: 555
      }
    }}>Home</Link>
    <Link to='/hola'>Hola</Link>
    <Link to='/productos'>Productos</Link>
  </nav>
)

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
