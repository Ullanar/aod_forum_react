const SET_USERS = 'SET_USERS'
const SET_IS_LOADING = 'SET_IS_LOADING'
export const GET_USERS = 'GET_USERS'

let initialState = {
    users: null,
    isLoadingUsers: false
}

export default function mainReducer(state = initialState, action) {
    switch (action.type){


        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_IS_LOADING:
            return {
                ...state,
                isLoadingUsers: action.isLoadingUsers
            }

        default:
            return state
    }
}

export function setUsersAC (users) {
    return {
        type: SET_USERS,
        users: users
    }
}

export function setIsLoadingUsersAC (isLoading) {
    return{
        type: SET_IS_LOADING,
        isLoadingUsers: isLoading
    }
}

export function getUsersAC () {
    return {
        type: GET_USERS
    }
}
