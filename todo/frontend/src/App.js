import React from 'react';
import logo from './logo.svg';
import './App.css';                                       

import UserList from './components/User.js';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

 // componentDidMount() {
      //  const users = [
      //   {
      //     "username": "Fox",
      //     "first_name": "Денис",
      //     "last_name": "Иванов",
      //     "email": "foxden@mail.ru"
      //   },
      //   {
      //     "username": "Doc",
      //     "first_name": "Мария",
      //     "last_name": "Конь",
      //     "email": "docmmm@mail.ru"
      //   }
      // ]

    
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
        }

  render () {
    return (
      <div>
        <UserList users={this.state.users}/>
      </div>
    )
  }
}
export default App;
