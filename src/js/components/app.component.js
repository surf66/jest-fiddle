import React from 'react';
import NoteList from './note-list.component';
import Form from './form.component';
import NotesService from '../services/notes.service';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      notes: []
    }

    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    let notes = NotesService.listNotes();
    this.setState({ notes: notes });
  }

  render() {
    return (
      <div>
        <p>Notes</p>
        <NoteList notes={this.state.notes} />
        <Form onSubmit={this._onSubmit} />
      </div>
    )
  }

  _onSubmit(newNote) {
    let notes = this.state.notes;
    notes.push(newNote);
    this.setState({ notes: notes });
  }
}