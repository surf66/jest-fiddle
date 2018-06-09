import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      note: ''
    }
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <input type="text" onChange={this._handleChange.bind(this)} value={this.state.note} />
        <button>Add note</button>
      </form>
    )
  }

  _handleChange(event) {
    this.setState({ note: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.note);
    this.setState({ note: '' });
  }
}