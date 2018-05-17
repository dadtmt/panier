// TODO Panier qui affiche le panier
import React, { Component } from 'react'
import { Button, Container } from 'reactstrap'
import ListArticle from './ListArticle'

class Panier extends Component {

    constructor() {
        super()
        //state initial
        this.state = {
            articles: [
                {
                    id: 1,
                    name:"Zidane",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                },
                {
                    id: 2,
                    name:"Leboeuf",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                },
                {
                    id: 3,
                    name:"Pires",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                },
                {
                    id: 4,
                    name:"Karembeu",
                    price:"45",
                    imgSrc:"https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
                }
              ]
        }
        this.removeArticle = this.removeArticle.bind(this)
    }

    removeArticle (articleId) {
        console.log(`remover article ${articleId} from panier`)
        this.setState(
            prevState => ({
                articles: prevState.articles.filter(
                    article => article.id !== articleId
                )
            })
        )
    }

    render() {
        return <Container>
            <ListArticle
                articles={this.state.articles}
                remove = {this.removeArticle}
            />
            <Button />
        </Container>
    }
}

export default Panier
