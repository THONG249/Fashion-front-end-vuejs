<template>
  <div>
    <Header></Header>
    <div class="container mt-5">
      <div class="lining-header"></div>
      <div class="row" v-for="(brand,i) in home.lstBrand" :key="i">
        <h2 class="brand-name">{{brand.name}}</h2>
        <div class="check-col">
          <div v-for="(item, index) in home.lstProduct" :key="index">
            <div class="col-md-3" v-if="item.brand_Id == brand.id">
              <div class="card">
                <div class="image-container">
                  <div class="first">
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="discount">-25%</span>
                      <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                    </div>
                  </div>
                  <img :src="item.image" class="img-fluid rounded thumbnail-image" max-width="160" max-height="200">
                </div>
                <div class="product-detail-container p-2">

                  <div class="align-items-center">

                    <!-- <h5 class="dress-name">{{item.product_Description}}</h5> -->

                    <div class="d-flex flex-column mb-2">
                      <div class="d-flex justify-content-between">
                        <span class="new-price">{{item.price}} VNĐ</span>
                        <span class="new-price">Size:{{item.product_Size}}</span>
                      </div>

                      <router-link class="link" :to="{name: 'product-details', params: {id :item.id}}">{{item.name}}
                      </router-link>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center pt-1">
                    <div class="color-select d-flex ">
                      <input type="button" name="grey" class="btn creme">
                      <input type="button" name="red" class="btn red ml-2">
                      <input type="button" name="blue" class="btn blue ml-2">
                    </div>
                    <div class="d-flex ">
                      <span class="item-size mr-2 btn" type="button">S</span>
                      <span class="item-size mr-2 btn" type="button">M</span>
                      <span class="item-size btn" type="button">L</span>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center pt-1">
                    <div>
                      <i class="fa fa-star-o rating-star"></i>
                      <span class="rating-number">{{brand.name}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import axios from "axios";
import Header from '../components/Header'

export default {
  name: "HomeView",
  components: {
    Header,
  },
  data() {
    return {
      home: [],
    };
  },
  created() {
    if (!localStorage.getItem('info')) {
      console.log("please you should loginnnnn!")
    } else {
      const user = JSON.parse(localStorage.getItem('info'));
      console.log(user.email)
    }
  },
  methods: {
    async getData() {
      await axios.get("http://localhost:8081/shopthoitrang/Trang-Chu")
        .then(res => this.home = res.data)
        .catch(err => console.log(err))
    }
  },
  mounted() {
    this.getData();
  },
};
</script>
<style scoped>
body {

  background-color: #eee;
}

.container {
  width: 900px;
}

.card {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  width: 190px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-height: 340px;
  height: 100%;
}

.image-container {

  position: relative;
}

.thumbnail-image {
  border-radius: 10px !important;
}


.discount {

  background-color: red;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 10px;
  border-radius: 6px;
  color: #fff;
}

.wishlist {

  height: 25px;
  width: 25px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.first {

  position: absolute;
  width: 100%;
  padding: 9px;
}


.dress-name {
  font-size: 13px;
  font-weight: bold;
  width: 75%;
}


.new-price {
  font-size: 13px;
  font-weight: bold;
  color: red;

}

.old-price {
  font-size: 8px;
  font-weight: bold;
  color: grey;
}


.btn {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  padding: 3px;
}

.creme {
  background-color: #fff;
  border: 2px solid grey;


}

.creme:hover {
  border: 3px solid grey;
}

.creme:focus {
  background-color: grey;

}


.red {
  background-color: #fff;
  border: 2px solid red;

}


.red:hover {
  border: 3px solid red;
}

.red:focus {
  background-color: red;
}

.link {
  text-decoration: none;
  list-style: none;
  padding: 10px 20px;
}

.blue {
  background-color: #fff;
  border: 2px solid #40C4FF;
}

.blue:hover {
  border: 3px solid #40C4FF;
}

.blue:focus {
  background-color: #40C4FF;
}

.darkblue {
  background-color: #fff;
  border: 2px solid #01579B;
}

.darkblue:hover {
  border: 3px solid #01579B;
}

.darkblue:focus {
  background-color: #01579B;
}

.yellow {
  background-color: #fff;
  border: 2px solid #FFCA28;
}

.yellow:hover {
  border-radius: 3px solid #FFCA28;
}

.yellow:focus {
  background-color: #FFCA28;
}


.item-size {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid grey;
  color: grey;
  font-size: 10px;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}


.rating-star {
  font-size: 10px !important;
}

.rating-number {
  font-size: 10px;
  color: grey;

}

.buy {
  font-size: 12px;
  color: purple;
  font-weight: 500;
}



.voutchers {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  width: 190px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  overflow: hidden;

}

.voutcher-divider {

  display: flex;

}

.voutcher-left {
  width: 60%
}

.voutcher-name {
  color: grey;
  font-size: 9px;
  font-weight: 500;
}

.voutcher-code {
  color: red;
  font-size: 11px;
  font-weight: bold;
}

.voutcher-right {
  width: 40%;
  background-color: purple;
  color: #fff;
}

.discount-percent {
  font-size: 12px;
  font-weight: bold;
  position: relative;
  top: 5px;
}

.off {
  font-size: 14px;
  position: relative;
  bottom: 5px;
}

.product-row {
  display: flex;
}

.check-col {
  display: flex;
}

/* custom css */
:root {
  --mb-branch: 30px;
  --mt-branch: 30px
}


.row .brand-name {
  margin: 30px 0 30px 0;
}

.image-container>img {
  width: 190px;
  height: 190px;
}

/* end custom css */
</style>
