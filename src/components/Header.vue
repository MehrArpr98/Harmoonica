<template>
  <!-- <link rel="stylesheet" href="~/css/header.css?v=24"> -->

  <!-- <div class="box"></div> -->

  <div class="header row">
    <div class="header-right col-8 col-lg-8 col-md-8 col-sm-12">
      <div class="header-right-logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="header-right-search-box p-0">
        <input
          class="w3-border-0"
          type="text"
          placeholder=" جست و جو در هارمونیکا... "
          name="search"
        />
        <div class="search-icon">
          <i class="fa fa-search"></i>
        </div>
      </div>
    </div>
    <div class="header-left col-4 col-lg-4 col-md-4 col-sm-12">
      <div class="header-left-user">
        <a href="/" class="header-left-user-link">
          <span class="card__infoicon">
            <i class="fa fa-user"></i>
          </span>
          <span class="user-text">ورود | ثبت نام</span>
        </a>
      </div>
      <div id="header-left-basket" class="header-left-basket">
        <div class="card" tabindex="0">
          <span class="card__infoicon">
            <i class="fa fa-shopping-basket"></i>
          </span>
          <div class="card__title">
            <div class="card__description">
              <div class="card__description-title">
                <i class="fa fa-shopping-basket"></i>
                سبد خرید شما
              </div>
              <div
                class="card__description-item"
                v-for="(basketValue,index) in basketValues"
                :key="index"
              >
                <div class="remove-from-basket" name="removeId">
                  <i class="fa fa-remove"></i>
                </div>
                <div class="content-from-basket">
                  <div
                    class="card__description-item-img"
                    v-bind:style="{backgroundImage: 'url(' + require('../assets/'+basketValue.imgSrc) + ')  !important'}"
                  ></div>
                  <div>
                    <p>{{ basketValue.name }}</p>
                    <p>
                      <span>{{ basketValue.price}}</span>
                      تومان
                    </p>
                    <p style="display:none" name="hiddenId">{{ basketValue.id }}</p>
                    <div class="d-flex cart-item-count-div">
                      <span class="add">+</span>
                      <span class="number">{{  basketValue.count}}</span>
                      <span class="minus">-</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card__description-last-row">
                <div class="d-none basket-price-part">
                  جمع کل :
                  <!-- <span class="basket-price">
                                    {{ toFarsiAndComma(allPrice) }}
                  </span> تومان-->
                </div>
                <a
                  href="/cart"
                  class="d-none basket-button"
                  id="basket-button"
                >مشاهده سبد خرید و پرداخت</a>
              </div>
              <p>کاربر گرامی ، سبد خرید شما خالی است.</p>
            </div>
            <input class="basket-values" type="hidden" />
          </div>
        </div>
        <div class="header-left-basket-div">
          <!-- <div class="basket-number">{{ basket.length }}</div> -->
          <div class="basket-number">0</div>
        </div>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-light">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav menu-bar-items ml-auto py-1 py-md-0">
        <li class="nav-item menu-bar-item pl-4 pl-md-0 ml-0 ml-md-4 active">
          <a class="menu-bar-item-text" href="#footer">
            تماس با ما
            <i class="fa fa-phone" style="transform: rotate(251deg); " aria-hidden="true"></i>
          </a>
        </li>
        <li class="nav-item menu-bar-item pl-4 pl-md-0 ml-0 ml-md-4">
          <a class="menu-bar-item-text" href="/category?categoryId='suggest'">
            تخفیف و پیشنهادها
            <i class="fa fa-percent" aria-hidden="true"></i>
          </a>
        </li>
        <li class="nav-item menu-bar-item pl-4 pl-md-0 ml-0 ml-md-4">
          <a class="menu-bar-item-text" href="/category?categoryId='bestSeller'">
            پرفروش ترین ها​
            <i class="fa fa-star"></i>
          </a>
        </li>
        <!-- <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Web Design</a>
                        <a class="dropdown-item" href="#">Web Development</a>
                        <a class="dropdown-item" href="#">SEO</a>
                        <a class="dropdown-item" href="#">AI Development</a>
                    </div>
        </li>-->
        <li class="nav-item menu-bar-item pl-4 pl-md-0 ml-0 ml-md-4">
          <a class="menu-bar-item-text" href="#">
            دسته بندی
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- <script>
    //var x = document.getElementById('header-left-basket').offsetLeft;
    //console.log('left : ', x)
    
    //setTimeout(() => {
    //     //if($('.Noti_con') != null)
    //     $('.Noti_con').css("left", "400px");
    // }, 100);


    //var x = document.getElementById('header-left-basket');
    //x.prepend(noti_con);
  </script>-->
