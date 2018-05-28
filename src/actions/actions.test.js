import {
  ADD_ARTICLE,
  REMOVE_ARTICLE,
  makeAddArticleAction,
  makeRemoveArticleAction
} from "./actions";

describe("action remove article creator", () => {
  it("should return an REMOVE_ARTICLE action with article id", () => {
    const expected = {
      type: REMOVE_ARTICLE,
      articleId: 2
    };

    expect(makeRemoveArticleAction(2)).toEqual(expected);

    const expectedForAnotherArticle = {
      type: REMOVE_ARTICLE,
      articleId: 5
    };

    expect(makeRemoveArticleAction(5)).toEqual(expectedForAnotherArticle);
  });
});

describe("action add article creator", () => {
  it("should return an ADD_ARTICLE action with article objet", () => {
    const expected = {
      type: ADD_ARTICLE,
      article: {
        id: 2,
        name: "Leboeuf",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      }
    };

    expect(
      makeAddArticleAction({
        id: 2,
        name: "Leboeuf",
        price: "45",
        imgSrc:
          "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
      })
    ).toEqual(expected);
  });
});
