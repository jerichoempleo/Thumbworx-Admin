//This file is where to redirecting to other pages
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

import UserAccount from '../views/UserAccount.vue';
import UserDetails from '../views/UserDetails.vue'; 
import ReviseDocuments from '../views/ReviseDocuments.vue'; 
import Logs from '../views/Logs.vue';
import Login from '../views/Login.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Dashboard,
			name: 'Dashboard'
		},
		{
			path: '/UserAccount', 
			component: UserAccount,
			name: 'UserAccount'
		  },
		{
			path: '/Logs',
			component: Logs,
			name: 'Logs'
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
		{
			path: '/Login', 
			component: Login
		  },
	],
})

export default router