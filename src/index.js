import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import Provider from './containers/Provider'
import Consumer from './containers/Consumer'
import App from './containers/App'

ReactDOM.render(
    <Provider>
        <Consumer>
            <App />
        </Consumer>
    </Provider>,
    document.getElementById('root')
)
