import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='activa'>Home</NavLink>
    <NavLink to='/ninja' activeClassName='activa'>Ninja</NavLink>
    <NavLink to='/videos' activeClassName='activa'>Videos</NavLink>
  </nav>
)

const Home = () => (
  <h2>Home</h2>
)

const Ninja = () => (
  <h2>Ninja</h2>
)

const Videos = () => (
  <h2>Videos</h2>
)

const NavegacionImperativa = ({ history }) => {
  console.log(history)
  return (
    <div>
      <p>Navegacion Imperativa</p>
      <button onClick={history.goBack}>Atras</button>
      <button onClick={history.goForward}>Adelante</button>
      <button onClick={() => history.go(-2)}>Go 2</button>
      <button onClick={() => history.push('/ninja')}>Go Ninja</button>
      <button onClick={() => history.replace('/ninja')}>Replace Ninja</button>
    </div>
  )
}

const App = () => (
  <BrowserRouter>
    <>
      <Navegation />
      <Route render={NavegacionImperativa}/>
      <Route path='/' exact render={Home} />
      <Route path='/ninja' render={Ninja} />
      <Route path='/videos' render={Videos} />
    </>
  </BrowserRouter>
)

export default App