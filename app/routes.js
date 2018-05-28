import React from 'react'
import { HashRouter as Router, Route, IndexRoute ,hashHistory} from 'react-router-dom'
import App from './containers/index'
import Login from './containers/login/index'
import Register from './containers/register/index'


export default () =>(
    <Router history={ hashHistory }>
        <div>
            {/*<IndexRoute component={welcome} >*/}
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    </Router>
)
