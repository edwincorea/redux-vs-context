import React, { Component } from 'react'

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

export default App
