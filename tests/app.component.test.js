import React from 'react';
import App from '../src/js/components/app.component.js';
import NotesService from '../src/js/services/notes.service';

test('app component default state snapshot test', () => {
  const tree = shallow(<App />);
  
  expect(tree).toMatchSnapshot();
});

test('should call notes service on componentDidMount', () => {
  const notesServiceSpy = jest.spyOn(NotesService, 'listNotes');
  mount(<App />);
  
  expect(notesServiceSpy).toHaveBeenCalledWith();
});

test('should update notes when _onSubmit is called', () => {
  const component = shallow(<App />).instance();
  
  component.setState({ notes: [] });
  component._onSubmit('new note');

  expect(component.state.notes[0]).toEqual('new note');
});