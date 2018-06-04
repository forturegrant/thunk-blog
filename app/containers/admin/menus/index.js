import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Menu,Icon} from 'antd'
import {fetchLogIn} from "../../actions/common";
import {startRegister, endRegister} from '../../reducers/register'
import welcome from './welcome'

class Menus extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu onClick={(key) => this.props.history.push(`/admin${key}`)}>
                    <Menu.Item key='/'>
                        <Icon type='home'/>
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key='/managerUser'>
                        <Icon type='usergroup-delete'/>
                        <span>用户管理</span>
                    </Menu.Item>
                    <Menu.Item key='/newArticle'>
                        <Icon type='file-text'/>
                        <span>发文</span>
                    </Menu.Item>
                    <Menu.Item key='/managerTags'>
                        <Icon type='tags-o'/>
                        <span>标签管理</span>
                    </Menu.Item>
                    <Menu.Item key='/managerArticle'>
                        <Icon type='edit'/>
                        <span>文章管理</span>
                    </Menu.Item>
                </Menu>
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

export default Menus;


