import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';
import moment from 'moment';

class Container extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
    }

    state = {
        from: null,
        to: null
    }

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    handleResetClick(e) {
        e.preventDefault()
        this.setState({
            from: null,
            to: null
        })
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state

        return (
            <div>
                <div className="RangeExample">
                    { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                    { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                    { from && to &&
                    <p>
                        You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                        { ' ' }<a href="#" onClick={ this.handleResetClick }>Reset</a>
                    </p>
                    }
                    <DayPicker
                        ref="daypicker"
                        {/*Лучше эту функцию сохранить как метод, а то и код в JSX лишний, и каждый раз пересоздается*/}
                        selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                        onDayClick={ this.handleDayClick }
                    />
                </div>
                <Select
                    options = {options}
                    value={this.state.selected}
                    onChange = {this.handleChange}
                    multi={true}
                />
                <ArticleList
                    articles = {this.props.articles}
                />
                <JqueryComponent
                    items = {this.props.articles} ref={this.getJQ}
                />
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default Container
