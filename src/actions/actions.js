export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const ADD_ARTICLE = "ADD_ARTICLE";

export const makeRemoveArticleAction = articleId => ({
  type: REMOVE_ARTICLE,
  articleId
});

export const makeAddArticleAction = article => ({
  type: ADD_ARTICLE,
  article
});
