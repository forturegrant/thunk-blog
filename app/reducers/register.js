const initialState = {
    loading: false
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
        default:
            return state
    }
}
