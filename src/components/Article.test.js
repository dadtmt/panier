import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Article html', () => {
  const tree = renderer
    .create(<Article />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
