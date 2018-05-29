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
        const { getFieldDecorator } =this.props.form;
        return(
            <div>
                <div className="loginHeader">
                </div>
                <div className="btmLogin">
                    <div className="sy_bottom">
                        <h1 id="PerformName">登录</h1>
                        <Row className="ul-wrap">
                            <Col span={24}>
                                <Spin spinning={this.state.loading}>
                                    <Form>
                                        <FormItem hasFeedback>
                                            {getFieldDecorator('username', {
                                                rules: [
                                                    { required: true, message: '请输入用户名' },
                                                    { validator: this.checkName },
                                                    // { pattern: regExpConfig.IDcardTrim, message: '身份证号格式不正确' }
                                                ],
                                                // validateTrigger: 'onBlur',
                                            })(<Input
                                                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                                placeholder="请输入用户名"
                                                type="text"
                                            />)}
                                        </FormItem>
                                        <FormItem hasFeedback>
                                            {getFieldDecorator('password', {
                                                rules: [
                                                    { required: true, message: '请输入密码' },
                                                    // { pattern: regExpConfig.pwd, message: '密码只能是6-16个数字或者字母组成' }
                                                ],
                                                // validateTrigger: 'onBlur',
                                            })(<Input
                                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                                placeholder="请输入密码"
                                                type="password"
                                            />)}
                                        </FormItem>
                                        <FormItem hasFeedback>
                                        <Button type="primary" htmlType="submit">登录</Button>
                                        <Link to="/register">注册</Link>
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

const login = Form.create({
    onFieldsChange(props, items) {
        // console.log(items)
        // props.cacheSearch(items);
    }
})(loginForm);


export default login