import {createWebHistory, createRouter, RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw [] = [];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;