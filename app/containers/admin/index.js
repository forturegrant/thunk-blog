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
import AdminManagerUser from './adminManagerUser'

class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {url} =this.props.match
        return (
            <div>
                <Menus />
                <Route path={`${url}/`} component={Welcome}/>
                <Route path={`${url}/managerUser`} component={AdminManagerUser}/>
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


