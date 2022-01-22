import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { Card } from './components/card/Card';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [

      ]
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(users => this.setState({ monsters: users }))
  }



  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>

        </CardList>


      </div>
    );
  }
}

export default App;
