<template>
	<header>
		<div class="header-container container">
			<router-link to="/">
				<h1>Where in the world?</h1>
			</router-link>
			<button class="dark-mode-button" @click="toggleDarkMode">
				<div class="icon">
					<div class="moon" v-if="!darkMode">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="far"
							data-icon="moon"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"
							></path>
						</svg>
					</div>
					<div class="moon-solid" v-else>
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="moon"
							class="svg-inline--fa fa-moon fa-w-16"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
							></path>
						</svg>
					</div>
				</div>
				<span class="text">Dark mode</span>
			</button>
		</div>
	</header>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
	name: 'Header',
	computed: {
		darkMode() {
			return this.$store.getters.darkMode;
		},
	},
	methods: {
		...mapMutations(['toggleDarkMode']),
	},
};
</script>

<style lang="scss">
header {
	position: fixed;
	top: 0;
	width: 100%;
	height: 75px;
	background-color: $white;
	font-weight: 800;
	box-shadow: $shadow1;
	user-select: none;
	z-index: 9999;

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		a {
			color: inherit;
			text-decoration: none;
			h1 {
				font-size: 1.15em;
			}
		}

		button {
			display: flex;
			background-color: transparent;
			border: none;
			color: inherit;
			cursor: pointer;
			outline: none;
			align-items: center;
			height: 50%;

			.icon {
				width: 16px;
				height: 16px;
				margin-right: 0.75em;
			}

			.text {
				font-size: 1em;
				font-weight: 600;
			}
		}
	}
}

@media screen and (min-width: 769px) {
	header {
		.header-container {
			h1 {
				font-size: 1.5em;
			}
			button {
				.text {
					font-size: 1.25em;
				}
				.icon {
					width: 20px;
					height: 20px;
				}
			}
		}
	}
}

.dark {
	header {
		background-color: $dark-blue;
	}
}
</style>
