import React,{Component,PropTypes} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import '../style/style.less'
import Login from './login'
import Register from './register'
import {Carousel,Tabs} from 'antd'
const TabPane = Tabs.TabPane;

export default class App extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		/*const token = localStorage.getItem('token');
		if(!token){
            history.pushState({},0,'http://'+window.location.host+'/#/login');
        }*/
	}
	render(){
		return(
			<div>
				<Carousel autoplay>
					<div>
						<img src="static/banner_1.png" />
					</div>
					<div>
						<img src="static/banner_2.png" />
					</div>
					<div>
						<img src="static/banner_3.png" />
					</div>
				</Carousel>
				<Tabs>
					<TabPane tab="登录" key="1">
						<Login />
					</TabPane>
					<TabPane tab="注册" key="2">
						<Register />
					</TabPane>
				</Tabs>
			</div>
			)
	}
}