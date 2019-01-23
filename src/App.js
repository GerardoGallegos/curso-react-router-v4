import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Home = () => (
  <h2>Pagina Principal</h2>
)

class Usuarios extends Component {
  state = {
    users: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render () {
    const { users } = this.state
    return (
      <div>
        <h2>Usuarios</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={{
                pathname: `/usuarios/${user.id}`,
                state: {
                  user
                }
              }}>
                { user.name }
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


class UsuariosDetalle extends Component {
  state = {
    user: {}
  }
  componentDidMount () {
    const { id } = this.props.match.params
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(user => this.setState({ user }))
  }

  render () {
    const { user } = this.state
    return (
      <div>
        <h2>Detalles de usuario</h2>
        <h3>{ user.name }</h3>
        <div>Email: { user.email }</div>
        <div>Sitio Web: { user.website } </div>
        <div>Telefono: { user.phone } </div>
      </div>
    )
  }
}

const App = () => (
  <BrowserRouter>
    <>
      <Route path='/' exact render={Home} />
      <Route path='/usuarios' exact component={Usuarios}/>
      <Route path='/usuarios/:id' component={UsuariosDetalle}/>
    </>
  </BrowserRouter>
)

export default App
