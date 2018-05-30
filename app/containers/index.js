import React,{Component,PropTypes} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import '../style/style.less'
import Register from './register'
import {Carousel} from 'antd'

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
						<img src="banner_1.png" />
					</div>
					<div>
						<img src="banner_2.png" />
					</div>
					<div>
						<img src="banner_3.png" />
					</div>
				</Carousel>
				<Register />
			</div>
			)
	}
}