</template>


<script>
import { inject, reactive, ref } from "vue";

export default {
  setup() {
    const emitter = inject("emitter"); // Inject `emitter`\
    const basketValues = ref([]);
    emitter.on("basket", value => {
      // *Listen* for event
      //console.log("myevent received!", `value: ${value}`);
      basketValues.value = value;
      //console.log(basket.value[0].name)
    });

    function toFarsiAndComma(x) {
      var val = x;
      if (val != Math.floor(val)) {
        val = val.toFixed(1);
      }

      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
      return val.replace(/[0-9]/g, function(w) {
        return id[+w];
      });
    }
    
    return { basketValues,toFarsiAndComma };
  }
};
</script>

<style>
@font-face {
  font-family: "iranyekan";
  src: url("../libs/iranyekan-cufonfonts/Qs_Iranyekan.ttf")
    format("truetype");
}

:root {
  --dark-gray-n1: #4f4f4f;
  --dark-gray-n2: #474747;
  --dark-gray-n3: #3f3f3f;
  --dark-gray-n4: #3b3b3b;
  --light-purple: #9b58b5;
  --sky-blue: #3599db;
  --middle-blue: #197bbd;
  --light-green: #1dbd9b;
  --middle-green: #288b76;
  --pastel-green: #c5d5d1;
  --dark-base-blue: #196065;
  --base-gray: #f5f5f5;
  --base-blue: #4bacae;
  --lighter-base-blue: #ccdcdd;
  /*--dark-base-blue: #ccdcdd;*/
  --light-gray: #d9d9dc;
  /*--base-gray: #efebe7;*/
  --red: #e72222;
  --dark-red: #a70e0e;
  --cream: #d5af83;
  --border-radius-size: 7px;
  --smaller-border-radius-size: 3px;
  --font-family: iranyekan;
}

a {
  text-decoration: none !important;
}

body {
  margin-top: 0;
  padding: 0;
  align-items: center;
  height: 100vh;
  background: var(--base-gray) !important;
  font-family: var(--font-family) !important;
}

.box {
  position: absolute;
  top: -1px;
  left: 0;
  width: 0px;
  height: 0px;
  border-bottom: 2px solid white;
  animation: border_anim 0.35s linear forwards;
}

@keyframes border_anim {
  0% {
    width: 0;
    border-bottom: 3px solid white;
  }

  100% {
    width: 100%;
    border-bottom: 3px solid #c3a17e;
  }
}

header {
  position: fixed;
  top: 0px;
  right: 0;
  left: 0;
  background: white;
  height: max-content;
  z-index: 100;
  transition: height 0.35s ease-in-out;
  box-shadow: 0 0 5pt 2pt #d3d3d3;
}

header .header {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 10px 0px 15px;
  width: 100%;
  max-width: 1560px;
  margin: 0 auto !important;
}

header .row {
  margin: 0;
}

header .header .header-right {
  display: flex;
  flex-direction: row-reverse;
  padding-top: 10px;
}

header .header .header-right .header-right-logo {
}

header .header .header-right .header-right-logo img {
  cursor: pointer;
  float: right;
  height: 41px;
}

header .header .header-right .header-right-search-box {
  /*margin: 10px 2% 0 0;*/
  margin-right: 10px;
  display: flex;
  justify-content: end;
}

