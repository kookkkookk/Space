<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'news',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'isMobile',
            'getScrollTop',
            'stateNewsPageData'
        ]),
        newsDataLength(){
            return this.stateNewsPageData.length
        }
    },
    methods: {
        ...mapActions([
            'getNewsPageData'
        ]),
        scrollToTop() {
            setTimeout(() => {
                window.scrollTo(0,0);
            }, 200);
        }
    },
    created(){
        this.getNewsPageData().then(()=>{
            this.$store.dispatch('runFadeOutLoading', true);
        });
    },
    mounted(){
        
        //Banner animated (tweenMax)
        const { title } = this.$refs
        const { subTitle } = this.$refs
        const { description } = this.$refs
        const { ligth } = this.$refs
        const timeline = new TimelineLite()
        timeline.from(title, 0.5, {opacity: 0, x: -30, delay: 0.3})
                .from([subTitle,description], 0.5, {opacity: 0, y: -10})
                .from(ligth, 0.5, {opacity: 0})

        //scroll anumated api
        this.$aos.init()
        this.$aos.init({
            duration: 500,
            once: true
        })
    }
}
</script>

<template>
    <div class="newsPage firstDom">
        <!-- news main screen -->
        <div class="newsMainScreenArea pagesTopCover" ref="newsMainScreenArea">
            <div>
                <h1 ref="title">NEWS</h1>
                <div class="light" ref="ligth"><img src="~News/00_light_desktop.png" alt=""></div>
                <h2 ref="subTitle" v-if="!isMobile">慢功細活。</h2>
                <h2 ref="subTitle" v-else>慢功細活</h2>
                <p ref="description" v-if="!isMobile">
                    我們的設計，一尺一寸亦如書法裡一筆一畫，<br>
                    孕育累積，方見天地；<br>
                    內斂優雅，一分溫柔的氣質；<br>
                    在設計與尺度中，回應生活的本質。
                </p>
            </div>
            <span class="bottomWhite"></span>
        </div>

        <!-- Introduction -->
        <div class="introductionArea">

            <div class="introductionContainer">
                <div class="newsItem"
                     v-for="(item, index) in stateNewsPageData"
                     :key="index">
                    <div class="left">
                        <div class="cover">
                            <h2 v-if="isMobile" data-aos="fade-right">{{item.subTypeName}}</h2>
                            <router-link :to="'news/'+index"
                                        :class="item.listingPageImgDirection"
                                        @click.native="scrollToTop"
                                        :style="{backgroundImage:'url('+item.listingPageImg+')'}"
                                        data-aos="fade-right"
                                        data-aos-delay="200">
                            </router-link>
                        </div>
                    </div>
                    <div class="right">
                        <div>
                            <h1 data-aos="fade-right">{{item.typeName}}</h1>
                            <h2 v-if="!isMobile" data-aos="fade-right">{{item.subTypeName}}</h2>
                            <h3 data-aos="fade-right">{{item.title}}</h3>
                            <h4 v-html="(!isMobile ? item.subTitle.replace(/\^/g,'') : item.subTitle.replace(/\<br\>/g,'').replace(/\^/g,'<br\>'))" data-aos="fade-right"></h4>
                            <h5 v-if="item.subTitleTwo" v-html="(!isMobile ? item.subTitleTwo.replace(/\^/g,'') : item.subTitleTwo.replace(/\<br\>/g,'').replace(/\^/g,'<br\>'))" data-aos="fade-right"></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    @import "scss/helpers/_mixin.scss";
    // @import "scss/helpers/_scrollAnimation.scss";
    @import "scss/pages/_news.scss";
</style>
