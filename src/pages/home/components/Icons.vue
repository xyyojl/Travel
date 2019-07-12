<template>
    <div class="icons clearfix">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <img class="icon-img" :src="item.imgUrl" alt="">
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // page 可能为 0 1
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50.6%
    .clearfix::after
        content: ''
        display: block
        clear: both
    .icons
        // overflow: hidden
        // width: 100%
        // height: 50.6%
        // height: 0
        // padding-bottom: 50.6%
        margin-top: .1rem
        .icon
            float: left
            position: relative
            width: 25%
            height: 0
            padding-bottom: 1.5rem
            padding-top: .1rem
            .icon-img
                position: absolute
                width: 1.1rem
                height: 1.1rem
                left: 0
                right: 0
                margin: 0 auto
                padding-top: .1rem
            .icon-desc
                position: absolute
                text-align: center
                line-height: .28rem
                left: 0
                right: 0
                margin: 0 auto
                bottom: 0
                color: $darkTextColor
                font-size: .28rem
                ellipsis()
</style>
