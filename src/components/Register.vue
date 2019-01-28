<template>
	<div id='register'>
		<div class="row" id="cadastro">
	<div class="col-md-6 mx-auto">
		<div class="card rounded-1">
			<div class="card-header">
					<h3 class="mb-0">Cadastro</h3>
			</div>
			<div class="card-body">
				<form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
					<div class="form-group">
						<label for="nomeId">Nome</label>
						<input v-model="name" type="text" class="form-control form-control-lg rounded-1" name="name" id="nomeId" required autofocus>
						<div class="invalid-feedback">Errou!</div>
					</div>
					<div class="form-group">
						<label for="emailId">Email</label>
						<input v-model="email" type="email" class="form-control form-control-lg rounded-1" name="email" id="emailId" required>
						<div class="invalid-feedback">Errou!</div>
					</div>
					<div class="form-group">
						<label>Senha</label>
						<input v-model="password" type="password" class="form-control form-control-lg rounded-1" id="passwordId" required>
						<div class="invalid-feedback">Digite o password também!</div>
					</div>
					<div class="form-group">
						<label>Confirmação de Senha</label>
						<input v-model="password_confirm" type="password" class="form-control form-control-lg rounded-1" id="passwordConfirmId" required>
						<div class="invalid-feedback">Digite o password também!</div>
					</div>
				
					<button @click="processaSubmit" type="submit" class="btn btn-success btn-lg float-right" id="btnLogin" v-on:click="consomeApi">
						Cadastrar
					</button>
					<router-link to="/">Login</router-link>
				</form>
			</div>
		</div>
	</div>
</div>
	</div>
</template>

<script>
export default {
	/* eslint-disable */
	name: 'Register',
	props: ['nextUrl'],
	data(){
		return {
			name: '',
			email: '',
			password: '',
			password_confirm: ''
		}
	},
	methods: {
		processaSubmit(e) {
			e.preventDefault();

			if (this.password === this.password_confirm && this.password.length > 0){
						let url = "http://localhost:3000/cadastro"
						this.$http.post(url, {
								name: this.name,
								email: this.email,
								password: this.password,
						})
						.then(response => {
								localStorage.setItem('user',JSON.stringify(response.data.user))
								localStorage.setItem('jwt',response.data.token)

								if (localStorage.getItem('jwt') != null){
										this.$emit('loggedIn')
										if(this.$route.params.nextUrl != null){
												this.$router.push(this.$route.params.nextUrl)
										}
										else{
												this.$router.push('/funcionarios')
										}
								}
						})
						.catch(error => {
								console.error(error);
						});
				} else {
						this.password = ""
						this.password_confirm = ""

						return alert("Passwords do not match")
				}
		}
	}
}
</script>