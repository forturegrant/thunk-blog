import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form, Row, Col, Spin, Input, Icon, Button ,message} from 'antd'
import {fetchPublish} from "../../../actions/common";
import {startRegister, endRegister} from '../../../reducers/register'

class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }

    titleOnChange(e){
        this.setState({
            title:e.target.value
        })
    }

    contentOnChange(e){
        this.setState({
            content:e.target.value
        })
    }

    selectTags(){
        
    }

    publishArticle(){
        this.props.dispatch(fetchPublish(startRegister(),{title:this.state.title,}))
    }

    render() {
        return (
            <div>
                <h2>发文</h2>
                <div className='container'>
                    <span className='subTitle'>标题</span>
                    <Input
                        className='titleInput'
                        placeholder={'请输入文章标题'}
                        type='text'
                        value={this.props.title}
                        onChange={this.titleOnChange.bind(this)}/>
                    <span className='subTitle'>正文</span>
                    <textarea
                        className='textArea'
                        value={this.props.content}
                        onChange={this.contentOnChange.bind(this)}/>
                    <span className='subTitle'>分类</span>
                    <Select
                        mode="multiple"
                        className='titleInput'
                        placeholder="请选择分类"
                        onChange={this.selectTags.bind(this)}
                        value={this.props.tags}
                    >
                        {
                            this.props.tagsBase.map((item) => (
                                <Option key={item}>{item}</Option>
                            ))
                        }
                    </Select>

                    <div className='bottomContainer'>
                        <Button type="primary" onClick={this.publishArticle.bind(this)}
                                className='buttonStyle'>发布</Button>
                        <Button type="primary" onClick={this.saveArticle.bind(this)}
                                className='buttonStyle'>保存</Button>
                        <Button type="primary" onClick={this.preView.bind(this)}
                                className='buttonStyle'>预览</Button>
                    </div>
                </div>
                <Modal
                    visible={this.state.modalVisible}
                    title="文章预览"
                    onOk={this.handleOk.bind(this)}
                    width={'900px'}
                    onCancel={this.handleOk.bind(this)}
                    footer={null}
                >
                    <div className='modalContainer'>
                        <div id='preview' className='testCode'>
                            {remark().use(reactRenderer).processSync(this.props.content).contents}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    loading: state.loading
})

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewArticle)
