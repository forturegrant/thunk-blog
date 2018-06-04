import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Row, Col, Spin, Input, Icon, Button ,message} from 'antd'
import {fetchLogIn} from "../../actions/common";
import {startRegister, endRegister} from '../../reducers/register'

const FormItem = Form.Item


class loginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(fetchLogIn(startRegister, values, (res) => {
                    message.success(res.msg)
                }, endRegister))

                /*this.props.dispatch(fetchRegister(values, (res) => {
                    // console.log(res)
                    message.success(res.msg)
                    if (res.status === 1) {
                        const query  = this.props.form.getFieldsValue()
                        global.gconfig.staff = res.data.user
                        // hashHistory.push('/')
                    }
                }, (res) => {
                    message.warning(res.msg)
                    this.setState({
                        loading: false,
                    })
                }))*/
                // sessionStorage.setItem('token', 'dupi')
                // sessionStorage.setItem('username', values.username)
                // hashHistory.push('/')
            }
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className='formStyle'>
                <FormItem>
                    {getFieldDecorator('username', {
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

const mapStateToProps = (state) => ({
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(login)

