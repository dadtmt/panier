import React from "react";
import ReactDOM from "react-dom";
import ListArticle from "./ListArticle";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListArticle articles={[]} remove={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders ListArticle html", () => {
  const props = {
    articles: [
      {
        id: 1,
        name: "Zidane",
        price: 45,
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 2,
        name: "Leboeuf",
        price: 45,
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 3,
        name: "Pires",
        price: 45,
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 4,
        name: "Karembeu",
        price: 45,
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      }
    ]
  };

  const tree = renderer
    .create(<ListArticle {...props} remove={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
