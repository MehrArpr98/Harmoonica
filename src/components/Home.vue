<template>
  <div class="content" id="content">
    <div class="content-part content-part-1">
      <div class="section-main-title">
        <span class="part-title">
          <a href="/category">دسته بندی</a>
        </span>
        <div class="line"></div>
      </div>
      <div class="content-part-1-images">
        <a href="/category?categoryId=1">
          <!--v-bind:href="/category"-->
          <div class="item-img item-img1 item-img1-address"></div>
          <div class="item-img1 img-item-text img-item1-text">بشقاب و پیش دستی</div>
        </a>
        <a href="/category?categoryId=2">
          <div class="item-img item-img2 item-img2-address"></div>
          <div class="item-img2 img-item-text img-item2-text">گلدان</div>
        </a>
        <a href="/category?categoryId=3">
          <div class="item-img item-img3 item-img3-address"></div>
          <div class="item-img3 img-item-text img-item3-text">ماگ و لیوان</div>
        </a>
        <a href="/category?categoryId=5">
          <div class="item-img item-img4 item-img4-address"></div>
          <div class="item-img4 img-item-text img-item4-text">کره خوری</div>
        </a>
        <a href="/category?categoryId=6">
          <div class="item-img item-img5 item-img5-address"></div>
          <div class="item-img5 img-item-text img-item5-text">کاسه</div>
        </a>
      </div>
    </div>

    <div class="content-part content-part-2">
      <div class="section-main-title">
        <span class="part-title">
          <a href="/category?categoryId='suggest'">تخفیف و پیشنهادها</a>
        </span>
        <div class="line"></div>
      </div>
      <div class="suggest" id="suggest">
        <Swiper :items="suggestItems" @basket="setBasket" />
      </div>
    </div>
    <div class="content-part content-part-3">
      <div id="about-img"></div>
      <div
        id="about-text"
      >فروشگاه اینترنتی هارمونیکا بهترین و بیشترین محصولات از برندهای اورجینال خارجی را در اختیار دارد. سوراو گلچینی از بهترین برند های دنیا را برای شما تامین کرده است. خرید از فروشگاه سوراو مانند خرید از آنلاین شاپ معتبر اروپایی است. با توجه به تنوع زیاد محصولات و برند ها، کارشناسان سوراو به شما مشاوره تخصصی رایگان می دهد. فروشگاه سوراو مرکز خرید محصولات اورجینال از برندهای متنوع با قیمت مناسب است. انتخاب بهترین محصول، مناسب پوست و موی شما از بین ۱۰۰ مارک مختلف بسیار مهم و سخت است.</div>
    </div>
    <div class="content-part content-part-4">
      <div class="section-main-title">
        <span class="part-title">
          <a href="/category?categoryId='bestSeller'">پرفروش ترین ها</a>
        </span>
        <div class="line"></div>
      </div>

      <div class="suggest" id="bestSeller">
        <Swiper :items="bestSellerItems" @basket="setBasket" />
      </div>
    </div>
  </div>
</template>


<script>
import { reactive, ref } from "vue";
import Swiper from "./Swiper.vue";


