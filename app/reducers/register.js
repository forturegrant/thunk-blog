const initialState = {
    loading: false,
    userInfo: {},
    tags: []
}

export function startRegister(text) {
    return {
        type: 'startRegister'
    }
}

export function endRegister(text) {
    return {
        type: 'endRegister'
    }
}


export function registerR(state = initialState, action) {
    switch (action.type) {
        case "startRegister":
            return {
                loading: true
            }
            break;
        case "endRegister":
            return {
                loading: false
            }
            break;
        case "response_user_info":
            return {
                userInfo: action.data
            }
            break;
        case "log_out":
            return {
                userInfo: action.data
            }
            break;
        case "query_tags":
            return {
                tags: action.data
            }
        default:
            return state
    }
}
