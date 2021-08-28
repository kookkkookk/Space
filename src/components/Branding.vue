<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'branding',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'isMobile',
            'documentHeight',
            'getScrollTop',
            'stateBrandingPageData'
        ]),
        brandingDataRemainder(){
            return this.stateBrandingPageData.length % 3;
        }
    },
    methods: {
        ...mapActions([
            'getBrandingPageData'
        ]),
    },
    created(){
        this.getBrandingPageData().then(()=>{
            this.$store.dispatch('runFadeOutLoading', true);
        });
    },
    mounted(){
        //Banner animated (tweenMax)
        const { title } = this.$refs
        const { subTitle } = this.$refs
        const { description } = this.$refs
        const { artWorkBg } = this.$refs
        const timeline = new TimelineLite()
        timeline.from(title, 0.5, {opacity: 0, x: -30, delay: 0.3})
                .from([subTitle,description], 0.5, {opacity: 0, y: -10})
                .from(artWorkBg, 0.5, {opacity: 0})

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
    <div class="brandingPage firstDom">
        <div class="brandingMainScreenArea pagesTopCover">
            <div>
                <h1 ref="title">BRANDING</h1>
                <h2 ref="subTitle" v-if="!isMobile">看不見的設計。</h2>
                <h2 ref="subTitle" v-else>純粹共生</h2>
                <p ref="description" v-show="!isMobile">
                    當你把宇宙放在心上，宇宙才會存在。<br>
                    洞見場域的優缺點，<br>
                    避免先入為主的設計，<br>
                    傾聽需求，尋找使用的平衡美學<br>
                    空間的向度，生活的溫度 ，人文的尺度，<br>
                    設計師是小我，空間才是大宇宙。 
                </p>
                <div class="artWorkBg" ref="artWorkBg" v-show="!isMobile"></div>
            </div>
        </div>

        <!-- Creator Area -->
        <div class="creatorArea">
            <div class="creatorContainer">
                <div class="creatorInformation">
                    <h3 data-aos="fade-right">品牌<span>創立</span></h3>
                    <!-- <div class="creator" data-aos="fade"><img src="~Branding/01_creator.jpg"></div> -->
                    <h1 data-aos="fade-right">YUN DESIGN STUDIO<br>昀和室內裝修</h1>
                    <h2 data-aos="fade-right" v-if="!isMobile">
                        「設計來自生活，生活因設計改變，<br>
                        回歸設計需求，以細節成就完美，彰顯本質。」<br>
                        從大型設計公司、大元建築事務所洗禮，到創辦個人公司，<br>
                        三十年設計路，紮實耕耘始終如一，<br>
                        從住宅到商業，一件件精彩作品，造就多種形式的空間表情。
                    </h2>
                    <h2 data-aos="fade-right" v-else>
                        「設計來自生活，生活因設計改變，回歸設計需求，以細節成就完美，彰顯本質。」<br>
                        從大型設計公司、大元建築事務所洗禮，到創辦個人公司，三十年設計路，紮實耕耘始終如一，從住宅到商業，一件件精彩作品，造就多種形式的空間表情。
                    </h2>
                </div>
                
                <div class="spacePicGroup">
                    <div class="spacePic spacePic1" data-aos="fade-up"><img src="~Branding/01_space_1.jpg"></div>
                    <div class="spacePic spacePic2" data-aos="fade-up" data-aos-delay="200"><img src="~Branding/01_space_2.jpg"></div>
                    <div class="spacePic spacePic3" data-aos="fade-up" data-aos-delay="400"><img src="~Branding/01_space_3.jpg"></div>
                </div>
                
            </div>
        </div>

        <!-- designConceptArea -->
        <div class="designConceptArea">
            <div class="designConceptContainer">
                <div class="pic" data-aos="fade" v-if="!isMobile"><img src="~Branding/02_schematicDiagram.jpg"></div>
                <div class="pic" data-aos="fade" v-else><img src="~Branding/02_schematicDiagram_mobile.jpg"></div>
                <div class="title">
                    <h3 data-aos="fade-left">設計<span>理念</span></h3>
                    <h1 data-aos="fade-left">生活與設計對話</h1>
                </div>
                <div class="discription">
                    <ul>
                        <li data-aos="fade-left" v-if="!isMobile">
                            「設計的細節可以看出設計師的意圖。」<br>
                            面對客戶與空間，我們堅持的只是一種價值觀，<br>
                            型隨機能、與時俱進，盡力改善優化，<br>
                            堅持自己的價值觀，相信美的感召力。
                        </li>
                        <li data-aos="fade-left" v-else>
                            「設計的細節可以看出設計師的意圖。」<br><br>
                            面對客戶與空間，我們堅持的只是一種價值觀，型隨機能、與時俱進，盡力改善優化，堅持自己的價值觀，相信美的感召力。
                        </li>
                        <li data-aos="fade-left" v-if="!isMobile">
                            YUN DESIGN，以美感為軸，空間為伍，<br>
                            將喜愛的白色美學，運用在設計生活中，<br>
                            可見單一與多元的包容與調和，<br>
                            純粹與共生搭配出的內斂與優雅。
                        </li>
                        <li data-aos="fade-left" v-else>
                            YUN DESIGN，以美感為軸，空間為伍，將喜愛的白色美學，運用在設計生活中，可見單一與多元的包容與調和， 純粹與共生搭配出的內斂與優雅。
                        </li>
                        <li data-aos="fade-left" v-if="!isMobile">
                            如果說創作是天份，還有不斷的學習，<br>
                            才能累積豐沛的創造力，儘管泰半人生<br>
                            在設計領域裡，日夜追尋靈感與創意拉拔，<br>
                            然而堅韌的柔情與對設計熱情，精進淬煉無限可能。
                        </li>
                        <li data-aos="fade-left" v-else>
                            如果說創作是天份，還有不斷的學習，才能累積豐沛的創造力，儘管泰半人生在設計領域裡，日夜追尋靈感與創意拉拔，然而堅韌的柔情與對設計熱情，精進淬煉無限可能。
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- collectionWorksArea -->
        <div class="collectionWorksArea">
            <div class="collectionWorksContainer">
                <h3>歷年<span>作品</span></h3>

                <div class="collectionWorksContent">

                    <div class="workList">
                        <h1 data-aos="fade-right">{{stateBrandingPageData[0].type+' >'}}</h1>
                        <div class="works commercialList"
                             v-for="(item, index) in stateBrandingPageData[0].workList"
                             :key="index"
                             v-if="index % 6 == 0 && !isMobile">
                            <p v-if="stateBrandingPageData[0].workList[index]" data-aos="fade-left">{{stateBrandingPageData[0].workList[index]}}</p>
                            <p v-if="stateBrandingPageData[0].workList[index+1]" data-aos="fade-left">{{stateBrandingPageData[0].workList[index+1]}}</p>
                            <p v-if="stateBrandingPageData[0].workList[index+2]" data-aos="fade-left">{{stateBrandingPageData[0].workList[index+2]}}</p>
                            <p v-if="stateBrandingPageData[0].workList[index+3]" data-aos="fade-left">{{stateBrandingPageData[0].workList[index+3]}}</p>
                            <p v-if="stateBrandingPageData[0].workList[index+4]" data-aos="fade-left">{{stateBrandingPageData[0].workList[index+4]}}</p>
                            <p v-if="stateBrandingPageData[0].workList[index+5]" data-aos="fade-left">{{stateBrandingPageData[0].workList[index+5]}}</p>
                        </div>
                        
                        <p v-if="isMobile"
                           v-for="(item, index) in stateBrandingPageData[0].workList"
                           :key="index"
                           data-aos="fade-left">
                           {{item}}
                        </p>
                    </div>
                    
                    <div class="workList">
                        <h1 data-aos="fade-right">{{stateBrandingPageData[1].type+' >'}}</h1>
                        <div class="works interioreList"
                             v-for="(item, index) in stateBrandingPageData[1].workList"
                             :key="index"
                             v-if="index % 6 == 0 && !isMobile">
                            <p v-if="stateBrandingPageData[1].workList[index]" data-aos="fade-left">{{stateBrandingPageData[1].workList[index]}}</p>
                            <p v-if="stateBrandingPageData[1].workList[index+1]" data-aos="fade-left">{{stateBrandingPageData[1].workList[index+1]}}</p>
                            <p v-if="stateBrandingPageData[1].workList[index+2]" data-aos="fade-left">{{stateBrandingPageData[1].workList[index+2]}}</p>
                            <p v-if="stateBrandingPageData[1].workList[index+3]" data-aos="fade-left">{{stateBrandingPageData[1].workList[index+3]}}</p>
                            <p v-if="stateBrandingPageData[1].workList[index+4]" data-aos="fade-left">{{stateBrandingPageData[1].workList[index+4]}}</p>
                            <p v-if="stateBrandingPageData[1].workList[index+5]" data-aos="fade-left">{{stateBrandingPageData[1].workList[index+5]}}</p>
                        </div>
                        
                        <p v-if="isMobile"
                           v-for="(item, index) in stateBrandingPageData[1].workList"
                           :key="index"
                           data-aos="fade-left">
                           {{item}}
                        </p>
                    </div>
                </div>
            </div>

            <div class="woodBg" v-if="!isMobile"></div>
            <div class="woodBg" v-else><img src="~Branding/03_wood.png"></div>
        </div>

        <div class="stepArea">
            <div class="stepContainer">
                <h3 data-aos="fade-right">專案<span>流程</span></h3>
                <div class="textBox">
                    <h2 data-aos="fade-right">業主· 設計師 Q&amp;A</h2>
                    <p data-aos="fade-right" v-if="!isMobile">
                        溝通是成就設計的起點！執行過程我們傾聽，和業主保持交流，<br>
                        設計案每一步驟均得到業主充份的了解和認同後才執行。<br>
                        每一件設計作品的呈現,代表著每位客戶的氣質和內在涵養，<br>
                        我們期許能為客戶展現出不同層次的空間。<br>
                        歡迎與我們聊聊，邀請你到更好的生活來。
                    </p>
                    <p data-aos="fade-right" v-else>
                        溝通是成就設計的起點！執行過程我們傾聽，和業主保持交流，設計案每一步驟均得到業主充份的了解和認同後才執行。<br>
                        每一件設計作品的呈現,代表著每位客戶的氣質和內在涵養，我們期許能為客戶展現出不同層次的空間。<br>
                        歡迎與我們聊聊，邀請你到更好的生活來。
                    </p>
                </div>
                <div class="stepContent">
                    <ul>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="100" class="cubeBlack"><h4>1</h4><p>設計師&nbsp;&nbsp;x&nbsp;&nbsp;客戶交流會談</p></li>
                        <li v-else data-aos="fade-up" class="cubeBlack"><h4>1</h4><p>設計師&nbsp;&nbsp;x&nbsp;&nbsp;客戶交流會談</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="200" class="cubeWhite"><h4>2</h4><p>現場實地丈量及平面放樣</p></li>
                        <li v-else data-aos="fade-up" class="cubeWhite"><h4>2</h4><p>現場實地丈量及平面放樣</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="300" class="cubeWhite"><h4>3</h4><p>提報空間區分建議</p></li>
                        <li v-else data-aos="fade-up" class="cubeWhite"><h4>3</h4><p>提報空間區分建議</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="400" class="circle"><h4>4</h4><p>平面圖簡報</p></li>
                        <li v-else data-aos="fade-up" class="circle"><h4>4</h4><p>平面圖簡報</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="500" class="cubeWhite"><h4>5</h4><p>設計合約確認及成立</p></li>
                        <li v-else data-aos="fade-up" class="cubeWhite"><h4>5</h4><p>設計合約確認及成立</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="600" class="circle"><h4>6</h4><p>立面圖簡報</p></li>
                        <li v-else data-aos="fade-up" class="circle"><h4>6</h4><p>立面圖簡報</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="700" class="cubeWhite"><h4>7</h4><p>材料建議及家具建議</p></li>
                        <li v-else data-aos="fade-up" class="cubeWhite"><h4>7</h4><p>材料建議及家具建議</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="800" class="cubeWhite"><h4>8</h4><p>施工圖繪製</p></li>
                        <li v-else data-aos="fade-up" class="cubeWhite"><h4>8</h4><p>施工圖繪製</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="900" class="circle"><h4>9</h4><p>估　價</p></li>
                        <li v-else data-aos="fade-up" class="circle"><h4>9</h4><p>估　價</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="1000" class="cubeWhite"><h4>10</h4><p>工程合約</p></li>
                        <li v-else data-aos="fade-up" class="cubeWhite"><h4>10</h4><p>工程合約</p></li>
                        <li v-if="!isMobile" data-aos="fade-up" data-aos-delay="1100" class="cubeBlack"><h4>11</h4><p>施工執行</p></li>
                        <li v-else data-aos="fade-up" class="cubeBlack"><h4>11</h4><p>施工執行</p></li>
                        <li v-if="isMobile" class="lineMobile" data-aos-delay="1200"></li>
                    </ul>
                    <span v-if="!isMobile" class="line" data-aos="fade" data-aos-delay="1200"></span>
                </div>
            </div>
            <div v-if="!isMobile" class="stepContentBg"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "scss/helpers/_mixin.scss";
    // @import "scss/helpers/_scrollAnimation.scss";
    @import "scss/pages/_branding.scss";
</style>