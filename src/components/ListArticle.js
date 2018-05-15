import React from 'react'
import { ListGroup } from 'reactstrap'

import Article from './Article'

const ListArticle = ({ articles }) => <ListGroup>
  { articles.map( (article, index) => <Article key={index} {...article} />) }
</ListGroup>

export default ListArticle
