<template>
  <div class="suggest-gallery" id="suggest-gallery">
    <div class="card" v-for="(item,index) in items" :key="index">
      <router-link :to="{name: 'product', params:{id:item.id}}">
        <!-- <a v-bind:href="'/product?id=' + item.id"> -->
        <div v-if="item.percent > 0" class="card__description-percent">
          -
          <span>{{ item.percent }}</span>%
        </div>

        <div
          class="img"
          v-bind:style="{ backgroundImage: 'url(' + require('../assets/'+item.imgSrc) + ')  !important'}"
        ></div>

        <!-- <div class="img" style="{backgroundImage: url('../assets/pic24.jpg');}"></div> -->

        <div class="text">
          <div class="card__title">{{ item.name }}</div>
          <div class="itemId" style="display:none">{{ item.id }}</div>
          <div class="card__description">
            <div class="card__description-price">
              <div
                v-bind:style="{ visibility: [item.percent > 0 ? 'visible' : 'hidden'] }"
                class="card__description-price-now card__description-price-before"
              >
                <span>تومان</span>
                <span>{{ toFarsiAndComma(item.oldPrice) }}</span>
              </div>
              <div class="card__description-price-now card__description-price-after">
                <span>تومان</span>
                <span>{{ toFarsiAndComma(item.price) }}</span>
              </div>
            </div>
          </div>
          <div class="card__detailes">
            <!-- <div class="card__rate-and-comments">
              <div class="suggest-card__rate">
                <i class="fa fa-star" aria-hidden="true"></i>
                <span>{{ toFarsiAndComma(calculateRate(item.rates)) }}</span>
              </div>
              <div class="suggest-card__comments">
                <i class="fa fa-comment" aria-hidden="true"></i>
                <span>{{ toFarsiAndComma(item.comments.length) }}</span>
              </div>
            </div>-->
            <div class="card__plus-basket" name="plus-basket" @click="addBasket($event,item.id)">
              <span>افزودن به سبد خرید</span>
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div
          class="show-product-fast"
          data-fancybox
          :data-src="'#fancybox'+item.id"
          href="javascript:;"
        >
          <i class="fa fa-eye"></i>
        </div>

        <div>
          <div class="plus-basket-fast" name="plus-basket">
            <span>+</span>
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
          </div>
        </div>
        <!-- </a> -->
      </router-link>
      <div :id="'fancybox'+item.id" class="fancybox-item">
        <div class="row d-flex flex-row-reverse mb-5">
          <div class="col-5 col-lg-5 col-md-5 col-sm-12">
            <div
              class="fancybox-item-img"
              v-bind:style="{ backgroundImage: 'url(' + item.imgSrc + ')' }"
            ></div>
          </div>
          <div class="col-5 col-lg-7 col-md-7 col-sm-12 fancybox-item-detailes">
            <p class="fancybox-item-name">{{ item.name }}</p>
            <div
              v-bind:style="{ visibility: [item.percent > 0 ? 'visible' : 'hidden'] }"
              class="fancybox-item-price-now fancybox-item-price-before"
            >
              <span>تومان</span>
              <span>{{ toFarsiAndComma(item.oldPrice) }}</span>
            </div>
            <br />
            <div class="fancybox-item-price-now fancybox-item-price-after">
              <span>تومان</span>
              <span>{{ toFarsiAndComma(item.price) }}</span>
            </div>
            <br />
            <div class="itemId" style="display:none">{{ item.id }}</div>

            <p>
              <i class="fa fa-check" aria-hidden="true"></i> موجود در انبار
            </p>
            <div class="fancybox-item-plus-basket" name="plus-basket">
              <span>افزودن به سبد خرید</span>
              <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <a
          href="/cart"
          class="fancybox-basket-button"
          id="fancybox-basket-button1"
        >مشاهده سبد خرید و پرداخت</a>
      </div>
    </div>
    <span class="btn suggest-gallery-btn prev"></span>
    <span class="btn suggest-gallery-btn next"></span>
  </div>
</template>

<script>
import { inject, reactive } from "vue";
import $ from "../libs/jquery/dist/jquery.min.js";

