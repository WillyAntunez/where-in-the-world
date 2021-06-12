<template>
	<main :class="{ dark: darkMode }">
		<Header></Header>
		<router-view />
	</main>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	beforeCreate() {
		this.$store.dispatch('getAllCountries');
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
	min-height: 100%;
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

main {
	background-color: $white;
	color: $very-dark-blue;
	&.dark {
		color: $white;
	}
}
</style>
