import React, { Component } from 'react'
import { ThemeContext } from './Provider'

export default class Consumer extends Component {
    render() {
        const { children } = this.props

        return (
            <ThemeContext.Consumer>
                {({allFood, searchTerm, searchTermChanged}) => {
                    const food = searchTerm
                        ? allFood.filter(
                            food =>
                                food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
                        )
                        : allFood

                    return React.Children.map(children, child =>
                        React.cloneElement(child, {
                            food,
                            searchTerm,
                            searchTermChanged,
                        })
                    )
                }}
            </ThemeContext.Consumer>
        )
    }
}