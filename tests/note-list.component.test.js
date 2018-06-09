import React from 'react';
import NoteList from '../src/js/components/note-list.component.js';

test('NoteList should display a list item for each note', () => {
  const notes = ['One', 'Two', 'Three'];
  const tree = shallow(<NoteList notes={notes} />);

  expect(tree).toMatchSnapshot();
});