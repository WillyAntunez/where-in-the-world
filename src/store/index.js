import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		AllCountries: [],
	},
	mutations: {
		setAllCountries(state, payload) {
			state.AllCountries = payload;
		},
	},
	actions: {
		async getAllCountries(context) {
			try {
				const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
				const data = await res.data;
				context.commit('setAllCountries', data);
			} catch (error) {
				throw new Error(error);
			}
		},
	},
	modules: {},
});
