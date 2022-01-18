import { Component } from 'react';
import './App.css';
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
        <Card name="Remek" />
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
