import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Login from '../login'
import Logined from '../logined'
import Register from '../register'
import {fetchLogOut} from "../../actions/common";
import {startRegister, endRegister} from '../../reducers/global'

import {Carousel, Tabs} from 'antd'

const TabPane = Tabs.TabPane;

class Front extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { userInfo,history } = this.props
        return (
            <div>
                <Carousel autoplay>
                    <div>
                        <img src="static/banner_1.png"/>
                    </div>
                    <div>
                        <img src="static/banner_2.png"/>
                    </div>
                    <div>
                        <img src="static/banner_3.png"/>
                    </div>
                </Carousel>
                {userInfo.username ? <Logined history={history}
                                     logout={() => this.props.dispatch(fetchLogOut(startRegister, '', '', endRegister))}
                                     userInfo={userInfo}/> :
                    <Tabs defaultActiveKey="1" tabBarStyle={{textAlign: 'center'}} className='container'>
                        <TabPane tab="登录" key="1">
                            <Login/>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Register/>
                        </TabPane>
                    </Tabs>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.front.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Front)

