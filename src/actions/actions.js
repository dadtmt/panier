export const REMOVE_ARTICLE = "REMOVE_ARTICLE";

export const makeRemoveArticleAction = articleId => ({
  type: REMOVE_ARTICLE,
  articleId
});

//TODO: ajouter l'action pour ajouter un article au panier
