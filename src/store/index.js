import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		allCountries: [],
		darkMode: false,
	},
	mutations: {
		setAllCountries(state, payload) {
			state.allCountries = payload;
		},
		toggleDarkMode(state) {
			state.darkMode = !state.darkMode;
			if (state.darkMode) {
				localStorage.setItem('darkMode', true);
			} else {
				localStorage.removeItem('darkMode');
			}
		},
		setDarkMode(state, payload) {
			state.darkMode = payload;
			if (state.darkMode) {
				localStorage.setItem('darkMode', true);
			} else {
				localStorage.removeItem('darkMode');
			}
		},
	},
	actions: {
		async getAllCountries({ commit }) {
			try {
				const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
				const data = await res.data;
				commit('setAllCountries', data);
			} catch (error) {
				throw new Error(error);
			}
		},
		readDarkMode({ commit }) {
			const darkMode = localStorage.getItem('darkMode');
			if (darkMode) {
				commit('setDarkMode', true);
			} else {
				commit('setDarkMode', false);
			}
		},
	},
	getters: {
		darkMode(state) {
			return state.darkMode;
		},
		allCountries(state) {
			return state.allCountries;
		},
	},
	modules: {},
});
