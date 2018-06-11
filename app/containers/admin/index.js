import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import Menus from './menus'
import Welcome from './welcome'
/*import AdminManagerUser from './adminManagerUser'*/
import NewArticle from './NewArticle'
import managerTags from './managerTags'

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {url} = this.props.match
        return (
            <div>
                <div className="bigContainer">
                    <div className="menuContainer">
                        <Menus history={this.props.history}/>
                    </div>
                    <div>
                        <Route exact path={`${url}/`} component={Welcome}/>
                        <Route path={`${url}/newArticle`} component={NewArticle}/>
                        <Route path={`${url}/managerTags`} component={managerTags}/>
                    </div>
                </div>
            </div>
        )
    }
}

/*
const mapStateToProps = (state) => ({
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})
*/

/*export default connect(
    mapStateToProps,
    mapDispatchToProps
)(admin)*/

export default Admin;


