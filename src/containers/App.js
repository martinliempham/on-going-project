import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium';
//commented out to use css modules
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );

      //this is using the inline style which we will no longer use, we will use css module style
      //style.backgroundColor = 'red';

      //this syntax is used with radium
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }
    //let classes = ['Red', 'Bold'].join(' ');
    //syntax above css class list style

    return (
      //must wrap with styleroot component to access
      //styleroot is used with radium
      //<StyleRoot>
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
      //</StyleRoot>
    );
  }
}
//below is called a higher order Component
//radium is wrapping the app Component
//npm install --save radium is the package
//export default Radium(App);

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

//split up components to make a persons.js component

/* {this.state.persons.map((person, index) => {
  return (
    //key must be in the outter element when using the map method because that is the element we replicate
    //<ErrorBoundary key={person.id}>
    <Person
      click={() => this.deletePersonHandler(index)}
      name={person.name}
      age={person.age}
      key={person.id}
      changed={event => this.nameChangeHandler(event, person.id)}
    />
    //</ErrorBoundary>
  );
})} */

// js css inline style
// const style = {
//   backgroundColor: 'green',
//   color: 'white',
//   font: 'inherit',
//   border: '4px solid green',
//   padding: '8px',
//   cursor: 'pointer'

//hover is a pseudo selector that we can use now with radium
// ':hover': {
//   backgroundColor: 'lightgreen',
//   color: 'black'
// }
// };
