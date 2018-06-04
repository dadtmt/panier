import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";

import Article from "./Article";

const ListArticle = ({ articles, remove }) => (
  <ListGroup>
    {articles.map(article => (
      <Article
        key={article.id}
        {...article}
        remove={() => remove(article.id)}
      />
    ))}
  </ListGroup>
);

ListArticle.propTypes = {
  articles: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
};

export default ListArticle;
