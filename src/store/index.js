import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: { // 暂时使用不到
    changeCity (ctx, city) {
      ctx.commit('changeCity', city)
    }
  },
  mutations
})
