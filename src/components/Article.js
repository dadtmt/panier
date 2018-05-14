import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'

const Article = ({imgSrc, name, price}) => <ListGroupItem>
    <Button>Supp</Button>
    <img alt={ name } src={ imgSrc } />
    <h3>{ name }</h3>
    <p>{ price } €</p>
</ListGroupItem>

export default Article
