const calculatorModule = {
  state() {
    return {
      currentOperation: "0",
      operators: {
        plus: "+",
        minus: "-",
        multiply: "*",
        divide: "/",
      },
      expression: [],
    };
  },
  getters: {},
  mutations: {
    setCurrentOperation(state, currentOperation) {
      if (state.currentOperation === "0") {
        state.currentOperation = Object.values(state.operators).includes(
          currentOperation,
        )
          ? [...state.currentOperation, currentOperation].join("")
          : currentOperation;
      } else {
        state.currentOperation = [
          ...state.currentOperation,
          currentOperation,
        ].join("");
      }
    },
    deleteLastSymbolCurrentOperation(state) {
      if (state.currentOperation.length <= 1) {
        state.currentOperation = "0";
      } else {
        state.currentOperation = state.currentOperation.slice(
          -state.currentOperation.length,
          -1,
        );
      }
    },
    clearCurrentOperation(state) {
      state.currentOperation = "0";
    },
    equalHandler(state) {
      if (String(eval(state.currentOperation)) === "Infinity") {
        alert("The operation is not allowed!!!");
        state.currentOperation = "0";
      } else {
        state.currentOperation = String(eval(state.currentOperation));
      }
    },
    setOperands(state, operand) {
      state.operand = [...state.operand, operand];
    },
  },
  actions: {},
  namespaced: true,
};

export default calculatorModule;
