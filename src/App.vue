<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	beforeCreate() {
		this.$store.dispatch('getAllCountries');
	},
	methods: {},
};
</script>

<style lang="scss"></style>
