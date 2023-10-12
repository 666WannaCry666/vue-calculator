import { createStore } from 'vuex';
import calculatorModule from '@/store/modules/calculatorModule';

export default createStore({
    modules: {
        calc: calculatorModule
    }
})
