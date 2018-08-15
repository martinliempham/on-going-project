import React, { PureComponent } from 'react';
//import Radium, { StyleRoot } from 'radium';
//commented out to use css modules
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     '[UPDATE App.js] Inside shouldComponentUpdate',
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] Inside componentWillUpdate',
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  state = {
    persons: [
      { id: 'a1', name: 'Martin', age: 34 },
      { id: 'b2', name: 'Matt', age: 36 },
      { id: 'c3', name: 'Marc', age: 32 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: this.state.toggleClicked + 1
      };
    });
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
    console.log('[App.js] inside render()');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      //below withclass is a higher order component used to wrap components and saves html from rendering another component
      <Aux>
        <button onClick={() => this.setState({ showPersons: true })}>
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
