import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container } from "reactstrap";
import ListArticle from "../components/ListArticle";
import { makeRemoveArticleAction } from "../actions/actions";

//map the prop articles to the panier branch of state
const mapStateToProps = state => ({
  articles: state.panier
});

const mapDispatchToProps = dispatch => ({
  removeArticle: articleId => dispatch(makeRemoveArticleAction(articleId))
});

class Panier extends Component {
  render() {
    return (
      <Container>
        <ListArticle
          articles={this.props.articles}
          remove={this.props.removeArticle}
        />
        <Button onClick={this.props.pay}>Pay</Button>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panier);
