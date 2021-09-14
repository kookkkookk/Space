<script>
import { mapGetters } from 'vuex';
export default {
    name: 'footer-module',
    computed: {
        ...mapGetters([
            'isMobile'
        ])
    }
};
</script>
<template>
    <footer>
        <div class="footerDsktop" v-if="!isMobile">
            <div class="textArea">
                <h1><span></span></h1>
                <!-- <h2></h2> -->
                <a href="tel:0226270016">T 886 2 2627 0016</a>
                <p>COPYRIGHT © YUN DESIGN STUDIO.　Creative 字造創意行銷　Design 予也創意</p>
            </div>
            <div class="iconArea">
                <ul>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="mailto:yundesign.tw@gmail.com"></a></li>
                </ul>
            </div>
        </div>
        <div class="footerMobile" v-else>
            <h2>COPYRIGHT © YUN DESIGN STUDIO.</h2>
            <p>Creative 字造創意行銷　Design 予也創意</p>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
    @import "scss/helpers/_mixin.scss";
    @import "scss/common/_footer.scss";
</style>
