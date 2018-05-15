// TODO Panier qui affiche le panier
import React from 'react'
import { Button, Container } from 'reactstrap'
import ListArticle from './ListArticle'

const Panier = () => <Container>
    <ListArticle articles={[]}/>
    <Button />
</Container>

export default Panier
