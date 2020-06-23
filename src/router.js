import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: '',
			component: () => import('./views/Index.vue')
		},
		{
			path: 'schedule',
			component: () => import('./components/conference/Schedule.vue'),
			children: [
				// {
				// 	path: '2018',
				// 	name: 'schedule2018',
				// 	component: () => import('@/components/conference/schedule/Schedule2018.vue')
				// },
				// {
				// 	path: '2019',
				// 	name: 'schedule2019',
				// 	component: () => import('@/components/conference/schedule/Schedule2019.vue')
				// }
			]
		},
		{
			path: 'speakers',
			component: () => import('./components/conference/Speaker.vue'),
			children: [
				// {
				// 	path: '2018/:id',
				// 	name: 'speakers2018',
				// 	component: () => import('@/components/conference/speakers/Speakers2018.vue')
				// },
				// {
				// 	path: '2019/:id',
				// 	name: 'speakers2019',
				// 	component: () => import('@/components/conference/speakers/Speakers2019.vue')
				// }
			]
		}
	]
})
