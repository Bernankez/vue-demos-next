const appStore = {
  namespaced: true,
  state: () => ({
    example: 'aaa',
  }),
  getters: {
    getExample: state => state.example
  },
  mutations: {
    SET_EXAMPLE(state, example) {
      state.example = example;
    }
  },
  actions: {
    setExample({ commit }, example) {
      commit('SET_EXAMPLE', example);
    }
  }
}

export default appStore;