import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'index',
			component: () => import('./views/Index.vue')
		},
		{
			path: '/conference',
			name: 'conference',
			component: () => import('./views/Conference.vue'),
			children: [
				{
					path: '2018',
					name: 'schedule2018',
					component: () => import('./components/conference/schedule/2018.vue')
				},
				{
					path: '2019',
					name: 'schedule2019',
					component: () => import('./components/conference/schedule/2019.vue')
				}
			]
		},
		{
			path: '/speakers',
			children: [
				{
					path: '2018',
					name: 'speakers2018',
					component: () => import('./components/conference/speakers/2018.vue')
				},
				{
					path: '2019',
					name: 'speakers2019',
					component: () => import('./components/conference/speakers/2019.vue')
				},
				{
					path: '*',
					beforeEnter: (to, from, next) => {
						next({ name: 'index' })
					}
				}
			]
		}
	]
})
