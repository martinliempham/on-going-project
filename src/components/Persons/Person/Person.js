import React from 'react';
//import Radium from 'radium';
//here styleroot isn't needed
//css modules will make scoped css files allowing it to be scoped rather than global
import classes from './Person.css';

const person = props => {
  //media query using radium
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };
  return (
    //style={style} should go in after "Person" for radium
    <div className={classes.Person}>
      {/* linked through props to app.js */}
      <p onClick={props.click}>
        Hi I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
    //example with random number function
    //<p>Hi I'm a person and I am {Math.floor(Math.random() * 30)} years old! </p>
  );
};

//export default Radium(person);
export default person;
