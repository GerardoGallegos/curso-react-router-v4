import React from 'react'
import {
  BrowserRouter,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom'
import './App.css'

const Navegation = withRouter((props) => {
  return (
    <nav>
      <NavLink to='/' exact activeClassName='activa'>Home</NavLink>
      <NavLink to='/ninja' activeClassName='activa'>Ninja</NavLink>
      <NavLink to='/videos' activeClassName='activa'>Videos</NavLink>
      <button
        onClick={props.history.goBack}
      >Back</button>
    </nav>
  )
})

const Home = () => <h1>Tipos de Routers</h1>

const Ninja =  () => <h1>Ninja</h1>

const Videos = () => <h1>Videos</h1>


const App = () => (
  <BrowserRouter>
    <>
    <Navegation />
    <Route path='/' exact render={Home} />
    <Route path='/ninja' component={Ninja} />
    <Route path='/videos' render={Videos} />
    </>
  </BrowserRouter>
)

export default App