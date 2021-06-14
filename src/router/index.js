import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
	},
	{
		path: '/country/:name',
		name: 'Country',
		component: () =>
			import(/* webpackChunkName: "country" */ '@/views/Country.vue'),
	},
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
});

export default router;
