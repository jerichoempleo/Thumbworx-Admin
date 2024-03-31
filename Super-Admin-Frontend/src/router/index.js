//This file is where to redirecting to other pages
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
			path: '/UserDetails/:id',
			component: UserView,
			props: true // Pass route params as props to ViewPage component
		  }
	],
})

export default router