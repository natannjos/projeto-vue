import Router from "vue-router";
import ListaFuncionarios from "./../components/ListaFuncionarios";
import Login from "./../components/Login";
import Register from "./../components/Register";


let router = new Router({
	mode: 'history',
	routes: [
		{
			path: '',
			name: 'login',
			component: Login,
		},
		{
			path: '/cadastro',
			name: 'cadastro',
			component: Register,
		},
		{
			path: '/funcionarios',
			name: 'funcionarios',
			component: ListaFuncionarios,
		},
	]
})

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (localStorage.getItem('jwt') == null) {
			next({
				path: '/',
				params: { nextUrl: to.fullPath }
			})
		} else {
			next({ name: 'funcionarios' })
		}
	} else {
		next()
	}
})

export default router