import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

const Pagina = (props) => {
  console.log(props)
  return (
    <h2>Pagina</h2>
  )
}

class App extends Component {
  state = {
    user: {
      name: 'Gerardo Ninja',
      country: 'Mexico'
    }
  }
  render () {
    return (
      <BrowserRouter>
        <Route
          path='/:page'
          render={(props) => (
            <Pagina
              {...props}
              user={this.state.user}
            />
          )}
        />
      </BrowserRouter>
    )
  }
}

export default App
