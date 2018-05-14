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
  
  const props = {
    name: "Benzema",
    price: 150000000,
    imgSrc: "https://i0.wp.com/observalgerie.com/wp-content/uploads/2018/05/2170922-45375850-2560-1440.jpg?fit=1050%2C590&ssl=1"
  }
  
  const tree = renderer
    .create(<Article {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