export default {
  props: {
    items: Array
  },
  setup(params) {
    const basket = reactive([]);
    const emitter = inject("emitter");

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
    function calculateRate(arr) {
      return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    /* function dontCallLink(event) {
        event.preventDefault()
    } */

    function searchToAdd(i) {
      for (var j = 0; j < params.items.length; j++) {
        if (i == params.items[j].id) {
          basket.push(params.items[j]);
        }
      }
    }

    function addBasket(e, id) {
      e.preventDefault();

      var basketNumber = $(".basket-number").text();
      basketNumber = parseInt(basketNumber);
      if (basketNumber == 0) {
        $(".card__description p:last-child").addClass("d-none");
        $(".basket-price-part").removeClass("d-none");
        $(".basket-button").removeClass("d-none");
      }
      basketNumber = basketNumber + 1;
      $(".basket-number").text(basketNumber);
      searchToAdd(id);

      emitter.emit("basket", basket);
    }

    return { toFarsiAndComma, calculateRate, addBasket };
  }
};
</script>

<style>
.card {
  flex: 0 0 270px;
  padding: 10px;
  border-radius: 0.5rem;
  margin: 10px;
  opacity: 1;
  transition: opacity 250ms linear;
  cursor: pointer;
  box-shadow: 0 0 5pt 2pt #f7f1ea;
  border: none;
  text-decoration: none;
}
.card:last-child {
  margin-right: 0;
}

.card:first-child {
  margin-left: 0;
}

.card:hover {
  box-shadow: 0 0 5pt 2pt var(--light-gray);
}

.card a:hover {
  text-decoration: none !important;
}

.card:hover .img {
  transform: scale(1.05);
}

.card .img {
  background: #f7f1ea;
  height: 250px;
  border-radius: var(--border-radius-size);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.35s ease-in-out;
}

.card .card__description-percent {
  width: 35px;
  height: 35px;
  background: #f52828;
  border-radius: 0 50% 50%;
  color: white;
  text-align: center;
  padding: 7px 0;
  transition: 0.35s ease-in-out;
  position: absolute;
  z-index: 10;
}

.card .text .card__title {
  text-align: right;
  direction: rtl;
  margin: 8px 0 12px;
  font-size: 0.8rem;
  color: black;
  min-height: 34px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1rem;
}

.card .text .card__description {
  display: flex;
  justify-content: space-between;
}

.card .text .card__description .card__description-price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.card
  .text
  .card__description
  .card__description-price
  .card__description-price-now {
  display: flex;
  color: black;
}

.card
  .text
  .card__description
  .card__description-price
  .card__description-price-now
  span:nth-child(1) {
  float: left;
  margin-right: 4px;
  font-weight: 600;
}

.card
  .text
  .card__description
  .card__description-price
  .card__description-price-before {
  color: gray !important;
  display: flex;
}

.card
  .text
  .card__description
  .card__description-price
  .card__description-price-before
  span {
  text-decoration: line-through;
  font-size: 0.8rem;
  text-decoration-color: gray;
}

.card
  .text
  .card__description
  .card__description-price
  .card__description-price-after
  span {
  font-size: 1.4rem;
}

.card
  .text
  .card__description
  .card__description-price
  .card__description-price-after
  span:nth-child(1) {
  font-weight: 900;
  font-size: 0.8rem;
}

.card
  .text
  .card__description
  .card__description-price
  .card__description-price-after
  span:nth-child(2) {
  font-weight: 900;
  text-shadow: 0 0 black;
  line-height: 12px;
}

.card .text .card__detailes {
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
}

.card .text .card__detailes .card__plus-basket {
  font-size: 1rem;
  padding: 2px 4px;
  background: var(--lighter-base-blue);
  border-radius: var(--border-radius-size);
  color: #4d5e5a;
  transition: 0.35s ease-in-out;
  /* */
  width: 100%;
  text-align: center;
  padding: 6px;
}
.card:hover .text .card__detailes .card__plus-basket {
  background: var(--base-blue);
  color: white;
  border-radius: 0;
}

.card .text .card__detailes .card__plus-basket span {
  margin: 0 -5px 0 0;
  /**/
  font-size: 0.75rem;
  margin: 0;
}

.card .text .card__detailes .card__rate-and-comments {
  color: black;
  display: flex;
}
.card .text .card__detailes .card__rate-and-comments .suggest-card__rate {
  margin-right: 10px;
}

.card .text .card__detailes .card__rate-and-comments .suggest-card__rate i,
.card .text .card__detailes .card__rate-and-comments .suggest-card__comments i {
  color: #e9a549;
  font-size: 1rem;
  margin-right: 0px;
}

.card .text .card__detailes .card__rate-and-comments .suggest-card__comments i {
  color: #78b99e;
  margin-right: -4px;
}

.card .card__description-percent {
  width: 35px;
  height: 35px;
  background: var(--red);
  border-radius: 0 50% 50%;
  color: white;
  text-align: center;
  padding: 7px 0;
  transition: 0.35s ease-in-out;
  /*animation: percent-fade 2s infinite;*/
  position: absolute;
  z-index: 10;
}

.card:hover .show-product-fast {
  right: 20px !important;
  top: 65px !important;
  opacity: 1 !important;
}

.card:hover .plus-basket-fast {
  right: 20px !important;
  top: 20px !important;
  opacity: 1 !important;
}

.card .plus-basket-fast:hover {
  background: #e6ebea !important;
}

.card .show-product-fast:hover {
  background: #dae2eb !important;
}

@media screen and (max-width: 992px) {
  .card {
    flex: 0 0 200px;
  }

  .card .img {
    height: 180px;
  }
}
@media screen and (max-width: 768px) {
  .card {
    flex: 0 0 130px;
    margin: 5px;
    border-radius: var(--smaller-border-radius-size);
  }
  .card .img {
    height: 110px;
    border-radius: var(--smaller-border-radius-size);
  }
  .card .text .card__title {
    margin: 4px 0 6px;
    font-size: 0.6rem;
    min-height: 26px;
    line-height: 0.8rem;
  }
  .card .card__description-percent {
    width: 25px;
    height: 25px;
    font-size: 0.7rem;
    padding-top: 5px;
  }

  .card
    .text
    .card__description
    .card__description-price
    .card__description-price-after
    span {
    font-size: 1rem;
  }
  .card
    .text
    .card__description
    .card__description-price
    .card__description-price-before
    span,
  .card
    .text
    .card__description
    .card__description-price
    .card__description-price-after
    span:nth-child(1) {
    font-size: 0.6rem;
  }

  .card .text .card__detailes {
    margin-top: 0.6rem;
  }
  .card .text .card__detailes .card__plus-basket {
    font-size: 0.5rem;
    padding: 6px;
    border-radius: var(--smaller-border-radius-size);
    background: var(--base-blue);
    color: white;
  }
  .card .text .card__detailes .card__plus-basket span {
    font-size: 0.55rem;
  }

  /*.card .text .card__description .card__description-percent {
        width: 28px;
        height: 28px;      
        padding: 6px 0;
        font-size: .8rem;
    }*/
}
@media screen and (max-width: 576px) {
}
</style>