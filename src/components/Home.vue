<script>
import { mapGetters, mapActions } from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
var timer, interval = 5000;
export default {
    name: 'home',
    data() {
        return {
            testData: null,
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet(index, className) {
                        return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
                    }
                }
            },
            active: 0,
        }
    },
    computed: {
        ...mapGetters([
            'isMobile',
            'documentHeight',
            'stateHomePageData'
        ]),
        total() {
            return this.stateHomePageData[1].bannerDesktopImg.length || 0
        }
    },
    methods: {
        ...mapActions([
            'getHomePageData'
        ]),
        clickBanner(active){
            this.active = (active + this.total) % this.total
            this.clearHandler()
            this.setHandler();
        },
        nextHandler() {
            this.active = (this.active + 1) % this.stateHomePageData[1].bannerDesktopImg.length
        },
        setHandler() {
            this.clearHandler()
            timer = setInterval(this.nextHandler, interval)
        },
        clearHandler() {
            clearInterval(timer)
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    watch: {
    },
    created() {
        this.getHomePageData().then(()=>{
            this.$store.dispatch('runFadeOutLoading', true);
            this.setHandler()
        });
    },
    mounted(){
        //Banner animated (tweenMax)
        const { bannerDom } = this.$refs
        const { titleArea } = this.$refs
        const timeline = new TimelineLite()
        timeline.from(bannerDom, 0.5, {scale:1.1, opacity: 0})
                .from(titleArea, 0.5, {scale:1.1, opacity: 0})

        //scroll anumated api
        this.$aos.init()
        this.$aos.init({
            duration: 500,
            once: true
        })
        
    },
    destroyed () {
    }
}
</script>

<template>
    <div class="homePage firstDom">
        <!-- Banner -->
        <div class="bannerArea">
            
            <div class="bannerContainer"
                 :style="[!isMobile?{height:documentHeight+'px'}:{height:'auto'}]"
                 ref="bannerDom">
                <span class="braceHeight">
                    <img v-if="isMobile" src="~Home/00_banner_mobile00_braceHeight.jpg">
                </span>
                <transition-group v-if="!isMobile"
                                  tag="div"
                                  name="fade">
                    <div class="bannerPic"
                         v-for="(item, index) in stateHomePageData[1].bannerDesktopImg"
                         :key="index"
                         :style="{backgroundImage:'url('+item+')'}"
                         v-show="active===index"
                         :class="{bannerCyclingA:(index+1)%4 === 1,
                                  bannerCyclingB:(index+1)%4 === 2,
                                  bannerCyclingC:(index+1)%4 === 3,
                                  bannerCyclingD:(index+1)%4 === 0}"></div>
                </transition-group>

                <swiper v-else
                        :options="swiperOption"
                        class="mobileBanner">
                    <swiper-slide v-for="(item, index) in stateHomePageData[1].bannerMobileImg"
                                  :key="index">
                        <img :src="item">
                    </swiper-slide>
                    <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
                </swiper>
            </div>
            <div class="titleArea" ref="titleArea">
                <div>
                    <h1>{{stateHomePageData[0].bannerTitle}}</h1>
                    <h2>{{stateHomePageData[0].bannerSubTitle}}</h2>
                </div>
            </div>
            <div v-if="!isMobile" class="mouseIcon">
                <div v-scroll-to="'.chairArea'">
                    <span></span>
                </div>
            </div>
            
        </div>

        <!-- Chair -->
        <div class="chairArea" ref="chairArea">
            <div class="bg" data-aos="fade">
                <img v-if="!isMobile" src="~Home/01_chairBg_desktop.png">
                <img v-else src="~Home/01_chair_mobile.png">
            </div>
            <div data-aos="fade-right" :class="{left:!isMobile,description:isMobile}">
                <p data-aos="fade-right" data-aos-delay="300">
                    風格是什麼？歲月、生活、經典...<br>
                    空間是什麼？人的尺度，光影的彩度，空間的溫度。<br>
                    家是什麼？ 心之所向就是家。
                </p>
            </div>
            <div data-aos="fade-left" v-if="!isMobile" class="right">
                <p data-aos="fade-down" data-aos-delay="500">自在與優雅，空間意念的詮釋</p>
                <h2 data-aos="fade-down" data-aos-delay="300">YUN DESIGN</h2>
            </div>
        </div>

        <!-- Life style -->
        <div class="lifeStyleArea">
            <div>
                <h1 data-aos="fade-right">LIFE STYLE</h1>
                <div data-aos="fade-left" class="pic"><img src="~Home/02_schematically.jpg"></div>
                <p data-aos="fade-right">
                    「有時我很想畫風景，就好像有人很想通過長時間散步來緩解心情一樣。<br>
                    在自然當中，比如樹木中，我可以看見情感與靈魂。」<br>
                    <span data-aos="fade" data-aos-delay="300">—梵谷，19世紀荷蘭後印象派畫家—</span>
                </p>
            </div>
        </div>

        <!-- Schematically -->
        <div class="schematically">
            <div data-aos="fade-down" v-if="!isMobile" class="bg picDesktop"></div>
            <div data-aos="fade-down" v-else class="bg picMobile"><img src="~Home/03_schematically_mobile.jpg"></div>
            <div data-aos="fade-left" data-aos-delay="300" class="description">
                <p>
                    YUN DESIGN STUDIO<br>
                    空間層次的美 ，生活尺度的善意。<br>
                    那些細微的觀察與習慣，<br>
                    堆砌了我們最重要的日常。<br>
                    專心為使用者，以剛好的設計語彙，<br>
                    為人、為物件在日常生活中找到合適的定位，<br>
                    不為張揚而存在，<br>
                    真正的奢華是藏在骨子裡的細節，<br>
                    深入生活紋理，始終經典雋永
                </p>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    @import "scss/helpers/_mixin.scss";
    // @import "scss/helpers/_scrollAnimation.scss";
    @import "scss/pages/_home.scss";
</style>
