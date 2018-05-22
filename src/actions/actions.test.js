import { REMOVE_ARTICLE, makeRemoveArticleAction } from "./actions";

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
