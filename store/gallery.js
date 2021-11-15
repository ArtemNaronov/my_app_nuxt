export const state = () => ({
  gallery: []
})

export const mutations = {
  setGallery(state, gallery) {
    state.gallery = gallery
  }
}

export const actions = {
  async fetch({commit}) {
    const gallery = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos?albumId=1')
    commit('setGallery', gallery)
  }
}

export const getters = {
  gallery: s => s.gallery
}

