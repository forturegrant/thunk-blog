import axios from 'axios'

// axios配置
const axiosBaseConfig = {
    baseURL: 'http://localhost:3030',
    timeout: 3000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
    method: 'post',
    // 跨域请求，是否带上认证信息
    withCredentials: true, // default
    // http返回的数据类型
    // 默认是json，可选'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json', // default
    // http请求返回状态码检查
    validateStatus: status =>
        status >= 200 && status < 300, // default
    // 请求数据预处理
    transformRequest: [(data) => {
        let ret = '';
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }
    ],
    // 返回数据预处理
    transformResponse: [respData =>
        // 检查返回status值
        // if (typeof respData.status !== 'undefined') {
        //   if (respData.status === 1) {
        //     return respData
        //   }
        //   throw new Error(respData.errMsg || 'respData.status不为0')
        // }
        respData,
    ],
}

const axiostance = axios.create(axiosBaseConfig);

export const fetchRegister = (startAction, values, cal, endAction) => (dispatch) => {
    startAction && dispatch(startAction());
    axiostance.post('/user/register', values).then((res) => {
        cal && cal(res);
        endAction && dispatch(endAction());
        dispatch({type: 'response_user_info', data: res.data.data});
    })
}

export const fetchLogOut = (startAction, values, cal, endAction) => (dispatch) => {
    startAction && dispatch(startAction());
    axiostance.get('/user/logout').then((res) => {
        cal && cal(res);
        endAction && dispatch(endAction());
        dispatch({type: 'response_user_info', data: res.data.data});
    })
}

export const fetchLogIn = (startAction, values, cal, endAction) => (dispatch) => {
    startAction && dispatch(startAction());
    axiostance.post('/user/logIn', values).then((res) => {
        cal && cal(res);
        endAction && dispatch(endAction());
        dispatch({type: 'response_user_info', data: res.data.data});
    })
}

export const fetchPublish = (startAction, values, cal, endAction) => (dispatch) => {
    startAction && dispatch(startAction());
    axiostance.post('/admin/article/addArticle', values).then((res) => {
        cal && cal(res);
        endAction && dispatch(endAction());
        dispatch({type: 'response_user_info', data: res.data.data});
    })
}

export const fetchAddTag = (startAction, values, cal, endAction) => (dispatch) => {
    startAction && dispatch(startAction());
    /*if(!values){
        dispatch()
    }*/
    axiostance.post('/admin/tags/addTag', values).then((res) => {
        cal && cal(res);
        endAction && dispatch(endAction());
        axiostance.get('/getAllTags').then((res)=>{
            dispatch({type: 'query_tags', data: res.data.data});
        })
    })
}