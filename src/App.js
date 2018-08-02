import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a1', name: 'Martin', age: 34 },
      { id: 'b2', name: 'Matt', age: 36 },
      { id: 'c3', name: 'Marc', age: 32 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    //makes copy of persons from state
    //const persons = this.state.persons.slice();
    //makes copy of persons and put into new array with ... (spread operator)
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '4px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>My Course Project</h1>
        <p>SDET 1 at Rent the Runway</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// <Person
//   name={this.state.persons[0].name}
//   age={this.state.persons[0].age}
//   //switches name when you click the paragraph connected to person.js
//   click={this.switchNameHandler.bind(this, 'Tino!!!')}
// >
//   <p>Boulder: v7</p>
//   <p>Lead: 5.13</p>
//   <p>TR: 5.14</p>
// </Person>
//
// <Person
//   name={this.state.persons[1].name}
//   age={this.state.persons[1].age}
//   changed={this.nameChangeHandler}
// >
//   <p>Boulder: v4</p>
//   <p>Lead: N/A</p>
//   <p>TR: 5.10</p>
// </Person>
//
// <Person
//   name={this.state.persons[2].name}
//   age={this.state.persons[2].age}
// >
//   <p>Boulder: v8</p>
//   <p>Lead: 5.12</p>
//   <p>TR: 5.13</p>
// </Person>
