import React from 'react';
import ReactDOM from 'react-dom';
import Panier from './Panier';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Panier />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Panier html', () => {
 
  const tree = renderer
    .create(<Panier />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
