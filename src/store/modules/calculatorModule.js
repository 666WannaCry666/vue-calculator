const calculatorModule = {
    state() {
        return {
            currentOperation: '0',
            operands: [],
            acceptedKeys: ['+', '-', '*', '-', '=']
        }
    },
    getters: {

    },
    mutations: {
        setCurrentOperation(state, currentOperation) {
            if (state.currentOperation === '0') {
                state.currentOperation = currentOperation;
            } else {
                state.currentOperation = [...state.currentOperation, currentOperation].join('');
            }
        },
        deleteLastSymbolCurrentOperation(state) {
            if (state.currentOperation.length <= 1) {
                state.currentOperation = '0';
            } else {
                state.currentOperation = state.currentOperation.slice(-state.currentOperation.length, -1);
            }
        },
        setOperands(state, operand) {
            state.operand = [...state.operand, operand];
        }
    },
    actions: {

    },
    namespaced: true
}

export default calculatorModule;
