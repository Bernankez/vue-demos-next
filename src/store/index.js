import { createStore } from 'vuex';
import appStore from './modules/appStore';

const store = createStore({
  modules: {
    app: appStore
  }
})

export default store;