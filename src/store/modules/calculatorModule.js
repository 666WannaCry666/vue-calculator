const calculatorModule = {
    state() {
        return {
            currentOperation: '0',
            operands: []
        }
    },
    getters: {

    },
    mutations: {
        setCurrentOperation(state, currentOperation) {
            state.currentOperation = currentOperation;
        },
        setOperands(state, operand) {
            state.operand = [...state.operand, operand]
        }
    },
    actions: {

    },
    namespaced: true
}

export default calculatorModule;
