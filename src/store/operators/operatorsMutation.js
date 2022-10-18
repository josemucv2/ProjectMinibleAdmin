const SET_OPERATORS = (state, operators) => {
    state.operators = operators;
};

const SET_OPERATOR_BY_ID = (state, operatorId) => {
    state.operator = operatorId;
}


export default {
    SET_OPERATORS,
    SET_OPERATOR_BY_ID
}