header .header .header-right .header-right-search-box input {
  background-color: var(--base-gray);
  border-radius: var(--border-radius-size) 0 0 var(--border-radius-size);
  border: none;
  height: 41px;
  width: 250px;
  text-align: right;
  direction: rtl;
  font-size: 0.8rem;
  transition: width 0.35s ease-in-out;
}

header .header .header-right .header-right-search-box .search-icon {
  background-color: var(--base-gray);
  border-radius: 0 var(--border-radius-size) var(--border-radius-size) 0;
  border: none;
  border-left: 1px solid rgb(227, 227, 227);
  height: 41px;
  width: 35px;
  transition: width 0.35s ease-in-out;
}

header .header .header-right .header-right-search-box .search-icon i {
  color: #757575;
  font-size: 1.5rem;
  margin: 6px;
}

header .header .header-right .header-right-search-box input:focus {
  width: 280px;
  outline: none;
  box-shadow: 0 0 5pt 2pt var(--base-gray);
  background-color: white;
}

header .header .header-left {
  padding-top: 10px;
  display: flex;
}

header .header .header-left .header-left-user {
  padding: 0;
  position: relative;
}

header .header .header-left .header-left-user .header-left-user-link {
  cursor: pointer;
  text-decoration: none;
  /*width: 140px;*/
  border-radius: var(--border-radius-size);
  background-color: var(--base-gray);
  padding: 5px 8px;
  /*position: absolute;*/
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 100%;
}

header
  .header
  .header-left
  .header-left-user
  .header-left-user-link
  .card__infoicon
  i {
  color: black;
  font-size: 1.8rem;
}

header
  .header
  .header-left
  .header-left-user
  .header-left-user-link
  .card__infoicon {
  /*position: absolute;*/
  top: 3px;
  right: 4px;

  color: #000;
  transition: ease-out 0.3s;
}

header
  .header
  .header-left
  .header-left-user
  .header-left-user-link:hover
  .card__infoicon
  i {
  color: var(--cream);
}

header
  .header
  .header-left
  .header-left-user
  .header-left-user-link:hover
  .user-text {
  color: gray;
}

header
  .header
  .header-left
  .header-left-user
  .header-left-user-link
  .user-text {
  padding-right: 3px;
  /*font-weight: 600;*/
  font-size: 0.8rem;
  color: #a1a1a1;
  transition: 0.6s ease-in-out;
  margin-bottom: 0;
}

header .header .header-left .header-left-basket {
  padding: 0 5px;
  /*position: absolute;*/
  left: 150px;
}

header .header .header-left .header-left-basket .card {
  position: fixed;
  /* padding: 19px 0 20px;
                clip-path: circle(22px at 25px 23px); */
  padding: 21px 0;
  -webkit-clip-path: circle(22px at 25px 23px);
  clip-path: circle(20px at 25px 22px);
  /*padding: 23px 0 20px;
                clip-path: circle(21px at 25px 22px);*/
  transition: all ease-in-out 0.3s;
  background-color: var(--base-gray);
  cursor: pointer;
  width: 22%;
  min-width: 350px;
  margin: 0;
}

header .header .header-left .header-left-basket .card .card__infoicon {
  /*position: absolute;*/
  top: 0px;
  left: 7px;
  font-size: 1.5rem;
  color: #000;
  transition: ease-out 0.3s;
  position: absolute;
  top: 2px;
  left: 10px;
}

header .header .header-left .header-left-basket .card .card__title {
  margin: 0;
  font-size: 1em;
  line-height: 1em;
  direction: rtl;
  display: none;
}

header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  p:last-child {
  text-align: right;
}

header .header .header-left .header-left-basket .card:hover,
header .header .header-left .header-left-basket .card:focus {
  clip-path: circle(75%);
  border-radius: var(--border-radius-size);
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12), 0px 3px 18px rgba(0, 0, 0, 0.08);
  background: #fff;
  outline: none;
  padding: 10px 20px;
  z-index: 100;
}
header .header .header-left .header-left-basket .card:focus {
  cursor: auto;
}

header .header .header-left .header-left-basket .card:hover .card__infoicon,
header .header .header-left .header-left-basket .card:focus .card__infoicon {
  display: none;
}

