import React from 'react';
import ReactDOM from 'react-dom';
import ListArticle from './ListArticle';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListArticle articles={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders ListArticle html', () => {
  
  const props = {
    articles : [
      {
          name:"Zidane",
          price:"45",
          imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
          name:"Leboeuf",
          price:"45",
          imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
          name:"Pires",
          price:"45",
          imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
          name:"Karembeu",
          price:"45",
          imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      }
    ]
  }

  const tree = renderer
    .create(<ListArticle {...props }/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