export default {
  components: [Swiper],
  setup() {
    
    const suggestItems = reactive([
      {
        name: "بشقاب ست دو عددی ماه و خورشید",
        id: 1,
        price: 100000,
        percent: 3,
        oldPrice: 1790000,
        rates: [5, 5, 2, 5],
        rate: 0,
        comments: ["بد بود", "راضی بودم", "خوب بود"],
        //{ text: "ضعیف", monthAndYearDate: "شهریور ۱۴۰۱ ", day:"۱۶", name:"علی علایی", desc:"بد بود"}
        imgSrc: "pic3.jpg"
      },
      {
        name: "بشقاب تک سفید و لاجوردی دور طلایی",
        id: 2,
        price: 200000,
        percent: 0,
        oldPrice: 1790000,
        rates: [4, 4, 5, 4, 5, 4],
        rate: 0,
        comments: ["راضی بودم", "خوب بود"],
        imgSrc: "pic12.jpg"
      },
      {
        name: " مینیمال طوسی",
        id: 3,
        price: 300000,
        percent: 3,
        oldPrice: 1790000,
        rates: [3, 4, 5, 2],
        rate: 0,
        comments: ["بد بود", "راضی بودم", "خوب بود", "راضی بودم", "خوب بود"],
        imgSrc: "pic23.jpg"
      },
      {
        name: " کره خوری گلدار مدل مادر بزرگ",
        id: 4,
        price: 400000,
        percent: 3,
        oldPrice: 1790000,
        rates: [1, 4, 3, 2],
        rate: 0,
        comments: ["بد بود", "راضی بودم", "راضی بودم", "خوب بود"],
        imgSrc: "pic24.jpg"
      },
      {
        name: "کاسه آبگوشت خوری دور گلدار",
        id: 5,
        price: 500000,
        percent: 3,
        oldPrice: 1790000,
        rates: [3, 4, 5, 2],
        rate: 0,
        comments: ["بد بود"],
        imgSrc: "pic13.jpg"
      },
      {
        name: "بشقاب ست دو عددی چشم و چشم ها",
        id: 6,
        price: 600000,
        percent: 3,
        oldPrice: 1790000,
        rates: [3, 4, 5, 2],
        rate: 0,
        comments: ["بد بود", "راضی بودم"],
        imgSrc: "pic10.jpg"
      }
    ]);

    const bestSellerItems = reactive([
      {
        name: "میز عسلی سه تکه رویا",
        id: 1,
        groupId: 3,
        price: 100000,
        percent: 3,
        oldPrice: 1790000,
        rates: [5, 5, 2, 5],
        rate: 0,
        comments: ["بد بود", "راضی بودم", "خوب بود"],
        //{ text: "ضعیف", monthAndYearDate: "شهریور ۱۴۰۱ ", day:"۱۶", name:"علی علایی", desc:"بد بود"}
        imgSrc: "pic20.jpg"
      },
      {
        name: "فنجان چای خوری رنگی مینیمال",
        id: 2,
        groupId: 5,
        price: 200000,
        percent: 3,
        oldPrice: 1790000,
        rates: [4, 4, 5, 4, 5, 4],
        rate: 0,
        comments: ["راضی بودم", "خوب بود"],
        imgSrc: "pic16.jpg"
      },
      {
        name: "ماگ زیبای طرح گل",
        id: 3,
        groupId: 1,
        price: 300000,
        percent: 3,
        oldPrice: 1790000,
        rates: [3, 4, 5, 2],
        rate: 0,
        comments: ["بد بود", "راضی بودم", "خوب بود", "راضی بودم", "خوب بود"],
        imgSrc: "pic17.jpg"
      },
      {
        name: "کاسه کوچک مدل برگ هاوایی",
        id: 4,
        groupId: 2,
        price: 400000,
        percent: 3,
        oldPrice: 1790000,
        rates: [1, 4, 3, 2],
        rate: 0,
        comments: ["بد بود", "راضی بودم", "راضی بودم", "خوب بود"],
        imgSrc: "pic9.jpg"
      },
      {
        name: "بشقاب مدل طرح گاو",
        id: 5,
        groupId: 3,
        price: 500000,
        percent: 3,
        oldPrice: 1790000,
        rates: [3, 4, 5, 2],
        rate: 0,
        comments: ["بد بود"],
        imgSrc: "pic11.jpg"
      },

      {
        name: "گلدان ظریف طرح ایران",
        id: 6,
        groupId: 2,
        price: 600000,
        percent: 3,
        oldPrice: 1790000,
        rates: [3, 4, 5, 2],
        rate: 0,
        comments: ["بد بود", "راضی بودم"],
        imgSrc: "pic25.jpg"
      }
    ]);

    const basket = ref([]);

    function setBasket(data) {
        basket.value = data;
        console.log('bas: ',basket)
    }
    return { suggestItems, bestSellerItems, setBasket ,basket };
  },
  components: { Swiper }
};
</script>

<style>
.content {
  padding-top: 70px;
  max-width: 1360px;
  margin: 0 auto;
}
.content .content-part {
  position: relative;
  width: 100%;
  margin: 6rem 0rem;
  height: max-content;
}

