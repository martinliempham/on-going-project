import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import Radium from 'radium';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }
  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }
  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }
  render() {
    console.log('[Person.js] Inside render ()');
    return (
      <Aux>
        <p onClick={this.props.click}>
          Hi I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={inp => {
            this.inputElement = inp;
          }}
        />
      </Aux>
    );
  }
}
//propTypes are used to set rules for your props, when working in teams
//specific prop types are needed and these rules allow other developers
//to know what you intend
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
//export default Radium(person);
export default withClass(Person, classes.Person);
