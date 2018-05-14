// TODO Article qui affiche une ligne du panier 

import React from 'react'

const Article = ({imgSrc, name, price}) => <div>
    <img alt={ name } src={ imgSrc } />
    <h3>{ name }</h3>
    <p>{ price } €</p>
</div>

export default Article