/*.content .content-part-1 {
        height: max-content;
        position: relative;
    }*/

.content .content-part-1 .content-part-1-images {
  width: 100%;
  height: 450px;
  position: relative;
  margin-top: 34px;
}

.content .content-part-1 .content-part-1-images a .item-img:hover {
  transform: scale(1.05);
  filter: contrast(120%);
}

.content .content-part-1 .content-part-1-images a .item-img {
  transition: 0.35s ease-in-out;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.content .content-part-1 .content-part-1-images a .item-img1 {
  position: absolute;
  top: 0%;
  left: 2%;
  width: 41%;
  height: 96%;
  animation: fade-in-left 0.5s ease-in-out;
}

.content .content-part-1 .content-part-1-images a .item-img2 {
  position: absolute;
  top: 0px;
  left: 48%;
  width: 28%;
  height: 42%;
  animation: fade-in-up 0.5s ease-in-out;
}

.content .content-part-1 .content-part-1-images a .item-img3 {
  position: absolute;
  top: 57%;
  left: 48%;
  width: 20%;
  height: 39%;
  animation: fade-in-down 0.5s ease-in-out;
}

.content .content-part-1 .content-part-1-images a .item-img4 {
  position: absolute;
  top: 51%;
  left: 73%;
  width: 25%;
  height: 45%;
  animation: fade-in-down 0.5s ease-in-out;
}

.content .content-part-1 .content-part-1-images a .item-img5 {
  position: absolute;
  top: 0%;
  left: 81%;
  width: 17%;
  height: 36%;
  animation: fade-in-right 0.5s ease-in-out;
}

.content .content-part-1 .content-part-1-images a .item-img6 {
  position: absolute;
  top: 0%;
  left: 60%;
  width: 15%;
  height: 36%;
  animation: fade-in-up 0.5s ease-in-out;
}

.content .content-part-1 .content-part-1-images a .item-img1-address {
  background-image: url("../assets/pic11.jpg");
}

.content .content-part-1 .content-part-1-images a .item-img2-address {
  background-image: url("../assets/pic14.jpg");
}

.content .content-part-1 .content-part-1-images a .item-img3-address {
  background-image: url("../assets/pic18.jpg");
}

.content .content-part-1 .content-part-1-images a .item-img4-address {
  background-image: url("../assets/pic23.jpg");
}

.content .content-part-1 .content-part-1-images a .item-img5-address {
  background-image: url("../assets/pic13.jpg");
}

.content .content-part-1 .content-part-1-images a .item-img6-address {
  background-image: url("../assets/pic13.jpg");
}

.content .content-part-1 .content-part-1-images a .img-item-text {
  text-align: center;
  font-size: 1.3rem;
  height: max-content;
  color: black;
  text-shadow: 1px 1px #d7b184;
}

.content .content-part-1 .content-part-1-images a .img-item1-text {
  top: 97%;
}

.content .content-part-1 .content-part-1-images a .img-item2-text {
  top: 42%;
}

.content .content-part-1 .content-part-1-images a .img-item3-text {
  top: 97%;
}

.content .content-part-1 .content-part-1-images a .img-item4-text {
  top: 97%;
}

.content .content-part-1 .content-part-1-images a .img-item5-text {
  top: 35%;
}

.content .content-part-1 .content-part-1-images a .img-item6-text {
  top: 36%;
}

/*.content .content-part-2 {
        position: relative;
        width: 100%;
        margin-top: 3rem;
    }*/

.suggest {
  width: 100%;
  /*height: 470px;*/
  position: relative;
  padding: 0 15px;
}
#bestSeller.suggest {
  height: auto;
}

.suggest .suggest-gallery {
  display: flex;
  overflow-x: scroll;
  width: 100%;
  border-radius: 0.5rem;
  background: var(--base-gray);
  height: 100%;
  margin: 30px 0;
}

.suggest .suggest-gallery::-webkit-scrollbar {
  height: 6px;
}

header
  .header
  .header-left
  .header-left-basket
  .card
  .card__title
  .card__description
  .card__description-item
  .card__description-item-img {
  background: #f7f1ea;
  height: 250px;
  border-radius: var(--border-radius-size);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.35s ease-in-out;
}

