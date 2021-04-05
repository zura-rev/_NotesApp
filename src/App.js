import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Header } from './components/navbar'
import { Sidebar } from './components/sidebar'
import { MainPage } from './pages/MainPage'
import { NotesPage } from './pages/NotesPage'
import { NotePage } from './pages/NotePage'
import './App.css'

class App extends Component {
  state = {
    notes: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ notes: data }))
  }

  deleteNote = (id) => {
    const notes = this.state.notes.filter((item) => item.id !== id)
    this.setState({ notes })
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Sidebar />
          <Header />
          <div className='content'>
            <Switch>
              <Route path='/note'>
                <NotePage />
              </Route>
              <Route path='/notes'>
                <NotesPage
                  notes={this.state.notes}
                  removeNote={this.deleteNote}
                />
              </Route>
              <Route path='/about'>
                <h1>About Page</h1>
              </Route>
              <Route path='/'>
                <MainPage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
