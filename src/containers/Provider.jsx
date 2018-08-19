import React, { Component } from 'react'
import food from '../data/food'

const DEFAULT_STATE = {
    allFood: food,
    searchTerm: ''
}

export const ThemeContext = React.createContext(DEFAULT_STATE)

export default class Provider extends Component {
    constructor(props) {
        super(props)
        this.state = DEFAULT_STATE
        this.searchTermChanged = this.searchTermChanged.bind(this)
    }   

    searchTermChanged(searchTerm) {
        this.setState({ searchTerm })
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state,
                searchTermChanged: this.searchTermChanged,
            }}>
                {this.props.children}
            </ThemeContext.Provider>)
    }
}