.suggest .suggest-gallery-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-100%);
  height: 30px;
  width: 30px;
  border-radius: var(--border-radius-size);
  background-color: var(--cream);
  background-position: 50% 50%;
  background-repeat: no-repeat;
  z-index: 1;
}

.suggest .btn.next {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg width="18" height="18" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><title>Shape</title><path d="M25.557 14.7L13.818 2.961 16.8 0l16.8 16.8-16.8 16.8-2.961-2.961L25.557 18.9H0v-4.2z" fill="%23FFF" fill-rule="evenodd"/></svg>');
  right: 10px;
  cursor: pointer;
}

.suggest .btn.prev {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg width="18" height="18" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><title>Shape</title><path d="M33.6 14.7H8.043L19.782 2.961 16.8 0 0 16.8l16.8 16.8 2.961-2.961L8.043 18.9H33.6z" fill="%23FFF" fill-rule="evenodd"/></svg>');
  left: 10px;
  cursor: pointer;
}
.section-main-title {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 0 15px;
}
.section-main-title .part-title {
  font-size: 1.3rem;
  text-align: right;
  position: absolute;
  background: var(--base-gray);
  padding-left: 10px;
}
.section-main-title .part-title a {
  color: black;
  transition: 0.35s ease-in-out;
}

.section-main-title .part-title a:hover {
  text-decoration: none;
  color: #a7927e;
}

.section-main-title .line {
  border-bottom: 2px solid var(--base-blue);
  height: 2px;
  width: 100%;
}

/*.hor-hr {
    width: calc(100% - 154px);
    height: 2px;
    background-color: var(--light-cream);
    border: none;
    position: absolute;
    top: -5px;
    left: 25px;
}*/

.hide-class {
  transform: translateY(-50%);
  opacity: 0;
}

.show-class {
  transform: translateY(0%);
}

section {
  min-height: 200px;
}

/*.hr-suggest {
    width: calc(100% - 232px);
}
.hr-bestSeller {
    width: calc(100% - 207px);
}*/
.d-none {
  display: none;
}

.container {
  margin: 2rem;
  position: relative;
}
.show-product-fast,
.plus-basket-fast {
  position: absolute;
  right: -20px;
  top: -20px;
  opacity: 0;
  z-index: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 5pt 2pt #d3d3d3;
  background: white;
  transition: top 0.15s ease-in-out, right 0.5s ease-in-out,
    background-color 0.35s ease-in-out;
}

.plus-basket-fast {
  display: flex;
  transition: top 0.5s ease-in-out, right 0.15s ease-in-out,
    background-color 0.35s ease-in-out;
  color: #4d5e5a;
}

.show-product-fast i {
  font-size: 1.5rem;
  margin: 8px;
}

.plus-basket-fast i {
  font-size: 1.4rem;
  margin: 8px 0;
}

.plus-basket-fast span {
  padding: 10px 0 0;
}

.fancybox-item {
  display: none;
}

.fancybox-item .fancybox-item-img {
  height: 275px;
  background-size: cover;
  background-position: center;
}

.fancybox-item .fancybox-item-detailes {
  text-align: right;
}

.fancybox-item .fancybox-item-detailes .fancybox-item-name {
  font-size: 1.4rem;
}

.fancybox-item .fancybox-item-detailes .fancybox-item-price-now {
  display: flex;
  flex-direction: row;
  float: right;
}

.fancybox-item
  .fancybox-item-detailes
  .fancybox-item-price-now
  span:nth-child(2) {
  margin-left: 7px;
}

.fancybox-item .fancybox-item-detailes .fancybox-item-price-before {
  text-decoration: line-through;
  color: gray !important;
}

.fancybox-item .fancybox-item-detailes .fancybox-item-price-after {
}

.fancybox-item
  .fancybox-item-detailes
  .fancybox-item-price-after
  span:nth-child(2) {
  font-weight: 900;
  text-shadow: 0 0 black;
}

