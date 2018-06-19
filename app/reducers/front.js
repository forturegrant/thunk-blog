const initialState = {
    userInfo: {}
}



export default function front(state = initialState, action) {
    switch (action.type) {
        case "response_user_info":
            return {
                userInfo: action.data
            }
            break;
        default:
            return state
    }
}
