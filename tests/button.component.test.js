import React from 'react';
import Button from '../src/js/components/button.component.js';
import renderer from 'react-test-renderer';

test('Button should match snapshot', () => {
  const component = renderer.create(<Button buttonText="Let's go" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});