header .header .header-left .header-left-basket .card:hover ~ .basket-number,
header .header .header-left .header-left-basket .card:focus ~ .basket-number {
  display: none;
}

header .header .header-left .header-left-basket .card:hover .card__title,
header .header .header-left .header-left-basket .card:focus .card__title {
  display: block;
}

header .header .header-left .header-left-basket .card:focus {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.08),
    0px 0px 0px 2px rgba(0, 0, 0, 0.2);
}

header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-title {
  font-size: 1.2rem;
  padding: 10px 0 30px;
  text-align: center;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-title
  i {
  animation: move 1.5s infinite;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid var(--light-gray);
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-item
  .remove-from-basket {
  padding: 3px 5px 4px;
  float: right;
  margin-left: 5px;
  width: 22px;
  height: 22px;
  background-color: var(--dark-red);
  border-radius: var(--border-radius-size);
  position: relative;
  cursor: pointer;
}

header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-item
  .remove-from-basket
  i {
  color: white;
  /*position: absolute;*/
  top: 3px;
  left: 4px;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-item
  .content-from-basket {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 90%;
  width: 100%;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-item
  .content-from-basket
  div:nth-child(1) {
  width: 55px;
  height: 45px;
}

header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-item
  .content-from-basket
  div:nth-child(2)
  p {
  font-size: 0.9rem;
  margin: 0 0 7px;
  text-align: right;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-last-row {
  padding: 20px 0 10px;
  align-items: center;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-last-row
  .basket-price-part {
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2rem;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-last-row
  .basket-price-part
  .basket-price {
  font-weight: 600;
}
header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-last-row
  .basket-button {
  color: white;
  padding: 8px calc(50% - 78px);
  background-color: #4d5e5a;
  cursor: pointer;
  border-radius: var(--border-radius-size);
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
}

header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-last-row
  .basket-button:hover {
  text-decoration: none;
}
header .header .header-left .header-left-basket .header-left-basket-div {
  position: relative;
}

header
  .header
  .header-left
  .header-left-basket
  .header-left-basket-div
  .basket-number {
  width: 22px;
  height: 22px;
  background: var(--red);
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 43px;
  text-align: center;
  color: white;
}

/*header .menu {
        transition: .35s;
        padding: 10px 0px 14px;
    }

        header {
            display: flex;
            transition: display .35s ease-in-out;
            justify-content: end;
            position: relative;
            padding: 0 50px;
        }*/

header .menu-bar-items {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}

header .menu-bar-items > .menu-bar-item {
  list-style: none;
  transition: 0.5s;
  display: flex;
  align-items: center;
}

header .menu-bar-items > .menu-bar-item > .menu-bar-item-text {
  display: block;
  position: relative;
  text-decoration: none;
  padding: 6px 8px;
  font-size: 11px;
  color: black;
  transition: 0.5s;
}

header .menu-bar-items:hover .menu-bar-item .menu-bar-item-text {
  opacity: 0.7;
  filter: blur(1px);
}

header .menu-bar-items > .menu-bar-item .menu-bar-item-text:hover {
  transform: scale(1.15);
  opacity: 1;
  filter: blur(0);
  text-decoration: none;
  color: black;
}

header .menu-bar-items .menu-bar-item .menu-bar-item-text i {
  margin: 3px;
  color: var(--dark-green);
  float: right;
}

/*header .menu-bar-items > .menu-bar-item .menu-bar-item-text:hover i {
                    animation: shake 1s forwards;
                    color: var(--cream);
                }*/

header .menu-bar-items > .menu-bar-item .menu-bar-item-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border: 0;
  border-bottom: 2px solid var(--cream);
  transition: 0.5s;
  transform-origin: right;
  transform: scaleX(0);
  z-index: -1;
}

header .menu-bar-items > .menu-bar-item .menu-bar-item-text:hover:before {
  transition: transform 0.5s;
  transform-origin: left;
  transform: scaleX(1);
  animation: background-fade 0.5s forwards;
}

header .faction {
  position: absolute;
  right: 52px;
  top: 25px;
  width: 50%;
  height: 200px;
  display: none;
  transition: 0.35s ease-in-out;
  background-color: white;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12), 0px 3px 18px rgba(0, 0, 0, 0.08);
  border-radius: 0 0 var(--border-radius-size) var(--border-radius-size);
}
@keyframes move {
  0% {
    transform: rotate(0deg);
  }

  33.33% {
    transform: rotate(30deg);
  }

  100% {
    transform: rotate(-30deg);
  }
}

.cart-item-count-div {
  width: 80px;
  margin: 0;
  border-radius: 7px;
  flex-direction: row-reverse;
}

.cart-item-count-div span {
  text-align: center;
  width: 33.33%;
}

.cart-item-count-div span:nth-child(3) {
  background: #c79a9a;
  border-radius: 0 7px 7px 0;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  padding-top: 2px;
}

.cart-item-count-div span:nth-child(2) {
  background: #e3e3e3;
  border-top: 1px solid #a7a3a3;
  border-bottom: 1px solid #a7a3a3;
}

.cart-item-count-div span:nth-child(1) {
  background: #9ac7b8;
  border-radius: 7px 0 0 7px;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  padding-top: 2px;
}

.cart-item-count-div span:nth-child(1):hover,
.cart-item-count-div span:nth-child(3):hover {
  filter: contrast(120%);
}

.navbar {
  padding: 0px 15px 3px;
  max-width: 1560px;
  margin: 0 auto !important;
  transition: 0.35s ease-in-out;
}

.navbar-toggler {
  float: right;
  padding: 3px 6px 6px !important;
  /*background: rgb(239,235,231) !important;*/
  background: var(--base-blue) !important;
  /*padding-bottom: 0.5rem;*/
  margin: 0 0 10px;
}
.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: none;
}
.navbar-light .navbar-toggler-icon {
  background-image: none;
  width: 1.14rem;
  height: 1.14rem;
}

.navbar-toggler-icon {
  width: 24px;
  height: 17px;
  background-image: none;
  position: relative;
  /*border-bottom: 1px solid #000;*/
  border-bottom: 2px solid white;
  transition: all 300ms linear;
}

.navbar-toggler-icon:after,
.navbar-toggler-icon:before {
  width: 24px;
  position: absolute;
  height: 2px;
  /*background-color: #000;*/
  background: white;
  top: 0;
  left: 0;
  content: "";
  z-index: 2;
  transition: all 300ms linear;
}

.navbar-toggler-icon:after {
  top: 8px;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
  transform: rotate(45deg);
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
  transform: translateY(8px) rotate(-45deg);
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  border-color: transparent;
}

/*.nav-item:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    content: '';
    background-color: #ff4242;
    opacity: 0;
    transition: all 200ms linear;
}

.nav-item:hover:after {
    bottom: 0;
    opacity: 1;
}

.nav-item.active:hover:after {
    opacity: 0;
}

.nav-item {
    position: relative;
    transition: all 200ms linear;
}*/

/*.nav-item .dropdown-menu {
    transform: translate3d(0, 10px, 0);
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    display: block;
    padding: 0;
    margin: 0;
    transition: all 200ms linear;
}

.nav-item.show .dropdown-menu {
    opacity: 1;
    visibility: visible;
    max-height: 999px;
    transform: translate3d(0, 0px, 0);
}

.dropdown-menu {
    padding: 10px !important;
    margin: 0;
    font-size: 13px;
    letter-spacing: 1px;
    color: #212121;
    background-color: #fcfaff;
    border: none;
    border-radius: 3px;
    box-shadow: 0 5px 10px 0 rgb(33,33,33,0.15);
    transition: all 200ms linear;
}*/

/*.dropdown-toggle::after {
    display: none;
}

.dropdown-item {
    padding: 3px 15px;
    color: #212121;
    border-radius: 2px;
    transition: all 200ms linear;
}

    .dropdown-item:hover,
    .dropdown-item:focus {
        color: #fff;
        background-color: rgb(255,66,66,0.6);
    }*/

@media (max-width: 992px) {
  header
    .header
    .header-left
    .header-left-user
    .header-left-user-link
    .user-text {
    display: none;
  }
  header .header .header-right {
    flex-direction: column;
  }

  header .header .header-right .header-right-logo {
    width: 100%;
  }

  header .header .header-right .header-right-search-box {
    margin: 12px 0;
  }
  .navbar-toggler {
    position: absolute;
    left: 15px;
    top: -45px;
    /*padding: 0.15rem 0.75rem !important;*/
    /*padding-bottom: 0.4rem !important;*/
  }
  .hide-class {
    transform: translateY(0%);
    opacity: 0;
  }

  .navbar-toggler-icon,
  .navbar-toggler-icon:after,
  .navbar-toggler-icon:before {
    width: 18px;
  }
  .nav-item:after {
    display: none;
  }

  .header {
    padding-bottom: 0 !important;
  }

  nav {
    direction: rtl;
  }
  /*nav{
        position: absolute;
    top: 67px;
    }
    .navbar{
        width: 50%;   
        float: right;
    }*/
  /*.nav-item::before {
        position: absolute;
        display: block;
        top: 15px;
        left: 0;
        width: 11px;
        height: 1px;
        content: "";
        border: none;
        background-color: #000;
        vertical-align: 0;
    }*/

  #navbarSupportedContent {
    background: white;
  }

  .dropdown-toggle::after {
    position: absolute;
    display: block;
    top: 10px;
    left: -23px;
    width: 1px;
    height: 11px;
    content: "";
    border: none;
    background-color: #000;
    vertical-align: 0;
    transition: all 200ms linear;
  }

  .dropdown-toggle[aria-expanded="true"]::after {
    transform: rotate(90deg);
    opacity: 0;
  }

  .dropdown-menu {
    padding: 0 !important;
    background-color: transparent;
    box-shadow: none;
    transition: all 200ms linear;
  }

  .dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
    margin-top: 10px !important;
    margin-bottom: 20px !important;
  }
  /*header .header .header-left .header-left-basket {
        left: 0px;
        top: 60px;
    }*/

  header .header .header-left {
    position: absolute;
    top: 10px;
    left: 0;
  }

  header .header .header-left .header-left-user .header-left-user-link {
    padding: 1px 4px;
  }

  header .header .header-left .header-left-basket .card {
    clip-path: circle(16px at 18px 17px);
  }

  header .header .header-left .header-left-basket .card .card__infoicon {
    font-size: 1.3rem;
    top: 0px;
    left: 5px;
  }

  header
    .header
    .header-left
    .header-left-user
    .header-left-user-link
    .card__infoicon
    i {
    font-size: 1.7rem;
  }

  header
    .header
    .header-left
    .header-left-basket
    .header-left-basket-div
    .basket-number {
    width: 17px;
    height: 17px;
    top: 0px;
    left: 30px;
    font-size: 0.8rem;
  }

  header .header .header-right .header-right-logo img,
  header .header .header-right .header-right-search-box input,
  header .header .header-right .header-right-search-box .search-icon {
    height: 32px;
  }

  header .header .header-right .header-right-search-box .search-icon i {
    margin: 4px;
  }

  header .header .header-left .header-left-basket .card {
    min-width: 250px;
  }

  header
    .header
    .header-left
    .header-left-basket
    .card
    .card__title
    .card__description
    .card__description-title {
    font-size: 1rem;
  }

  header
    .header
    .header-left
    .header-left-basket
    .card
    .card__title
    .card__description
    .card__description-item
    .content-from-basket
    div:nth-child(2)
    p {
    font-size: 0.7rem;
  }

  .hide-class {
    transform: translateY(0%);
    opacity: 1;
  }
  header .menu-bar-items {
    flex-direction: column-reverse;
  }
}

@media (max-width: 768px) {
}
@media (min-width: 992px) {
  .navbar-expand-lg {
    padding: 2px !important;
  }
  .navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    direction: rtl;
  }
}
</style>