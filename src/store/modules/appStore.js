const appStore = {
  namespaced: true,
  state: () => ({
    MenuCollapsed: true
  }),
  getters: {
  },
  mutations: {
    TOGGLE_COLLAPSED(state, collapsed) {
      state.MenuCollapsed = collapsed;
    }
  },
  actions: {
    toggleCollapsed({ commit }, collapsed) {
      commit('TOGGLE_COLLAPSED', collapsed);
    }
  }
}

export default appStore;