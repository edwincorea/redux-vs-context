import React, { Component } from 'react'
import { connect } from 'react-redux'

import { searchTermChanged } from '../actions'

import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
    }   

    render() {
        return (
            <div>
                <div className="search">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        value={this.props.searchTerm}
                        onChange={e => this.props.searchTermChanged(e.target.value)}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Origin</th>
                            <th>Continent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.food.map(theFood => (
                            <tr key={theFood.name}>
                                <td>{theFood.name}</td>
                                <td>{theFood.origin}</td>
                                <td>{theFood.continent}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        food: state.food,
        searchTerm: state.searchTerm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchTermChanged: (searchTerm) =>
            dispatch(searchTermChanged(searchTerm))
    }
}

// https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
export default connect(mapStateToProps, mapDispatchToProps)(App)
