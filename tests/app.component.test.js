import React from 'react';
import App from '../src/js/components/app.component.js';
import renderer from 'react-test-renderer';

test('App should render a submit button', () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('App should display a message when submitted is true', () => {
  const component = renderer.create(<App />);

  component.getInstance().setState({ submitted: true });

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});