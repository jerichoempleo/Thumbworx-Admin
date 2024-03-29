import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

import UserAccount from '../views/UserAccount.vue';
import UserView from '../views/UserView.vue'; 

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Dashboard
		},
		{
			path: '/UserAccount',
			component: UserAccount
		  },
		{
			path: '/Logs',
			component: () => import('../views/Logs.vue')
		},
		{
			path: '/view/:id',
			component: UserView,
			props: true // Pass route params as props to ViewPage component
		  }
	],
})

export default router