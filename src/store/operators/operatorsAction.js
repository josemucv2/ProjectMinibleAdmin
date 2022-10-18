import operatorsApi from "./operatorsApi";

const GET_OPERATORS = (context, payload) => {
    return new Promise((resolve, reject) => {
        operatorsApi
            .getAllOperators(payload)
            .then((data) => {
                context.commit("SET_OPERATORS", data.operators)
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const GET_OPERATOR_BY_ID = (context, payload) => {
    return new Promise((resolve, reject) => {
        operatorsApi
            .getOperatortById(payload)
            .then((data) => {
                context.commit("SET_OPERATOR_BY_ID", data.operator);
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export default {
    GET_OPERATORS,
    GET_OPERATOR_BY_ID
}