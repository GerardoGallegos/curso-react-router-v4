import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = () => (
  <h2>Home</h2>
)

const Videos = () => (
  <h2>Videos</h2>
)

const Playlist = () => (
  <h2>Playlist</h2>
)

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path='/videos' render={Playlist} />
        <Route path='/videos' render={Videos} />
        <Route path='/' render={Home} />
      </Switch>
    </>
  </BrowserRouter>
)

export default App
