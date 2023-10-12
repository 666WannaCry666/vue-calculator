import { createStore } from 'vuex';
import calculatorModule from '@/store/modules/calculatorModule';

export default createStore({
    state() {
        return {
            currentMode: 'calculator'
        }
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        calc: calculatorModule
    }
})
