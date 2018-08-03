import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}
//ErrorBoundary is a higher order component used to wrap components to handle any errors
//only use ErrorBoundary in cases you think your code will fail
//do not wrap everything with ErrorBoundary for no reason
export default ErrorBoundary;
