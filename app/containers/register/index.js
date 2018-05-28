import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Row, Col, Spin, Input, Icon, Button, message} from 'antd'

import {fetchRegister} from "../../actions/common";
import {startRegister,endRegister} from '../../reducers/register'

const FormItem = Form.Item


class registerForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(fetchRegister(startRegister, values, (res) => {
                    message.success(res.msg)
                },endRegister))

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
            <div>
                <div className="loginHeader">
                </div>
                <div className="btmLogin">
                    <div className="sy_bottom">
                        <h1 id="PerformName">注册</h1>
                        <Row className="ul-wrap">
                            <Col span={24}>
                                <Spin spinning={this.props.loading}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormItem hasFeedback>
                                            {getFieldDecorator('userName', {
                                                rules: [
                                                    {required: true, message: '请输入用户名'},
                                                    {validator: this.checkName},
                                                    // { pattern: regExpConfig.IDcardTrim, message: '身份证号格式不正确' }
                                                ],
                                                // validateTrigger: 'onBlur',
                                            })(<Input
                                                prefix={<Icon type="user" style={{fontSize: 13}}/>}
                                                placeholder="请输入用户名"
                                                type="text"
                                            />)}
                                        </FormItem>
                                        <FormItem hasFeedback>
                                            {getFieldDecorator('password', {
                                                rules: [
                                                    {required: true, message: '请输入密码'},
                                                    // { pattern: regExpConfig.pwd, message: '密码只能是6-16个数字或者字母组成' }
                                                ],
                                                // validateTrigger: 'onBlur',
                                            })(<Input
                                                prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                                placeholder="请输入密码"
                                                type="password"
                                            />)}
                                        </FormItem>
                                        <FormItem hasFeedback>
                                            {getFieldDecorator('passwordRe', {
                                                rules: [
                                                    {required: true, message: '请输入密码'},
                                                    // { pattern: regExpConfig.pwd, message: '密码只能是6-16个数字或者字母组成' }
                                                    {validator: this.checkPassword},
                                                ],
                                                // validateTrigger: 'onBlur',

                                            })(<Input
                                                prefix={<Icon type="lock" style={{fontSize: 13}}/>}
                                                placeholder="请再次输入密码"
                                                type="password"
                                            />,)}
                                        </FormItem>
                                        <FormItem hasFeedback>
                                            <Button type="primary" htmlType="submit">确定注册</Button>
                                            <Link to="/login">登录</Link>
                                        </FormItem>
                                    </Form>
                                </Spin>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

const register = Form.create({
    onFieldsChange(props, items) {
        // console.log(items)
        // props.cacheSearch(items);
    }
})(registerForm);

const mapStateToProps = (state) => ({
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(register)
