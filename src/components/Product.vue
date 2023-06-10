<template>
    <div class="content" id="content">
      <div class="main-item-description row content-part">
        <div class="col-5 col-lg-5 col-md-5 col-sm-12 product-images-div">
          <div class="main-img-div">
            <figure
              class="zoom"
              
              style="background-image: url('images/lunchTable.jpg')"
            >
            <!-- onmousemove="zoom(event)" -->
              <img id="product-img" src="images/lunchTable.jpg" />
            </figure>
          </div>
          <div class="more-images">
            <div class="other-image" style="background-image: url('images/lunchTable3.jpg')"></div>
            <div class="other-image" style="background-image: url('images/lunchTable.jpg')"></div>
            <div class="other-image" style="background-image: url('images/lunchTable3.jpg')"></div>
            <div class="other-image more" style="background-image: url('images/lunchTable3.jpg')">
              <a data-fancybox data-src="#hidden-content-1" href="javascript:;" class="btn">
                <i class="fa fa-ellipsis-h"></i>
              </a>
            </div>
  
            <div style="display: none;" id="hidden-content-1">
              <div class="fancy-gallery mb-5">
                <div class="row">
                  <a href="images/lunchTable.jpg" class="mb-4 img-fluid" data-fancybox="images">
                    <img class="gallery-image rounded" src="images/lunchTable.jpg" alt />
                  </a>
                  <a href="images/lunchTable.jpg" class="mb-4 img-fluid" data-fancybox="images">
                    <img class="gallery-image rounded" src="images/lunchTable.jpg" alt />
                  </a>
                  <a href="images/lunchTable.jpg" class="mb-4 img-fluid" data-fancybox="images">
                    <img class="gallery-image rounded" src="images/lunchTable.jpg" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 col-lg-7 col-md-7 col-sm-12 item-detailes">
          <p class="item-name">میز ناهارخوری 8 نفره جانان</p>
          <div class="itemId" style="display:none"></div>
          <div class="item-rate">
            <i class="fa fa-star" aria-hidden="true"></i> امتیاز :
            <span>5</span>
          </div>
          <a class="item-comment" onclick="goTo('comments')">
            <i class="fa fa-comment" aria-hidden="true"></i> نظرات :
            <span>19</span>
          </a>
  
          <div class="item-color">
            <i
              class="fas fa-palette"
              style="font-size:1.3rem;margin-left: 5px;
  background: linear-gradient(to bottom right, #ebcf8d 10%, #84b5b0 10%, #c7574e 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;"
            ></i>
  
            <span>رنگ :</span>
            <div class="colors">
              <div class="color" style="background:#e3ab89; "></div>
              <div class="color" style="background:#b27c50; "></div>
              <div class="color" style="background:#7f5244; "></div>
            </div>
          </div>
          <div class="item-size">
            <span>سایز :</span>
            <div class="sizes">
              <div class="size not-exist">s</div>
              <div class="size">m</div>
              <div class="size">l</div>
              <div class="size not-exist">xl</div>
              <div class="size">xxl</div>
            </div>
          </div>
          <div
            class="item-price item-price-before"
            style="width: max-content; margin-top:20px; text-decoration: line-through #a79e9a;   color: #a79e9a;"
          >
            <span style="float:left; text-decoration: line-through; padding: 0 3px;">تومان</span>
            <span>{{ toFarsiAndComma(168000) }}</span>
          </div>
  
          <div class="item-price item-price-after" style="width: max-content;">
            <span style="float:left; line-height: 40px;    padding: 0 3px;">تومان</span>
            <span style="font-size:1.5rem; font-weight:bold;">{{ toFarsiAndComma(124000) }}</span>
          </div>
  
          <div id="number-item-plus-basket" class="d-flex cart-item-count-div">
            <span class="add">+</span>
            <span class="number">0</span>
            <span class="minus">-</span>
          </div>
          <div id="plus-basket" class="suggest-card__plus-basket" name="plus-basket">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            <span>افزودن به سبد خرید</span>
          </div>
        </div>
      </div>
      <!--  @*<div class="col-2 col-lg-2 col-md-12 col-sm-12 benefits-items">
              <div class="benefits-item benefits-item1">
                  <p>سه روز ضمانت بازگشت کالا</p>
                  <img src="images/3days.png" class="img-fluid">
              </div>
              <div class="benefits-item benefits-item2">
                  <p>پشتیبانی 24 ساعته</p>
                  <img src="images/headphon.png" class="img-fluid">
              </div>
              <div class="benefits-item benefits-item3">
                  <p>امکان ارسال فوری</p>
                  <img src="images/truck.png" class="img-fluid">
              </div>
              <div class="benefits-item benefits-item4">
                  <p>پرداخت درب منزل</p>
                  <img src="images/pay.png" class="img-fluid">
              </div>
          </div>*@
      -->
      <div id="comments" class="row" style="width: 100%; min-height: 1000px;">
        <div class="col-lg-3 item-summary-part">
          <div class="item-summary">
            <div class="card">
              <a href="/">
                <!-- @*<div v-if="item.percent > 0" class="card__description-percent">*@
                @*-<span>{{ item.percent }}</span>%*@-->
                <div class="card__description-percent">
                  -
                  <span>3</span>%
                </div>
  
                <div class="img" style="background: url('~/images/consule2.jpg')"></div>
  
                <div class="text">
                  <div class="card__title">item name</div>
                  <!--   @*<div class="itemId" style="display:none"> {{ item.id }}</div>*@ -->
                  <div class="itemId" style="display:none">1</div>
                  <div class="card__description">
                    <div class="card__description-price">
                      <div
                        style="visibility: visible"
                        class="card__description-price-now card__description-price-before"
                      >
                        <span>تومان</span>
                        <!-- @*<span>{{ toFarsiAndComma(item.oldPrice) }}</span>*@ -->
                        <span>310000</span>
                      </div>
                      <div class="card__description-price-now card__description-price-after">
                        <span>تومان</span>
                        <!-- @*<span>{{ toFarsiAndComma(item.price) }}</span>*@ -->
                        <span>300000</span>
                      </div>
                    </div>
                  </div>
                  <div class="card__detailes">
                    <!--  @*<div class="card__rate-and-comments">
                                          <div class="suggest-card__rate">
                                              <i class="fa fa-star" aria-hidden="true"></i><span>{{ toFarsiAndComma(calculateRate(item.rates)) }}</span>
                                          </div>
                                          <div class="suggest-card__comments">
                                              <i class="fa fa-comment" aria-hidden="true"></i>
                                              <span>{{ toFarsiAndComma(item.comments.length) }}</span>
                                          </div>
                    </div>*@-->
                    <div
                      onclick="dontCallLink(event); success()"
                      class="card__plus-basket"
                      name="plus-basket"
                    >
                      <span>افزودن به سبد خرید</span>
                      <!-- @*<span>+</span>*@ -->
                      <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-9 comments-part-part">
          <div style="position: relative;min-height: 1000px;">
            <div class="section-main-title">
              <span class="part-title">
                <a href="/">نظرات</a>
              </span>
              <div class="line"></div>
            </div>
            <div class="comments-part">
              <input type="hidden" id="current_page" />
              <input type="hidden" id="show_per_page" />
              <ul id="pagingBox">
                <li v-for="(item,index) in items" :key="index">
                  <div class="comment-item">
                    <div class="comment-item-title">
                      <div class="comment-item-title-main">{{ item.name }}</div>
  
                      <div class="comment-item-title-user">
                        <p id="yearAndMonth" style="display:inline-block">شهریور ۱۴۰۱</p>
                        <span id="day">۱۶</span>
                        <span class="name">علی علایی</span>
                        <!--<span id="clock" style="margin-left: 20px;"></span>
                          <br />
                        <button id="btn" onclick="date()">r</button>-->
                      </div>
                    </div>
                    <div class="comment-item-description">
                      <div
                        class="description-text"
                      >برای انتقال جریان بالای نیم آمپر (500 میلی آمپر) مناسب نیست. بدرد اتصال و شارژ تبلتها نمیخوره</div>
                      <div class="description-detailes">
                        <div class="positive-point">
                          <ul>
                            <li>سیم بلند</li>
                            <li>قیمت مناسب</li>
                            <li>طراحی کاربردی و زیبا</li>
                            <li>سیم بلند</li>
                          </ul>
                        </div>
                        <div class="negative-point">
                          <ul>
                            <li>سیم کوتاه</li>
                          </ul>
                        </div>
                        <div class="like-and-dislike">
                          <div class="like">
                            <span>0</span>
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                          </div>
                          <div class="dislike">
                            <span>0</span>
                            <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </li>
              </ul>
              <div id="page_navigation"></div>@*@Html.Partial("_Pagination", items)*@
            </div>
          </div>
  
          <div style="position: relative;">
            <div class="section-main-title">
              <span class="part-title">
                <a href>درباره محصول</a>
              </span>
              <div class="line"></div>
            </div>
            <div class="comments-part">
              <div class="tabbed-bar">
                <div class="tabbed tabbed-effect-scale tabbed-theme-1">
                  <input type="radio" name="tabbed" checked id="tab1" class="tab-content-first" />
                  <label for="tab1">
                    <i class="icon-bolt"></i>مشخصات کالا
                  </label>
  
                  <input type="radio" name="tabbed" id="tab3" class="tab-content-3" />
                  <label for="tab3" class="tab3">
                    <i class="icon-cogs"></i>نقد و کارشناسی کالا
                  </label>
  
                  <ul>
                    <li class="tab-content tab-content-first typography">
                      <h1>مشخصات کالا</h1>
                    </li>
  
                    <li class="tab-content tab-content-3 typography">
                      <h1>نقد و کارشناسی کالا</h1>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2 col-md-3 comments-detailes-part">
          <div class="comments-detailes">
            <div id="average-rating"></div>
            <div class="text">
              <span>3</span> امتیاز
              <br />از مجموع
              <span>30</span> نظر
            </div>
            <hr />
            <div class="bars">
              <!--  @*ارزش به نسبت قیمت
                          <div class="my-progress-bar">
                              <div class="my-progress-bar-fill"></div>
              </div>*@-->
              طراحی و زیبایی ظاهری
              <div class="my-progress-bar">
                <div class="my-progress-bar-fill"></div>
              </div>کیفیت ساخت
              <div class="my-progress-bar">
                <div class="my-progress-bar-fill"></div>
              </div>کارایی و عملکرد
              <div class="my-progress-bar">
                <div class="my-progress-bar-fill"></div>
              </div>
            </div>
            <hr />
            <p class="new-comment-title">شما نیز نظر خود را ثبت کنید</p>
            <div
              class="new-comment-link"
              data-fancybox
              data-src="#new-comment"
              href="javascript:;"
            >ثبت نظر</div>
            <div id="new-comment">
              <h3 id="new-comment-title">نظر شما</h3>
  
              <div id="new-comment-desc">
                <div class="comment-title-part">
                  <div class="comment-title-text-div">
                    <p>عنوان نظر :</p>
                    <h4 class="comment-title"></h4>
                  </div>
                  <div class="comment-title-star-div">
                    <p class="product-review-stars">
                      <input type="radio" id="star5" name="rating" value="5" class="visuallyhidden" />
                      <label for="star5">★</label>
                      <input type="radio" id="star4" name="rating" value="4" class="visuallyhidden" />
                      <label for="star4">★</label>
                      <input type="radio" id="star3" name="rating" value="3" class="visuallyhidden" />
                      <label for="star3">★</label>
                      <input type="radio" id="star2" name="rating" value="2" class="visuallyhidden" />
                      <label for="star2">★</label>
                      <input type="radio" id="star1" name="rating" value="1" class="visuallyhidden" />
                      <label for="star1">★</label>
                    </p>
                  </div>
                </div>
  
                <p>متن نظر :</p>
                <textarea class="comment-desc"></textarea>
  
                <div class="comment-optional">
                  <div class="comment-optional-item">
                    <p>نکات مثبت :</p>
                    <input type="text" class="plus-good-point" />
                    <button class="plus-good-point-button">+</button>
                    <div id="plus-good-point-part">
                      <p class="warn">متن وارد شده باید حداقل ۳ کاراکتر باشد</p>
                    </div>
                  </div>
                  <div class="comment-optional-item">
                    <p>نکات منفی :</p>
                    <input type="text" class="plus-bad-point" />
                    <button class="plus-bad-point-button">+</button>
                    <div id="plus-bad-point-part">
                      <p class="warn">متن وارد شده باید حداقل ۳ کاراکتر باشد</p>
                    </div>
                  </div>
                </div>
  
                <div class="submit-div">
                  <a class="submit-comment">ثبت نظر شما</a>
                  <p class="submit-comment-warn"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="content-part content-part-2">
        <div class="section-main-title">
          <span class="part-title">
            <a href="/category?categoryId='simillar'">محصولات مشابه</a>
          </span>
          <div class="line"></div>
        </div>
        <div class="suggest" id="suggest">
          <Swiper :items="items" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import Swiper from './Swiper.vue';
  import { reactive } from 'vue';
  export default {
    components: [Swiper],
    setup() {
      const items = reactive([
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
      return { items ,toFarsiAndComma};
    },
    components: { Swiper }
  };
  </script>
  
  <style>
  body {
      font-family: var(--font-family) !important
  }
  
  /*.content {
      padding: 140px 0;
      max-width: 1360px;
      margin: 0 auto !important;
  }*/
  .content .content-part {
    position: relative;
    width: 100%;
    margin: 6rem 0rem !important;
    height: max-content;
  }
  .main-item-description {
      display:flex;
      flex-direction: row-reverse;
  }
  
  figure.zoom {
      background-position: 50% 50%;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      cursor: zoom-in;
  }
      
      figure.zoom img {
          transition: opacity .5s;
          display: block;
          width: 100%;
          height: 100%;
      }
  
          figure.zoom img:hover {
              opacity: 0;
          }
  
      .row {
          margin: 0;
      }
  
  .benefits-items {
      padding: 10px;
      border-right: 5px solid #e3be9a;
      height: max-content;
  }
  
      .benefits-items .benefits-item {
          display: flex;
          align-items: center;
          float: right;
          padding: 0 0 10px;
      }
  
          .benefits-items .benefits-item:last-child {
              padding: 0;
          }
  
          .benefits-items .benefits-item p {
              margin: 0 5px;
              font-size: .8rem;
              font-weight: 600;
              text-align: right;
          }
  
          .benefits-items .benefits-item img {
              width: 50px;
          }
  
          .benefits-items .benefits-item3 img {
              height: 34px;
          }
  
          .benefits-items .benefits-item4 img {
              height: 34px;
              transform: scaleX(-1);
          }
  
  .product-images-div{
      display:flex;
  }
  
      .product-images-div .main-img-div {
          width: 87%;
          max-height: 370px;
      }
  
      .product-images-div .more-images{
          width:24%;
      }
  
          .product-images-div .more-images div {
              width: 80%;
              height: 20%;
              margin: 0 10px 10px;
              filter: grayscale(0.5);
              cursor: pointer;
              transition: .35s ease-in-out;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
          }
          .product-images-div .more-images .other-image.more {
              opacity: 0.4;
          }
          .product-images-div .more-images p {
              text-align: center;
              font-weight: 900;
              margin: 0;
          }
  
          .product-images-div .more-images a {
             color: black;  
             font-weight: 600;  
             font-size: .8rem;
             padding: 6px;
          }
          .product-images-div .more-images .other-image.more a {
              width: 100%;
              height: 100%;
          }
  
              .product-images-div .more-images a i{
                 font-size: 3rem;  
                 color: black;
              }
  
      .gallery-image {
          width: 90px;
          margin: 0 10px 10px;
          cursor: pointer;
      }
  
      .more-images div:hover {
          filter: grayscale(0);
      }
  .more-images div.more:hover {
      filter: grayscale(0.5);
  }
      .animated-modal {
          max-width: 550px;
          border-radius: 4px;
          overflow: hidden;
          transform: translateY(-50px);
          transition: all .7s;
      }
  
  .item-detailes {
      /*padding: 0 15px 0 30px;*/
      direction: rtl;
      text-align: right;
  }
  
          .item-detailes .item-name {
              font-size: 1.6rem;
              font-weight: 900;
          }
  
          .item-detailes .item-price {
          }
  
      .item-detailes .item-comment,
      .item-detailes .item-rate {
          display: block;
          color: black;
          cursor: pointer;
          padding: 3px 0;
      }
  
              /*.item-detailes .item-comment:hover,
              .item-detailes .item-rate:hover {
                  text-decoration: none;
              }*/
  
              .item-detailes .item-comment i {
                  color: #78b99e;
                  font-size: 1.4rem;
              }
  
              .item-detailes .item-comment span {
                  transition: .35s ease-in-out;
              }
  
              .item-detailes .item-comment:hover span {
                  /*font-size: 1.1rem;*/
                  /*font-weight:600;*/
                  color: cadetblue;
              }
  
              .item-detailes .item-rate i {
                  color: #e9a549;
                  font-size: 1.4rem;
              }
  
              .item-detailes .item-rate span {
              }
  
      .item-detailes .item-color,
      .item-detailes .item-size {
          display: flex;
          padding: 3px 0;
      }
          .item-detailes .item-color .colors,
          .item-detailes .item-size .sizes {
              display: flex;
              align-items: center;
              margin-right: 5px;
          }
              .item-detailes .item-color .colors .color {
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  margin-left: 5px;
              }
  
      .item-detailes .item-size .sizes .size{
          min-width: 20px;
          padding: 0 5px;
          height: 25px;
          text-align: center;
          border-radius: 5px;
          margin-left: 5px;
          background: #ddd4d0;
          position: relative;
          font-size: 1rem;
          line-height: 24px;
          font-weight: bold;
      }
  
  .not-exist {
      opacity: 0.6;
  }
      .not-exist:after, .not-exist:before {
          width: 24px;
          position: absolute;
          height: 1px;
          background-color: #504c4c;
          top: 2px;
          left: -2px;
          content: '';
          z-index: 2;
      }
  .not-exist:before {
      transform: translateY(8px) rotate(50deg);
  }
  .not-exist:after {
      transform: translateY(8px) rotate(-50deg);
  }
  
     .comments-detailes-part{
         padding: 0 25px 0 0;
     }
  
      .comments-detailes-part .comments-detailes {
          position: sticky;
          top: 160px;
          border: 2px solid var(--light-cream);
          box-shadow: 0px 0px 8pt 2pt var(--light-cream);
          border-radius: var(--border-radius-size);
          padding: 0 24px 24px;
          background: white;
      }
  
              .comments-detailes-part .comments-detailes #average-rating {
                    text-align:center;
              }
  
                  .comments-detailes-part .comments-detailes #average-rating .stars-container {
                        position: relative;
                        display: inline-block;
                        color: transparent;
                        font-size: 2rem;
                        text-shadow: 0px 0px 3px black;
                  }
  
                  .comments-detailes-part .comments-detailes #average-rating .stars-container:before {
                        position: absolute;
                        top: 0;
                        left: 0;
                        content: '★★★★★';
                        color: lightgray;
                  }
  
                  .comments-detailes-part .comments-detailes #average-rating .stars-container:after {
                        position: absolute;
                        top: 0;
                        left: 0;
                        content: '★★★★★';
                        color: #e9a549;
                        overflow: hidden;
                  }
  
  .stars-0:after { width: 0%; }
  .stars-10:after { width: 10%; }
  .stars-20:after { width: 20%; }
  .stars-30:after { width: 30%; }
  .stars-40:after { width: 40%; }
  .stars-50:after { width: 50%; }
  .stars-60:after { width: 60%; }
  .stars-70:after { width: 70%; }
  .stars-80:after { width: 80%; }
  .stars-90:after { width: 90%; }
  .stars-100:after { width: 100%; }
  
  .stars-3:after { width: 3%; }
  .stars-13:after { width: 13%; }
  .stars-23:after { width: 23%; }
  .stars-33:after { width: 33%; }
  .stars-43:after { width: 43%; }
  .stars-53:after { width: 53%; }
  .stars-63:after { width: 63%; }
  .stars-73:after { width: 73%; }
  .stars-83:after { width: 83%; }
  .stars-93:after { width: 93%; }
  
  .stars-8:after { width: 8%; }
  .stars-18:after { width: 18%; }
  .stars-28:after { width: 28%; }
  .stars-38:after { width: 38%; }
  .stars-48:after { width: 48%; }
  .stars-58:after { width: 58%; }
  .stars-68:after { width: 68%; }
  .stars-78:after { width: 78%; }
  .stars-88:after { width: 88%; }
  .stars-98:after { width: 98%; }
  
  .stars-5:after { width: 5%; }
  .stars-15:after { width: 15%; }
  .stars-25:after { width: 25%; }
  .stars-35:after { width: 35%; }
  .stars-45:after { width: 45%; }
  .stars-55:after { width: 55%; }
  .stars-65:after { width: 65%; }
  .stars-75:after { width: 75%; }
  .stars-85:after { width: 85%; }
  .stars-95:after { width: 95%; }
  
          .comments-detailes-part .comments-detailes .text {
              margin: 0 0 20px 0;
              text-align: right;
              direction: rtl;
          }
  
              .comments-detailes-part .comments-detailes .text span:nth-child(1) {
                  font-weight: 600;
                  font-size: 2rem;
              }
  
          .comments-detailes-part .comments-detailes .bars {
              text-align: right;
              font-size: .7rem;
              margin: 29px 0;
          }
  
              .comments-detailes-part .comments-detailes .bars .my-progress-bar{
                  width: 100%;
                  height: 6px;
                  background-color: lightgray;
                  border-radius: var(--border-radius-size);
                  margin: 7px 0 17px;
                  direction: rtl;
              }
  
                  .comments-detailes-part .comments-detailes .bars .my-progress-bar .my-progress-bar-fill{
                      width: 70%;
                      height: 6px;
                      background-color: var(--base-blue);
                      border-radius: var(--border-radius-size);
                  }
  
          .comments-detailes-part .comments-detailes .new-comment-title {
              font-weight: 600;
              margin-bottom: 12px;
              font-size: .9rem;
              text-align: center;
          }
  
          .comments-detailes-part .comments-detailes .new-comment-link{
              text-decoration:none;
              background-color:var(--dark-base-blue);
              color:white;
              padding: 11px 0;
              text-align: center;
              border-radius: var(--border-radius-size);
              cursor:pointer;
          }
  
          .comments-detailes-part .comments-detailes .new-comment-link:hover{
              text-decoration:none;
          }
  
  .comments-title {
      text-align: end;
      font-size: 1.4rem;
      margin-right: 10px
  }
  
  
  /*.hor-hr {
      width: calc(100% - 96px);
      margin-right: 9em;
      height: 2px;
      background-color: var(--light-cream);
      border: none;
      position: absolute;
      top: -4px;
      left: 15px;
  }*/
  
  .about {
      width: calc(100% - 169px);
      top: 0;
  }
  
  /*.hr-suggest {
      width: calc(100% - 200px);
  }*/
  
  .comments-part {
      padding: 30px 10px 0 0;
  }
  
  .comment-item {
      width: 100%;
      background: white;
      float: right;
      /*padding: 10px 0px 0 0;
          margin: 0 0 20px;*/
      padding: 10px 10px 0px;
  }
  
          .comment-item .comment-item-title {
              display: flex;
              justify-content: space-between;
              flex-direction: row-reverse;
          }
  
              .comment-item .comment-item-title .comment-item-title-main {
                  width: 40%;
                  text-align: right;
                  font-size: 1.2rem;
                  font-weight: 700;
              }
  
              .comment-item .comment-item-title .comment-item-title-user {
                  width: 40%;
                  text-align: left;
                  color: #919191;
              }
  
                  .comment-item .comment-item-title .comment-item-title-user .name {
                      margin: 0 8px;
                      padding: 0 8px;
                      border-left: 2px solid #efebe7;
                  }
  
          .comment-item .comment-item-description .description-text {
              text-align: right;
              padding: 13px 0;
              font-size: .9rem;
              font-weight: 600;
          }
  
          .comment-item .comment-item-description .description-detailes {
              display: flex;
              justify-content: space-between;
              flex-direction: row-reverse;
          }
  
              .comment-item .comment-item-description .description-detailes .positive-point {
                  width: 30%;
                  direction: rtl;
                  text-align: start;
              }
  
              .comment-item .comment-item-description .description-detailes .negative-point {
                  width: 30%;
                  direction: rtl;
                  text-align: start;
              }
  
                  .comment-item .comment-item-description .description-detailes .negative-point ul,
                  .comment-item .comment-item-description .description-detailes .positive-point ul {
                      list-style: none;
                      padding: 0;
                      font-size: .8rem;
                      color: #7a7a7a;
                  }
  
                  .comment-item .comment-item-description .description-detailes .negative-point li::before,
                  .comment-item .comment-item-description .description-detailes .positive-point li::before {
                      content: "● ";
                      color: red;
                  }
  
                  .comment-item .comment-item-description .description-detailes .positive-point li::before {
                      color: green;
                  }
  
              .comment-item .comment-item-description .description-detailes .like-and-dislike {
                  width: 30%;
                  display: flex;
                  align-items: end;
              }
  
                  .comment-item .comment-item-description .description-detailes .like-and-dislike .like,
                  .comment-item .comment-item-description .description-detailes .like-and-dislike .dislike {
                      margin: 0 20px 0 0;
                      align-items: center;
                      font-size: 1.2rem;
                  }
  
                      .comment-item .comment-item-description .description-detailes .like-and-dislike .like span,
                      .comment-item .comment-item-description .description-detailes .like-and-dislike .dislike span {
                      }
  
                      .comment-item .comment-item-description .description-detailes .like-and-dislike .like i,
                      .comment-item .comment-item-description .description-detailes .like-and-dislike .dislike i {
                          color: #dddddd;
                          cursor: pointer;
                          transition: .35s ease-in-out;
                          font-size: 1.4rem;
                      }
  
                          .comment-item .comment-item-description .description-detailes .like-and-dislike .dislike i:hover {
                              filter: drop-shadow(0px 0px 1px red);
                          }
  
                          .comment-item .comment-item-description .description-detailes .like-and-dislike .like i:hover {
                              filter: drop-shadow(0px 0px 1px green);
                          }
  
      /*.comments-part hr {
          margin-bottom: 0;
          color: var(--cream);
          border: 1px solid;
      }*/
  
  #page_navigation {
    clear:both;
    margin: 20px 0;
    width: 100%;
    float: right;
    text-align: center;
  }
  
      #page_navigation a{
          padding:3px 10px;
          border:1px solid #c3a17e;
          border-radius: 7px;
          margin:2px;
          color:black;
          text-decoration:none;
      }
  
  .active_page{
      background:#c3a17e;
      color:white !important;
  }
  
  .item-summary {
      position: sticky;
      top: 160px;
      width: 270px;
  }
  
      
          .item-detailes .suggest-card__plus-basket {
              font-size: 1rem;
              padding: 5px;
              background: var(--pastel-green);
              border-radius: var(--border-radius-size);
              color: #4d5e5a;
              transition: .35s ease-in-out;
              font-weight: 600;
              cursor: pointer;
              width: 100%;
              text-align: center;
              margin: 0 auto;
              padding: 10px;
          }
  
          .item-detailes .suggest-card__plus-basket {
              width: 50%;
              float: left;
              position: absolute;
              bottom: 0px;
              left: 15px;
          }
  
              .item-detailes .suggest-card__plus-basket i {
                  font-size: 1.5rem;
              }
  
  
         #new-comment{
             display:none;
             padding: 24px 80px;
         }
  
             #new-comment p{
                 margin-bottom: 4px;
                 font-weight: 600;
             }
  
              #new-comment #new-comment-title {
                  direction: rtl;
                  text-align: center;
                  margin: 0 0 30px;
                  border-bottom: 1px solid #f0f0f0;
                  padding: 0 0 6px;
             
              }
  
             #new-comment  #new-comment-desc{
                 direction: rtl;  
                 width: 100%;  
                 float: right;  
                 text-align: right; 
             }
  
                 #new-comment  #new-comment-desc .comment-title-part{
                     display: flex;
                      justify-content: space-between;
                      align-items: center;
                      width: 100%;
                 }
  
                     #new-comment  #new-comment-desc .comment-title-part .comment-title-text-div{
                         display: flex;
                     }
  
                          #new-comment #new-comment-desc .comment-title-part .comment-title-text-div h4 {
                              margin: 0 5px;
                              color: #9d825e;
                              font-weight: 600;
                              text-shadow: 1px 1px black;
                              line-height: 17px;
                          }
  
                     #new-comment  #new-comment-desc .comment-title-part .comment-title-star-div .product-review-stars {
                          unicode-bidi: bidi-override;
                          direction: rtl;
                          width: 205px;
                          text-align: left;
                     }
  
                     #new-comment  #new-comment-desc .comment-title-part .comment-title-star-div .product-review-stars label {
                          text-shadow: 0px 0px 3px black;
                     }
  
                     #new-comment  #new-comment-desc .comment-title-part .comment-title-star-div .product-review-stars input.visuallyhidden {
                          position: absolute !important;
                          clip: rect(1px 1px 1px 1px);
                          clip: rect(1px, 1px, 1px, 1px);
                     }
      
          .product-review-stars label:after {
              content: "★";
              color: inherit;
              -webkit-transform: scale(4);
              position: absolute;
              z-index: 4;
              left: 0px;
              transition: all .4s;
              opacity: 0;
              color: inherit;
              visibility: hidden;
          }
  
          .product-review-stars input:checked + label:after {
              visibility: visible;
              -webkit-transform: scale(1);
              opacity: 1;
          }
  
          .product-review-stars {
              unicode-bidi: bidi-override;
              direction: rtl;
              width: 205px;
              text-align: left;
          }
  
          .product-review-stars label {
              font-family: "icomoon";
              font-size: 2.5em;
              position: relative;
              cursor: pointer;
              color: #DFE3E4;
          }
  
          .product-review-stars input:checked ~ label:before {
              opacity: 1;
          }
  
          .product-review-stars:hover input ~ label:before {
              opacity: 0;
          }
  
          .product-review-stars input + label:before {
              content: "\2605";
              position: absolute;
              right: 0;
              opacity: 0;
              transition: opacity .3s ease-in-out, color .3s ease-in-out;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden; /* Chrome and Safari */
              -moz-backface-visibility: hidden; /* Firefox */
              -ms-backface-visibility: hidden; /* Internet Explorer */
          }
  
          .product-review-stars input + label:hover:before,
          .product-review-stars input + label:hover ~ label:before {
              opacity: 1;
          }
  
          .product-review-stars input + label:after,
          .product-review-stars input + label:before,
          .product-review-stars label:hover:before,
          .product-review-stars input:checked ~ label:before {
              color: #e9a549;
          }
  
          .product-review-stars label:hover:before {
              color: #e9a549 !important;
          }
  
          #new-comment  #new-comment-desc .comment-desc{
             resize: none;
              height: 86px;
              width: 100%;
              outline: none;
              border-radius: 5px;
              border: 1px solid #d1cbcb;
              margin-bottom: 20px;
         }
  
         #new-comment  #new-comment-desc .comment-optional{
             display:flex;
             margin-bottom: 20px;
             justify-content: space-between;
         }
  
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item{
             width:40%;
         }
  
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item .plus-good-point,
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item .plus-bad-point{
              border-radius: 0 5px 5px 0;
              outline: none;
              border: 1px solid #d1cbcb;
              height: 29px;
              width: calc( 100% - 27px);
         }
  
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item .plus-good-point-button,
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item .plus-bad-point-button{
              border-radius: 5px 0 0 5px;
              outline: none;
              border: 1px solid #d1cbcb;
              border-right: 0;
              height: 30px;
         }
  
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item #plus-good-point-part,
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item #plus-bad-point-part{
              width: calc( 100% - 21px);
         }
  
          #new-comment #new-comment-desc .comment-optional .comment-optional-item #plus-good-point-part .warn,
          #new-comment #new-comment-desc .comment-optional .comment-optional-item #plus-bad-point-part .warn,
          .submit-comment-warn {
              display: none;
              margin: 2px;
              font-size: .65rem;
              color: red;
          }
  
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item #plus-good-point-part .plus-good-point-item,
         #new-comment  #new-comment-desc .comment-optional .comment-optional-item #plus-bad-point-part .plus-bad-point-item {
              width: 100%;
              margin: 4px 0;
         }
  
          #new-comment  #new-comment-desc .comment-optional .comment-optional-item #plus-good-point-part .plus-good-point-item i,
          #new-comment  #new-comment-desc .comment-optional .comment-optional-item #plus-bad-point-part .plus-bad-point-item i{
              float: left;
              font-size: 1.2rem;
              cursor:pointer;
          }
  
          #new-comment #new-comment-desc .comment-optional .comment-optional-item #plus-good-point-part .plus-good-point-item span,
          #new-comment #new-comment-desc .comment-optional .comment-optional-item #plus-bad-point-part .plus-bad-point-item span {
              color: green;
              margin: 0 0 0 4px;
          }
  
          #new-comment  #new-comment-desc .comment-optional .comment-optional-item #plus-bad-point-part .plus-bad-point-item span{
              color: red;
          }
  
          #new-comment  #new-comment-desc .comment-desc:focus,
          #new-comment  #new-comment-desc .comment-optional .comment-optional-item .plus-good-point:focus,
          #new-comment  #new-comment-desc .comment-optional .comment-optional-item .plus-bad-point:focus{
              box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.12), 0px 3px 18px rgba(0, 0, 0, 0.08);
          }
  
          #new-comment  #new-comment-desc .submit-div{
              margin: 45px 0 10px;
              text-align: center;
          }
          
          #new-comment  #new-comment-desc .submit-div .submit-comment{
              padding: 10px 90px;
              background: var(--dark-base-blue);
              border-radius: 7px;
              color: white;
              text-decoration: none;
              cursor: pointer;
          }
  
          #new-comment  #new-comment-desc .submit-div .submit-comment:hover{
              background: #375a52;
              color: white;
              text-decoration: none;
              cursor: pointer;
          }
  
          #new-comment  #new-comment-desc .submit-div .submit-comment-warn{
              margin: 20px 0 0;
          }
  
  .tabbed-bar {
      position: relative;
      max-width: 980px;
      margin: 0 auto;
      padding: 60px 0px 0 10px;
  }
  
  .tabbed {
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      font-size: 0;
      text-align: left;
      position: relative;
      border: 2px solid #c5d5d1;
      border-radius: var(--border-radius-size);
      box-shadow: 0px 0px 8pt 2pt #c5d5d1;
  }
  
  .tabbed > input {
      position: absolute;
      left: -9999px;
  }
  
  .tabbed > label {
      display: inline-block;
      border: 0;
      outline: none;
      cursor: pointer;
      transition: all 0.1s;
      -o-transition: all 0.1s;
      -ms-transition: all 0.1s;
      -moz-transition: all 0.1s;
      -webkit-transition: all 0.1s;
      position: absolute;
      top: -54px;
      right: -7px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 49px;
      margin: 0 5px 5px;
      border-radius: 5px;
      background: #fff;
      box-shadow: 0 2px rgb(0 0 0 / 20%);
      color: #808080;
      opacity: 0.8;
  }
      .tabbed > label i {
          display: block;
          float: left;
          margin: 16px 8px 0 -2px;
          padding: 0;
          border: 0;
          outline: none;
          font-family: FontAwesome;
          font-style: normal;
          font-size: 17px;
      }
  
  .tab3{
      right: 122px !important;
  }
  
  .tabbed > input:checked + label {
      cursor: default;
  }
  
  .tabbed > ul {
      list-style: none;
      position: relative;
      display: block;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      font-size: 13px;
  }
      .tabbed > ul > li {
          position: absolute;
          width: 100%;
          overflow: auto;
          padding: 30px 40px 40px;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          opacity: 0;
          transition: all 0.5s;
          -o-transition: all 0.5s;
          -ms-transition: all 0.5s;
          -moz-transition: all 0.5s;
          -webkit-transition: all 0.5s;
      }
  
  .tabbed > .tab-content-first:checked ~ ul .tab-content-first,
  .tabbed > .tab-content-2:checked ~ ul .tab-content-2,
  .tabbed > .tab-content-3:checked ~ ul .tab-content-3{
      z-index: 1;
      top: 0;
      left: 0;
      opacity: 1;
      -webkit-transform: scale(1,1);
      -webkit-transform: rotate(0deg);
      text-align: start;
      direction: rtl;
  }
  
  .tabbed-height-auto > ul {
      height: auto !important;
  }
  
      .tabbed-height-auto > ul > li {
          position: static;
          display: none;
          height: auto !important;
      }
  
  .tabbed-height-auto > .tab-content-first:checked ~ ul .tab-content-first,
  .tabbed-height-auto > .tab-content-2:checked ~ ul .tab-content-2,
  .tabbed-height-auto > .tab-content-3:checked ~ ul .tab-content-3{
      display: block;
  }
  
  .tabbed .typography {
      color: #666;
  }
  
  .tabbed-steps > label {
      cursor: default;
  }
  
  .tabbed-effect-scale > ul > li {
      -webkit-transform: scale(0.1,0.1);
  }
  
  .tabbed-effect-rotate  > ul > li {
      -webkit-transform: rotate(180deg);
  }
  
  .tabbed-effect-slide-top > ul > li {
      top: -40px;
  }
  
  .tabbed-effect-slide-right > ul > li {
      left: 80px;
  }
  
  .tabbed-effect-slide-bottom > ul > li {
      top: 40px;
  }
  
  .tabbed-effect-slide-left > ul > li {
      left: -80px;
  }
  
  .tabbed > label:hover {
      background: #f2f2f2;
  }
  
  .tabbed > input:checked + label {
      background: #fff;
  }
  
  .tabbed > ul {
      background: #fff;
      text-align: left;
  }
  
  .tabbed-theme-1 > label:hover {
      background: #fff;
      opacity: 1;
  }
  
  .tabbed-theme-1 > input:checked + label {
      margin-bottom: 0;
      border: 2px solid var(--pastel-green);
      border-radius: var(--border-radius-size);
      box-shadow: 0px 0px 8pt 2pt var(--pastel-green);
      padding-bottom: 5px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      color: var(--base-blue);
      border-color: var(--pastel-green);
      opacity: 1;
  }
  
  .tabbed-theme-1 > ul {
      border-radius: 5px;
      box-shadow: 0 3px rgba(0,0,0,0.2);
  }
  
  .tabbed-theme-1 > .tab-content-first:checked ~ ul {
      border-top-right-radius: 0;
  }
  
  .tabbed > ul,
  .tabbed > ul > li {
      min-height: 370px;
  }
  
  #pagingBox {
      padding: 0 0 0 15px;
      list-style-type: none;
  }
  
  /*.col-lg-summery{
      width: 290px;
  }
  .col-lg-2 {
      width: 16.666667%;
  }
  .col-lg-middel {
      width: calc(83.33333% - 290px);
  }*/
  @media screen and (max-width: 1100px) {
      .product-images-div {
          max-width: 41.666667% !important;
      }
  
      /*.item-detailes {
          min-width: 58.333333% !important;
      }*/
  
      .item-summary-part {
          display: none;
      }
      .comments-detailes-part {
          min-width: 25% !important;
      }
  
      .comments-part-part {
          min-width: 75% !important;
      }
  
      .benefits-items {
          border: none;
          border-bottom: 5px solid #e3be9a;
          margin: 4rem 2rem 2rem;
          margin-left: 2rem;
          min-width: calc(100% - 4rem) !important;
      }
  
          .benefits-items .benefits-item {
              width: 25%;
              text-align: center;
              display: flex;
              flex-direction: column-reverse;
              padding: 0;
          }
  
              .benefits-items .benefits-item p {
                  text-align: center;
                  margin: 5px 5px 0px;
              }
  
      .tabbed-bar {
          padding: 60px 0 0px 5px;
      }
  
  }
  
  @media screen and (max-width: 992px) {
  
      .content {
          padding: 165px 0 71px;
      }
          .content .content-part-2 .suggest .suggest-gallery .suggest-card {
              flex: 0 0 30%;
          }
  
      .benefits-items {
          max-width: calc(100% - 4rem) !important;
      }
  
      .comment-item .comment-item-title .comment-item-title-main {
          font-size: 1.01rem;
      }
  
      .comment-item .comment-item-title .comment-item-title-user {
          font-size: .7rem;
      }
  
      .comment-item .comment-item-description .description-text {
          font-size: .8rem;
      }
  
  }
  
  @media screen and (max-width: 768px) {
      .product-images-div {
          max-width: 100% !important;
      }
  
      .comments-detailes-part{
  
      }
  
      .content {
          padding: 165px 0 71px;
      }
  
      .product-images-div {
          padding: 0 0 0 20px;
      }
  
      .item-detailes {
          padding-top: 2rem;
      }
  
      .comments-part {
          padding: 30px 5px 0 0;
      }
  
      .comments-detailes-part {
          padding: 25px 20px;
      }
  
      .comments-title {
        
          margin-right: 15px;
      }
  
      /*.hor-hr {
          width: calc(100% - 94px); 
          top: -2px;
          left: 10px;
      }*/
  
      .about{
          width: calc(100% - 160px);
          top: 5px;
          left: 10px;
      }
  
      /*.hr-suggest {
          width: calc(100% - 192px);
          top: -2px;
          left: 17px;
      }*/
      
      .comment-item {
          padding-right: 0px;
      }
  
      .content .content-part-2 .suggest .suggest-gallery .suggest-card {
          flex: 0 0 42%;
      }
  }
  
  @media screen and (max-width: 576px) {
      .product-images-div {
          min-width: 100%;
      }
  
      .item-detailes {
          min-width: 100%;
      }
      
      .about {
          top: 17px;
      }
  
      .content .content-part-2 .suggest .suggest-gallery .suggest-card {
          flex: 0 0 45%;
      }
  }
  
  @media screen and (max-width: 860px) {
      .fancybox-slide #new-comment,
      .fancybox-slide #hidden-content-1 {
          max-width: 800px;
          width: max-content;
      }
    
  }
  @media screen and (max-width: 600px) {
      .fancybox-slide #new-comment,
      .fancybox-slide #hidden-content-1 {
          max-width: 800px;
          width: 500px;
      }
  }
  </style>