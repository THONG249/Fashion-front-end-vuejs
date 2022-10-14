<template>
  <section class="vh-100" style="background-color: #eee;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-lg-12 col-xl-11">
					<div class="card text-black" style="border-radius: 25px;">
						<div class="card-body p-md-5">
							<div class="row justify-content-center">
								<div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
									<p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đăng nhập</p>
									<form class="mx-1 mx-md-4" @submit.prevent="loginx">
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-user fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="text" class="form-control" v-model="username"/>
												<label class="form-label" v-if="!username_error">User name</label>
												<label class="form-label text-danger" v-if="check == 1" >{{username_error}}</label>
											</div>
										</div>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-key fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="password" class="form-control" v-model="password" />
												<label class="form-label" v-if="!password_error">Password</label>
												<label class="form-label text-danger" v-if="check == 2">{{password_error}}</label>
											</div>
										</div>																	
										<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
											<button type="submit" class="btn btn-primary btn-lg"
											@click="login">Đăng nhập</button>
										</div>
										<p class="text-center mt-4">You don't have a account ?  <router-link :to="{name:'Rigister'}">
												Sign up
											</router-link>
										</p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
	name: 'login-form',
	data() {
		return {
			username: null,
			password: null,
			username_error:null,
			password_error:null,
			check:null

		};
	},
	methods: {
		login() {
			const Login = {
				username: this.username,
				password: this.password,

			};
				axios({
				method: 'post',
				url: 'http://localhost:8081/shopthoitrang/register/sign-in',
				data: JSON.stringify(Login),
				headers: {
					'Content-Type': 'application/json',
				}
			}).then((res) => {
				console.log(res.data.data)
				localStorage.setItem('token',res.data.token);
				localStorage.setItem('info',JSON.stringify(res.data.data))
				this.$router.push({ name: "Home" });
				sweetalert({
					text: 'Đăng nhập thành công!',
					icon: 'success'
				})
			}).catch(err => {
				console.log(err)
				// const response_error = err.response.data
				// if(response_error == 'User is not valid'){
				// 	this.username_error = response_error;
				// 	this.password_error = null;
				// 	this.check = 1;
				// }else{
				// 	this.username_error = null;
				// 	this.password_error = response_error;
				// 	this.check = 2;
				// }
			})
		},
	}

};
</script>
<style scoped>
 
</style>
