export let data = {
    // snacks: 'Rio',
    // drink: 'Coffee',
    authUser:{},
    currentUser : {}
}



export function reducer(state, action) {

    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser : action.payload
            }
        }
        case "CURRENT_USER": {
            return {
                ...state,
                currentUser : action.payload
            }
        }
        default:
            return state;

    }
}