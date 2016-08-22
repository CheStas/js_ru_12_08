export default {
    getInitialState() {
        return {
            openArticleId: null
        }
    },

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
}
