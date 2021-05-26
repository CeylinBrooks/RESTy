import React from 'react';

class Form extends React.Component {

  handleSubmit = async e => {
    e.preventDefault();

    let raw = await fetch('');
    let data = await raw.json();
    let count = data.count;

    let people = data.results.reduce(() => {
      
    }, {});

    this.props.handler(count, results);
    this.props.toggleLoading();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>{this.props.prompt}</button>
      </form>
    )
  }
}

export default Form;