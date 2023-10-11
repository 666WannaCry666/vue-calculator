import { createStore } from 'vuex';
import defaultCalculatorModule from '@/store/modules/defaultCalculatorModule';

export default createStore({
    modules: {
        calc: defaultCalculatorModule
    }
})
