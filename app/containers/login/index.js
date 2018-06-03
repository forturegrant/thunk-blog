import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { Form , Row ,Col, Spin, Input ,Icon , Button} from 'antd'

const FormItem = Form.Item



class loginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleLogin} className='formStyle'>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: '请输入用户名!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                               placeholder="Password"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button className='loginButton' type="primary" htmlType="submit">
                        登录
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

const login = Form.create({
    onFieldsChange(props, items) {
        // console.log(items)
        // props.cacheSearch(items);
    }
})(loginForm);


export default login