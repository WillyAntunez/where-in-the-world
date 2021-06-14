<template>
	<main :class="{ dark: darkMode }" class="main">
		<Header></Header>
		<router-view />
	</main>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	beforeCreate() {
		this.$store.dispatch('getAllCountries');
		this.$store.dispatch('readDarkMode');
	},
	methods: {},
	computed: {
		darkMode() {
			return this.$store.getters.darkMode;
		},
	},
	components: { Header },
};
</script>

<style lang="scss">
body,
html {
	width: 100%;
	min-height: 100vh;
	padding: 0;
	margin: 0;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	font-family: 'Nunito Sans', sans-serif;
}

.main {
	width: 100%;
	min-height: 100vh;
	padding-top: 75px;

	background-color: $very-light-gray;
	color: $very-dark-blue;
	&.dark {
		background-color: $very-dark-blue2;
		color: $white;
	}
}

.container {
	padding: 0 16px;
	height: 100%;
	width: 100%;
	margin: 0 auto;
	max-width: 1300px;
}

@media screen and (min-width: 768px) {
	.container {
		padding: 0 24px;
	}
}
</style>
