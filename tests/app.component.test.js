import React from 'react';
import App from '../src/js/components/app.component.js';

test('App component snapshot test', () => {
  const tree = shallow(<App />);
  
  expect(tree).toMatchSnapshot();
});

test('should update notes when _onSubmit is called', () => {
  const component = shallow(<App />).instance();
  
  component.setState({ notes: [] });
  component._onSubmit('new note');

  expect(component.state.notes[0]).toEqual('new note');
});