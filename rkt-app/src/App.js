import React, { Component } from 'react';
import Legends from './Legends';
import PlusLegend from './PlusLegend';

class App extends Component {
  state ={
    legends: [
      {name: 'Henry', number: 14, goals: 267, id: 1},
      {name: 'Ronaldinho', number: 10, goals: 195, id: 2},
      {name: 'Ronaldo', number: 9, goals: 500, id: 3}
    ]
  }

  addLegend = (legend) => {    
    legend.id = Math.random();
    let legends = [...this.state.legends, legend]
    this.setState({
      legends: legends
    })
    console.log(legend);
    
  }
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome son!</p>
        <Legends legends={this.state.legends} />
        <PlusLegend addLegend={this.addLegend} />
      </div>
    );
  }
}

export default App;
