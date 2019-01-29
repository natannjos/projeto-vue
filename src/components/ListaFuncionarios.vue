<template>
    <div>
			<button @click="logout" type="button">Logout</button>
			<table class="table">
				<thead>
						<tr>
						<th scope="col">Id</th>
						<th scope="col">Nome</th>
						<th scope="col">Email</th>
						</tr>
				</thead>
				<tbody>
					<tr v-for="item in $store.getters.funcionarios" :key="item.id">
						<td>{{ item.id }}</td>
						<td>{{ item.name }}</td>
						<td>{{ item.email }}</td>
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
			this.$http.get('http://localhost:3000/get-users')
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