import { REMOVE_ARTICLE, ADD_ARTICLE } from "../actions/actions";

const initialState = [];

// initialState is the default value of prevState
const panierReducer = (prevState = initialState, action) => {
  if (action.type === REMOVE_ARTICLE) {
    return prevState.filter(article => action.articleId !== article.id);
  }
  if (action.type === ADD_ARTICLE) {
    return [...prevState, action.article];
  }
  return prevState;
};

export default panierReducer;
