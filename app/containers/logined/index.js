import React from 'react'
import {Button} from 'antd'

const Logined = (props) => (
    <div className='container'>
        {/*<img src={require('./timg.jpeg')}/>*/}
        <p>欢迎：{props.userInfo.username}</p>
        <p className='centerP'>光临我的博客~</p>
        {props.userInfo.userType === 'admin' ?
            <Button onClick={() => props.history.push('/admin')} type="primary">点击进入管理页面</Button> : null}
        <Button onClick={() => props.logout()} type="primary">退出登录</Button>
    </div>
);

export default Logined;