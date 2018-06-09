import React from 'react';
import NoteList from './note-list.component';
import Form from './form.component';
import NotesService from '../services/notes.service';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      notes: [],
      status: "loading"
    }

    this._onSubmit = this._onSubmit.bind(this);
  }

  async componentDidMount() {
    let notes = await NotesService.listNotes();
    this.setState({ notes: notes, status: '' });
  }

  render() {
    return (
      <div>
        <p>Notes</p>
        <NoteList notes={this.state.notes} />
        {this.state.status === 'loading' && <p>Retreiving your notes...</p>}
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