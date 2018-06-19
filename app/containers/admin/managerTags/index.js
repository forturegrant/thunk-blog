import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Row, Col, Spin, Input, Icon, Button, message, Tag} from 'antd'
import {fetchAddTag} from "../../../actions/common";
import {startRegister, endRegister} from '../../../reducers/global'

class managerTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVisible: false,
            inputValue: '',
        }
        this.showInput = this.showInput.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputConfirm = this.handleInputConfirm.bind(this)
    }

    showInput() {
        this.setState({
                inputVisible: true
            },
            () => this.input.focus())
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleInputConfirm() {
        this.props.dispatch(fetchAddTag(startRegister, {name: this.state.inputValue}, (res) => {
            message.success(res.msg)
        }, endRegister))
    }

    render() {
        const {tags} = this.props
        return (
            <div>
                <h2 className='titleStyle'>标签管理</h2>
                <Tag>首页</Tag>
                {
                    tags.map((item, index) => (
                        <Tag key={index} closable>{item.name}</Tag>
                    ))
                }
                {this.state.inputVisible && (
                    <Input
                        className='tagStyle'
                        ref={input => this.input = input}
                        type="text"
                        size="small"
                        style={{width: 108}}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                    />
                )}
                {!this.state.inputVisible &&
                <Button className='tagStyle' size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tags: state.admin.tags
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(managerTags)

