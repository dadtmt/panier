import { REMOVE_ARTICLE } from "../actions/actions";

// TODO handle the add article action

const panierReducer = (prevState, action) => {
  console.log(action.type);
  if (action.type === REMOVE_ARTICLE) {
    return prevState.filter(article => action.articleId !== article.id);
  }
  return prevState;
};

export default panierReducer;
