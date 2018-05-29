import React,{Component,PropTypes} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import '../style/style.less'

export default class App extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		const token = localStorage.getItem('token');
		if(!token){
            history.pushState({},0,'http://'+window.location.host+'/#/login');
        }
	}
	render(){
		return(
				<div className="firstHeader">
					{/*<Route path="/login" component={Login} />*/}
				</div>
			)
	}
}