<template>
    <div>
			<button @click="logout" type="button">Logout</button>
			<table class="table">
				<thead>
						<tr>
						<th scope="col">Usuario</th>
						<th scope="col">Id</th>
						<th scope="col">Titulo</th>
						<th scope="col">Completo?</th>
						</tr>
				</thead>
				<tbody>
					<tr v-for="item in $store.getters.funcionarios" :key="item.id">
						<th scope="row">{{ item.userId }}</th>
						<td>{{ item.id }}</td>
						<td>{{ item.title }}</td>
						<td>{{ item.completed }}</td>
					</tr>
			</tbody>
		</table>
    </div>
</template>

<script>


export default {
	name: 'ListaFuncionarios',
	methods:{
		logout(){
			localStorage.clear()
			this.$router.push('/')
		}
	},
	mounted:
		function(){
			if(localStorage.getItem('jwt') != null){
			this.$http.get('https://jsonplaceholder.typicode.com/todos')
				.then(
					(response) => {
						let funcionarios = JSON.parse(response.bodyText).slice(0, 20)
						this.$store .commit('addFuncionarios', funcionarios)
					}
					
				)} else {
					this.$router.push('/')
				}
		} 
}
</script>

<style lang="less" scoped>

</style>