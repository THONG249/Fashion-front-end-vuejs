<template>
     <div class="container">
     <div class="row">
       <div class="col-12 text-center">
         <h4 class="pt-3">Thêm mới thương hiệu</h4>
       </div>
     </div>

     <div class="row">
       <div class="col-3"></div>
       <div class="col-md-6 px-5 px-md-0">
        <form>
          <div class="form-group">
            <label>Brand Name</label>
            <input type="text" class="form-control" v-model="name" required>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="text" class="form-control" v-model="phone" required>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input type="url" class="form-control" v-model="address" required>
          </div>
          <button type="button" class="btn btn-primary" @click="addBrand">Submit</button>
        </form>
       </div>
       <div class="col-3"></div>
     </div>
  </div>
</template>
<script>
    const axios = require("axios");
    const sweetalert = require("sweetalert");
export default {
    data(){
        return{
            name:"",
            phone:"",
            address:"",
        };
    },
    methods:{
        addBrand(){
            const newBrand = {
            name:this.name,
            phone:this.phone,
            address:this.address,
            };
            axios({
                method: 'post',
                url:'http://localhost:8081/shopthoitrang/Create-Brand',
                data:JSON.stringify(newBrand),
                headers: {
                    'Content-Type':'application/json',
                }
            }).then(() => {
                sweetalert({
                    text:'Thêm mới thành công !',
                    icon:'success'
                })
            }).catch(err => {
                console.log(err);
            })
            console.log(newBrand);
            
        },
     
    }
    
};
</script>
<style scoped>
h4 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>>

