<template>
	<section class="vh-100" style="background-color: #eee;">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-lg-12 col-xl-11">
					<div class="card text-black" style="border-radius: 25px;">
						<div class="card-body p-md-5">
							<div class="row justify-content-center">
								<div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
									<p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Đănh kí</p>
									<form class="mx-1 mx-md-4">
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-user fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="text" class="form-control" v-model="username" />
												<label class="form-label">User name</label>
											</div>
										</div>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-user fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="text" class="form-control" v-model="firstname" />
												<label class="form-label">First name</label>
											</div>
										</div>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-user fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="text" class="form-control" v-model="lastname" />
												<label class="form-label">Last name</label>
											</div>
										</div>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="email" class="form-control" v-model="email" />
												<label class="form-label">Email</label>
											</div>
										</div>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-key fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="password" class="form-control" v-model="password" />
												<label class="form-label">Password</label>
											</div>
										</div>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-key fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="password" class="form-control" v-model="passwordConfirm" />
												<label class="form-label">Repeat your
													password</label>
											</div>
										</div>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-phone fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<input type="text" class="form-control" v-model="phone" />
												<input type="text" v-model="role_id" style="display:none" />
												<label class="form-label">Phone</label>
											</div>

										</div>
										<div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
											<button type="button" class="btn btn-primary btn-lg"
												@click="register">Tạo tài khoản</button>
										</div>
										<p class="text-center mt-4">You have a account ?
											<router-link
												:to="{name: 'login'}">
												Login
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
	name: 'dangky-form',
	data() {
		return {
			username: null,
			firstname: null,
			lastname: null,
			email: null,
			phone: null,
			password: null,
			role_id: null,
			passwordConfirm: null

		};
	},
	methods: {
		register() {
			const DangKy = {
				username: this.username,
				firstname: this.firstname,
				lastname: this.lastname,
				password: this.password,
				email: this.email,
				phone: this.phone,
				role_id: 2,
			};
			if (this.password === this.passwordConfirm) {
				axios({
					method: 'post',
					url: 'http://localhost:8081/shopthoitrang/register/sign-up',
					data: JSON.stringify(DangKy),
					headers: {
						'Content-Type': 'application/json',
					}
				}).then(() => {
					this.$router.replace("/login");
					sweetalert({
						text: 'Chúc mừng bạn đã đăng ký tài khoản thành công!',
						icon: 'success'
					})
				}).catch(err => {
					console.log(err);
				})
				console.log(DangKy);
			} else {
				sweetalert({
					text: 'password and passwordconfirm is not sample',
					icon: 'error'
				})
			}
		},

	}

};
</script>
<style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
	font-size: 1rem;
	line-height: 2.15;
	padding-left: .75em;
	padding-right: .75em;
}

.card-registration .select-arrow {
	top: 13px;
}

i {
	margin-bottom: 35px;
}
</style>