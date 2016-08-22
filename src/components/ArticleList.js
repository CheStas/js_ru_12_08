import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpenArticle: PropTypes.func.isRequired
    }

    render() {
        const { openArticleId, toggleOpenArticle } = this.props
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {openArticleId === articleObject.id}
                    toggleOpen = {toggleOpenArticle(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }


}

export default toggleOpenArticle(ArticleList)
