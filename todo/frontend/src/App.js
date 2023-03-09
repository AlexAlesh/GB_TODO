import React from 'react';
import logo from './logo.svg';
import './App.css';                                       

import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
import UserList from './components/User.js';
import BookList from './components/Book.js';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
      'books': []
    }
  }
    
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
      .then(response => {
        const users = response.data
          this.setState(
        {
            'users': users
        }
        )
      }).catch(error => console.log(error))
        

    axios.get('http://127.0.0.1:8000/api/book')
      .then(response => {
        const users = response.data
           this.setState(
         {
             'books': books
         }
         )
      }).catch(error => console.log(error))
    }

  render () {
    return (
      
      <div className="App">
        <HashRouter>
          <nav>
            <ul>
             <li>
               <Link to='/'>Authors</Link>
           </li>
            <li>
              <Link to='/books'>Books</Link>
             </li>
            </ul>
          </nav>
<       Switch>
        <Route exact path='/users' component={() => <UserList items={this.state.users} />} />
        <Route exact path='/books' component={() => <BookList items={this.state.books} />} />
        </Switch>
        </HashRouter>
      </div>
    )
  }
}
export default App;
