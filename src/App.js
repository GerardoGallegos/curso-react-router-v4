import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

const Navegation = () => (
  <nav>
    <NavLink to='/' exact activeClassName='activa'>Home</NavLink>
    <NavLink to='/ninja' activeClassName='activa'>Ninja</NavLink>
    <NavLink to='/videos' activeClassName='activa'>Videos</NavLink>
  </nav>
)

const Home = () => (
  <section className='route pink'>
    <h1>Home</h1>
  </section>
)

const Ninja =  () => (
  <section className='route blue'>
    <h1>Ninja</h1>
  </section>
)

const Videos = () => (
  <section className='route green'>
    <h1>Videos</h1>
  </section>
)


const App = () => (
  <BrowserRouter>
    <>
    <Navegation />
    <Route render={({ location }) => (
      <div className='content'>
        <TransitionGroup>
          <CSSTransition
            timeout={700}
            classNames='fade'
            key={location.pathname}
          >
            <Switch location={location}>
              <Route path='/' exact render={Home} />
              <Route path='/ninja' component={Ninja} />
              <Route path='/videos' render={Videos} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )} />
    </>
  </BrowserRouter>
)

export default App