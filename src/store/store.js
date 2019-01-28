import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		funcionarios: []
	},
	mutations: {
		addFuncionarios(state, funcionarios){
			state.funcionarios = funcionarios
		}
	},

	getters: {
		funcionarios: state => state.funcionarios
	}
})