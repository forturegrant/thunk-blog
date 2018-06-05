import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import '../style/style.less'

import Front from './front/index.js'
import Admin from './admin'


export default class App extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" component={Front}/>
                        <Route path="/admin" component={Admin}/>
                    </div>
                </Router>
            </div>
        )
    }
}

