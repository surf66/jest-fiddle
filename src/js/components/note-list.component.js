import React from 'react';

export default class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map((note, index) => {
          return <li key={index}>{note}</li>
        })}
      </ul>
    )
  }
}