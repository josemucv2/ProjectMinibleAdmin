const SET_AUTH_STATE = (state, token) => {
    state.token = token
}



const SET_USER_INFO = (state, user) => {
    state.user_info = user
}

const SET_IP_INFO = (state, user) => {
    state.ip_info = user
}

const SET_DEFAULT_STATE = (state) => {
    state.token = ''
    state.user_info = {}
}

export default {
    SET_AUTH_STATE,
    SET_USER_INFO,
    SET_DEFAULT_STATE,
    SET_IP_INFO
}
