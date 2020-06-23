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
			path: 'schedule',
			children: [
				{
					path: '2018',
					name: 'schedule2018',
					component: () => import('@/components/conference/schedule/2018.vue')
				},
				{
					path: '2019',
					name: 'schedule2019',
					component: () => import('@/components/conference/schedule/2019.vue')
				},
				{
					path: '*',
					beforeEnter: (to, from, next) => {
						next({ name: 'index' })
					}
				}
			]
		},
		{
			path: 'speakers',
			children: [
				{
					path: '2018/:id',
					name: 'speakers2018',
					component: () => import('@/components/conference/speaker/2018.vue')
				},
				{
					path: '2019/:id',
					name: 'speakers2019',
					component: () => import('@/components/conference/speaker/2019.vue')
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
