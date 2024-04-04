//This file is where to redirecting to other pages
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

import UserAccount from '../views/UserAccount.vue';
import UserDetails from '../views/UserDetails.vue'; 
import ReviseDocuments from '../views/ReviseDocuments.vue'; 

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
			component: UserDetails,
			props: true // Pass route params as props to ViewPage component
		  },
		{
			path: '/ReviseDocuments',
			component: ReviseDocuments,
		},
	],
})

export default router