.fancybox-basket-button {
  color: white;
  padding: 10px calc(50% - 78px);
  background-color: #4d5e5a;
  cursor: pointer;
  border-radius: var(--border-radius-size);
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
}

.fancybox-basket-button:hover {
  text-decoration: none;
  color: white;
}

.fancybox-item-plus-basket {
  font-size: 0.9em;
  padding: 5px;
  background: var(--pastel-green);
  border-radius: var(--border-radius-size);
  color: #4d5e5a;
  transition: 0.35s ease-in-out;
  font-weight: 600;
  cursor: pointer;
  width: 50%;
  min-width: 200px;
  text-align: center;
  /*margin: 0 auto;*/
  padding: 10px;
}

.content-part-3 {
  margin-top: 3rem;
  position: relative;
  direction: rtl;
  padding: 0 15px;
}

.content-part-3 #about-img {
  background-image: url("../assets/consuleCover.jpg");
  opacity: 0.7;
  width: 100%;
  min-height: 400px;
  background-position: center;
  background-size: cover;
}

.content-part-3 #about-text {
  position: absolute;
  top: 15px;
  width: calc(30% - 15px);
  text-align: right;
  padding: 0 15px;
  text-align: justify;
}
@media only screen and (min-width: 1260px) {
}

@media only screen and (max-width: 1260px) {
}

@media only screen and (max-width: 992px) {
}

@keyframes percent-fade {
  0% {
    transform: scale(1);
    opacity: 0;
  }

  100% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes background-fade {
  0% {
    background: #e0bd93;
  }

  100% {
    background: white;
  }
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(10%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
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

@media screen and (max-width: 1200px) {
  .content .content-part-1 .content-part-1-images {
    height: 350px;
  }
  .content .content-part-1 {
    height: 418px;
  }
}

@media screen and (max-width: 992px) {
  .content {
    padding-top: 100px;
  }
  .content .content-part-1 .content-part-1-images {
    height: 600px;
  }

  .content .content-part-1 {
    height: max-content;
  }

  .content .content-part-1 .content-part-1-images a .item-img1 {
    width: 55%;
    height: 50%;
  }
  .content .content-part-1 .content-part-1-images a .item-img2 {
    top: 58%;
    left: 2%;
    width: 50%;
    height: 40%;
  }
  .content .content-part-1 .content-part-1-images a .item-img4 {
    top: 67%;
    left: 58%;
    width: 39%;
    height: 31%;
  }
  .content .content-part-1 .content-part-1-images a .item-img5 {
    top: 0%;
    left: 63%;
    width: 34%;
    height: 26%;
  }
  .content .content-part-1 .content-part-1-images a .item-img3 {
    top: 34%;
    left: 63%;
    width: 34%;
    height: 26%;
  }
  .content .content-part-1 .content-part-1-images a .img-item1-text {
    height: 0;
    top: 50%;
  }

  .content .content-part-1 .content-part-1-images a .img-item2-text {
    height: 0;
    top: 98%;
  }

  .content .content-part-1 .content-part-1-images a .img-item3-text {
    top: 60%;
    height: 0;
  }

  .content .content-part-1 .content-part-1-images a .img-item4-text {
    top: 98%;
    height: 0;
  }

  .content .content-part-1 .content-part-1-images a .img-item5-text {
    top: 26%;
    height: 0;
  }

  .content .content-part-1 .content-part-1-images a .img-item6-text {
    top: 36%;
    height: 0;
  }
  .content-part-3 #about-img {
    min-height: 300px;
  }

  .content-part-3 #about-text {
    position: absolute;
    width: calc(50% - 15px);
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 768px) {
  /*.content {
        padding-top: 150px;
    }*/
  .content .content-part {
    margin: 3rem 0rem;
  }

  .content .content-part-1 .content-part-1-images {
    height: 400px;
  }
  .content .content-part-1 .content-part-1-images a .img-item-text {
    font-size: 0.7rem;
  }

  .content-part-3 #about-img {
    min-height: 300px;
  }
  .content-part-3 #about-text {
    font-size: 0.8rem;
    width: calc(100% - 40px);
    padding: 0 20px;
  }

  .section-main-title .part-title {
    font-size: 1rem;
  }
}
</style>