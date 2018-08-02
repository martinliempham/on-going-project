import React from 'react';

import './Person.css';

const person = props => {
  return (
    <div className="Person">
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

export default person;
