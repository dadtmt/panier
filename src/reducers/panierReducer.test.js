import { makeRemoveArticleAction } from "../actions/actions";

import panierReducer from "./panierReducer";

describe("panierReducer", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Zidane",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 2,
        name: "Leboeuf",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 3,
        name: "Pires",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 4,
        name: "Karembeu",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      }
    ];

    const anyAction = {
      type: "ANY_ACTION"
    };

    expect(panierReducer(prevState, anyAction)).toEqual(prevState);
  });
  it("should handle remove article action", () => {
    const prevState = [
      {
        id: 1,
        name: "Zidane",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 2,
        name: "Leboeuf",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 3,
        name: "Pires",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 4,
        name: "Karembeu",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      }
    ];

    const expectedState = [
      {
        id: 1,
        name: "Zidane",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 2,
        name: "Leboeuf",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      },
      {
        id: 3,
        name: "Pires",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      }
    ];

    const removeKarembeuAction = makeRemoveArticleAction(4);

    expect(panierReducer(prevState, removeKarembeuAction)).toEqual(
      expectedState
    );
  });
});
