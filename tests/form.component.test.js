import React from 'react';
import Form from '../src/js/components/form.component.js';
import renderer from 'react-test-renderer';

test('Form component snapshot test', () => {
  const tree = shallow(<Form />);

  expect(tree).toMatchSnapshot();
});

test('should update note in component state when text field changed', () => {
  const component = shallow(<Form />);
  const mockedEvent = { target: { value: 'my new note' } }
  
  component.find('input').simulate('change', mockedEvent);

  expect(component.instance().state.note).toEqual('my new note');
});

test('should call onSubmit callback when form is submitted', () => {
  const onSubmit = jest.fn();
  const component = shallow(<Form onSubmit={onSubmit} />);
  const mockedEvent = { preventDefault: () => {} }

  component.instance().setState({ note: 'my note' });
  component.find('form').simulate('submit', mockedEvent);

  expect(onSubmit).toHaveBeenCalledWith('my note');
});