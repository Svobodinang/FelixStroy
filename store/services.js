export const state = () => ({
  services: []
})

export const mutations = {
  setServices(state, services) {
    state.services = services
  }
}

export const actions = {
  async fetch({ commit }) {
    console.log(797987);
    
    // const services = await this.$acios.$get('link')
    const services = [
      {
        id: 1,
        text: 'Обработка по дереву'
      },
      {
        id: 2,
        text: 'Другое'
      }
    ]
    commit('setServices', services)
  }
}

export const getters = {
  services: state => state.services
}