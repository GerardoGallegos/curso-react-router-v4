import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => (
  <h2>Home</h2>
)

const Videos = () => (
  <h2>Videos</h2>
)

const GeneroMusical = ({ match }) => (
  <h2>Genero: { match.params.genero }</h2>
)

const Error404 = () => (
  <h2>Pagina no encontrada!</h2>
)

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path='/' exact render={Home} />
        <Route path='/videos' render={Videos} />
        <Route path='/:genero' exact render={GeneroMusical}/>
        <Route render={Error404} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App
