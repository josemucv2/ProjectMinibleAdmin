const GET_OPERATORS = state => {
    return state.operators
}

const GET_OPERATOR_BY_ID = (state) => {
    return state.operator;
};
export default {
    GET_OPERATORS,
    GET_OPERATOR_BY_ID
}