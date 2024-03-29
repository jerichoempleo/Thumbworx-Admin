import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Dashboard
		},
		{
			path: '/DriverAccount',
			component: () => import('../views/DriverAccount.vue')
		},
		{
			path: '/Logs',
			component: () => import('../views/Logs.vue')
		},
	],
})

export default router