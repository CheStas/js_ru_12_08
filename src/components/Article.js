import React, { Component } from 'react'
import Comments from './Comments'

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen ? <section>{article.text}<Comments article = { article }/></section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
