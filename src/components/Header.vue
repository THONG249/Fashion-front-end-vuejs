<template>
	<header class="section-header">
		<section class="header-main border-bottom">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-xl-6 col-lg-5 col-md-6">
						<form action="#" class="search-header">
							<div class="input-group w-100">
								<input type="text" class="form-control" placeholder="Search">

								<div class="input-group-append">
									<button class="btn btn-primary" type="submit">
										<i class="fa fa-search"></i> Search
									</button>
								</div>
							</div>
						</form>
					</div>
					<div class="col-xl-4 col-lg-4 col-md-6 icon-item-header">
						<div class="widgets-wrap float-md-right icon-item">
							<div class="widget-header mr-3">
								<router-link :to="{name:'login'}">
									<div class="icon-area">
										<i class="fa fa-user"></i>
										<!-- <span class="notify">3</span> -->
									</div>
									<small class="text" v-if="information">{{information}}</small>
									<small class="text" v-if="!information">
										Login</small>
								</router-link>
							</div>
							<div class="widget-header mr-3">
								<a href="#" class="widget-view">
									<div class="icon-area">
										<i class="fa fa-comment-dots"></i>
										<span class="notify">1</span>
									</div>
									<small class="text"> Message </small>
								</a>
							</div>
							<div class="widget-header mr-3">
								<button @click="DeleteData">
								<!-- <router-link :to="{name:'Login'}" class="widget-view" @click="DeleteData"> -->
									<div class="icon-area">
										<i class="fa fa-store"></i>
									</div>
									<small class="text">Logout</small>						
								<!-- </router-link> -->
							</button>
							</div>
							<div class="widget-header">
								<a href="#" class="widget-view">
									<div class="icon-area">
										<i class="fa fa-shopping-cart"></i>
									</div>
									<small class="text"> Cart </small>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</header>
</template>
<script>
export default {
	name: 'header-page',
	data() {
		return {
			information: null,
		}
	},
	 created() {
		if (!localStorage.getItem('info')) {
			console.log("data not found")
			this.information = null;
		} else {
			const user = JSON.parse(localStorage.getItem('info'));
			this.information = user.username
			console.log(this.information);
		}
	},
	methods:{
		DeleteData() {
		localStorage.removeItem("info"),
		localStorage.removeItem("token"),
		this.information = null;
		this.$router.push({
		name: 'login',
		})
	}
	}
}
</script>
<style scoped>
.icon-item {
	display: flex;
}

.header-main {
	margin-top: 50px;
}

.icon-item-header {
	margin-left: 215px;
}

a {
	text-decoration: none;
}
</style>