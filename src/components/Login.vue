<template>
<div class="row" id="login">
	<div class="col-md-6 mx-auto">
		<div class="card rounded-1">
			<div class="card-header">
					<h3 class="mb-0">Login</h3>
			</div>
			<div class="card-body">
				<form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
					<div class="form-group">
						<label for="uname1">Email</label>
						<input v-model="email" type="email" class="form-control form-control-lg rounded-1" name="email" id="emailId" required autofocus>
						<div class="invalid-feedback">Errou!</div>
					</div>
					<div class="form-group">
						<label>Senha</label>
						<input v-model="password" type="password" class="form-control form-control-lg rounded-1" id="passwordId" required>
						<div class="invalid-feedback">Digite o password também!</div>
					</div>
					<div>
					</div>
					<button @click="processaSubmit" type="submit" class="btn btn-success btn-lg float-right" id="btnLogin" v-on:click="consomeApi">
						Login
					</button>
				</form>
					<p>
				<router-link to="/cadastro">Cadastro</router-link>

					</p>
			</div>
		</div>
	</div>
</div>
</template>

<script>
/* eslint-disable */

export default {
	name: 'Login',
	data : function (){
		return {
			email:'',
			password: ''
		}
	},
	methods: {
		processaSubmit(e){
			e.preventDefault();
			if (this.password.length > 0) {
				this.$http.post('http://localhost:3000/login', {
						email: this.email,
						password: this.password
				})
				.then(response => {
						localStorage.setItem('user',JSON.stringify(response.data.user))
						localStorage.setItem('jwt',response.data.token)
						
						if (localStorage.getItem('jwt') != null){
								this.$emit('loggedIn')
								this.$router.push('/funcionarios')
								//	this.$router.push(this.$route.params.nextUrl)
						}
				}, error =>{console.error('Mensagem de erro ' + error)})
				
			}
		}
	},
	mounted: function(){
		if (localStorage.getItem('jwt') != null){
			this.$emit('loggedIn')
			this.$router.push(this.$route.params.nextUrl)
			//this.$router.push('/funcionarios')
		}
	}

}
</script>

<style scoped>

</style>
