import React from 'react';
import Button from './button.component';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      submitted: false
    }
  }

  render() {
    return (
      <div>
        <p>App</p>
        {!this.state.submitted && <Button buttonText="Submit" onClick={this._handleClick.bind(this)} /> }
        {this.state.submitted && <p>Submitted, thanks</p> }
      </div>
    )
  }

  _handleClick() {
    this.setState({ submitted: !this.state.submitted });
  }
}