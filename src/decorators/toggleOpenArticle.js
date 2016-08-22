import React from 'react'

//Декораторы создают для переиспользования кода. Их следует делать максимеально универсальными, 
//не привязывайся к названиям сущностей типа Article. Лучше называй toggleOpenItem, например
export default (Component) => {
    return class toggleOpenArticleComponent extends React.Component {
        state = {
            openArticleId: null
        }

        toggleOpenArticle = id => ev => {
            if (ev) ev.preventDefault()
            if (id === this.state.openArticleId) {
                this.setState({
                    openArticleId: null
                })
            } else {
                this.setState({
                    openArticleId: id
                })
            }
        }

        render() {
            return <Component {...this.props} openArticleId = {this.state.openArticleId} toggleOpenArticle = {this.toggleOpenArticle}/>
        }
    }
}
