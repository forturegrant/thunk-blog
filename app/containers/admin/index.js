import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu,Icon} from 'antd'
import {fetchLogIn} from "../../actions/common";
import {startRegister, endRegister} from '../../reducers/register'
import Menus from './menus'
import Welcome from './welcome'


class Admin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menus />
                <Route path="/" Component={Welcome}/>
                <Route path="/" />
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


