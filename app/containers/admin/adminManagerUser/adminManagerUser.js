import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Row, Col, Spin, Input, Icon, Button ,message} from 'antd'
/*import {fetchLogIn} from "../../actions/common";
import {startRegister, endRegister} from '../../reducers/register'*/

class AdminManagerUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Welcome to my blog</h1>
        )
    }
}

export default AdminManagerUser
