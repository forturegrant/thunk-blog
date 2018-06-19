const initialState = {
    tags:[]
}


export default function admin(state = initialState, action) {
    switch (action.type) {
        case "query_tags":
            return {
                tags: action.data
            }
            break;
        default:
            return state
    }
}
