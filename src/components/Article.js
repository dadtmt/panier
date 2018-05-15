import React from 'react'
import { Button, Col, ListGroupItem, Row } from 'reactstrap'

const Article = ({imgSrc, name, price}) => <ListGroupItem>
    <Row>
        <Col xs={3}>
            <Button>Supp</Button>
        </Col>
        <Col xs={3}>
            <img className="img-fluid" alt={ name } src={ imgSrc } />
        </Col>
        <Col xs={3}>
            <h3>{ name }</h3>
        </Col>
        <Col xs={3}>
            <p>{ price } €</p>
        </Col>
    </Row>
</ListGroupItem>

export default Article
