const casePeportForm = {
  state: {
    caseLayer: false,
    caseDetail: {}
  },
  mutations: {
    TOGGLE_CASELAYER: (state, type) => {
      state.caseLayer = type
    },
    SET_CASEDETAIL: (state, item) => {
      state.caseDetail = item
    }
  },
  actions: {

  }
}

export default casePeportForm
