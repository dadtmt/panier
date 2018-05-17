import React from 'react'
import { ListGroup } from 'reactstrap'

import Article from './Article'

const ListArticle = ({ articles, remove }) => <ListGroup>
  { articles.map( (article) => <Article
  key={article.id}
  {...article}
  remove={() => remove(article.id)}
  />) }
</ListGroup>

export default ListArticle
