<template>

<div id="footer" class="row d-flex justify-content-around">
    <div class="row col-lg-6 col-sm-12 p-0 pt-4 d-flex justify-content-between part1" >
        <div class="col-6 col-lg-6 col-sm-6 ">
            <h3 class="footer-item-title">ارتباط با ما </h3>
            <div class="footer-item-desc">
                <div class="desc-item"> <i class="fa fa-home"></i>آدرس: <span>تهران، بلوار ميرداماد، جنب دفينه، بازار بزرگ ميرداماد، ساختمان اداری، ط 4، واحد 412</span></div>
                <div class="desc-item"><i class="fa fa-phone"></i>تماس با ما: <span>021-57826000</span></div>
                <div class="desc-item"><i class="fa fa-clock-o"></i>ساعت پاسخگويي: <span>شنبه تا چهار شنبه از ساعت 8:30 تا 17:00</span></div>
                <div class="desc-item"> <i class="fa fa-envelope"></i>پست الکترونیکی: <span> online@rojagroup.com</span></div>
            </div>
        </div>
        <div class="col-6 col-lg-4 col-sm-6 information" >
            <h3 class="footer-item-title">اطلاعات حساب کاربری </h3>
            <div class="footer-item-desc">
                <a href="#" class="desc-item"><i class="fa fa-user"></i>پروفایل</a>
                <a href="#" class="desc-item"><i class="fa fa-comments"></i>نظرات من</a>
                <a href="#" class="desc-item"> <i class="fa fa-list"></i>سفارشات</a>
            </div>
        </div>
    </div>
    <div class=" col-lg-4 col-sm-12 pt-4  origin">
        <h3 class="footer-item-title"> مجوز و تاییدیه ها</h3>
        <div class="footer-item-desc">
            <img src="../assets/namad1.webp" class="namad-img" />
            <img src="../assets/namad2.webp" class="namad-img" />
            <img src="../assets/namad3.webp" class="namad-img" />
        </div>
        
    </div> 
    <p id="last-line">© کلیه حقوق متعلق به فروشگاه اینترنتی هارمونیکا میباشد.</p>
</div>

</template>

<script>
export default {

}
</script>

<style>
/* @font-face {
    font-family: "iranyekan";
    src : url("../font/iranyekan-cufonfonts/Qs_Iranyekan.ttf") format("truetype");
} */
/*:root {
    --dark-gray-n1: #4f4f4f;
    --dark-gray-n2: #474747;
    --dark-gray-n3: #3f3f3f;
    --dark-gray-n4: #3b3b3b;
    --light-purple: #9b58b5;
    --sky-blue: #3599db;
    --middle-blue: #197bbd;
    --light-green: #1dbd9b;
    --middle-green: #288b76;
    --pastel-green: #d7e1de;
    --dark-green: #1b4239;
    --light-gray: #f0f0f1;
    --light-cream: #efebe7;
    --red: #e72222;
    --dark-red: #a70e0e;
    --cream: #d5af83;
    --border-radius-size: 7px;
    --font-family: iranyekan;
}*/
.row {
    margin:0 !important;
}
#footer {
    height: max-content;
    width: 100%;
    box-shadow: 0 0 5pt 2pt #d3d3d3;
    border-bottom: 4px solid #c3a17e;
    direction: rtl;
    text-align: right;
    background: white;
}
.footer-item-title {
    font-size: 1.2rem;
    font-weight: 600;
    border-bottom: 2px solid #efebe7;
    width: max-content;
    padding-bottom: 0.5rem;
}
.footer-item-desc {
    font-size: .85rem;
    margin-top: 1.5rem;
}
    .footer-item-desc .desc-item {
        margin-bottom: .5rem;
        font-weight: 600;
        
    }
.information .footer-item-desc .desc-item {
    color: black;
    display: block;
    transition: .3s ease-in-out;
}
    .information .footer-item-desc .desc-item:hover {
        text-decoration: none;
        color: var(--middle-green)
    }
        .footer-item-desc .desc-item i {
            font-size: 1rem;
            padding-left: 3px;
        }
        .footer-item-desc .desc-item:nth-child(1) i {
            font-size: 1.1rem;
        }
        .footer-item-desc .desc-item:last-child i {
            font-size: .9rem;
        }
        .footer-item-desc .desc-item span {
            color: gray;
            font-weight: 400;
        }
.footer-item-desc .namad-img {
    width: 80px;
    height: 80px
}
#last-line {
    border-top: 2px solid #efebe7;
    width: 70%;
    text-align: center;
    padding: 1rem;
    font-size: .9rem;
    color: #919191;
    margin: 1rem 0 0;
}

@media screen and (max-width: 768px) {
    /*.content .content-part-2 .suggest .suggest-gallery .suggest-card {
        flex: 0 0 45%;
    }*/
    /*.content {
        padding: 190px 0 71px;
    }*/
    .origin {
        text-align: center;
    }
    .origin h3{
        margin: 0 auto;
    }
    /*.information {
        min-width: 100% !important;
        padding-top: 2rem;
    }*/
    .footer-item-title {
        font-size: .9rem;
    }
    .footer-item-desc {
        margin-top: .7rem;
    }
        .footer-item-desc .desc-item:nth-child(1) i {
            font-size: .8rem;
        }

    .footer-item-desc .desc-item {
        margin-bottom: 0.5rem;
        font-size: .7rem;
    }
        .footer-item-desc .namad-img {
            width: 60px;
            height: 60px;
        }
    #last-line {
       
        width: 90%;       
        font-size: .7rem;
    }
}
</style>