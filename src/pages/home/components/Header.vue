<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
    // @import '~styles/varibles.styl'
    @import '~@/assets/styles/varibles.styl'
    .header
        display: flex
        height: $headerHeight
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            float: left
            width: .64rem
            .back-icon
                text-align:center
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            border-radius: .1rem
            color: #ccc
            background: #fff
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
        .header-right
            float: right
            min-width: 1.04rem
            padding: 0 .1rem
            text-align: center
            color: #fff
            .arrow-icon
                marign-left: -0.04rem
                font-size: .24rem
</style>
