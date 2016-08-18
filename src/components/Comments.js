import React, { Component } from 'react'

export default class Comments extends Component {
    state = {
        isOpen: false
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { article } = this.props;
        //Все хорошо, но не обязательно было в <p> заворачивать, достаточно просто строк
        const commentTitle = this.state.isOpen ? <p>hide comments</p> : <p>show comments</p>
        const commentBody = this.state.isOpen ? article.comments.map(commentsObject=> <li key = {commentsObject.id}><strong>{commentsObject.user}</strong>
        <p>{commentsObject.text}</p>
        </li>) : null
        return (
            <ul>
                <p onClick={this.handleClick}>{commentTitle}</p>
                {commentBody}
            </ul>
        )
    }
}
