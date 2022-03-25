<template>
  <div class="swiper-widget" @click.stop="toggleClick">
    <header class="swiper-header">
      <span v-show="showHF">
        <section class="reback-btn"><span @click="onReback"><img class="back-icon" src="../assets/back.png"></span>返回列表</section>
        <section class="header-title">4G07产品手册</section>
      </span>
    </header>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in swiperOptions" :key="index" class="swiper-slide">
          <img :src="item.src" />
        </div>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination-container">
      <span v-show="showHF">
        <div class="pagination-container">{{ pageNo }}/{{ total }}</div>
        <div class="swiper-pagination" @click.stop></div>
      </span>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'SwiperWidget',
  data(){
    return {
      pageNo: 1,
      swiperOptions: [
        { value: '4g03', src: require('@/assets/device-2.png') },
        { value: 'gw07', src: require('@/assets/device-2.png') },
        { value: 'gw01', src: require('@/assets/device-2.png') }
      ],
      showHF: false
    }
  },
  computed: {
    total() {
      return this.swiperOptions.length || 0
    }
  },
  mounted() {
    const $vue = this
    // eslint-disable-next-line
    const mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: false, // 循环模式选项
      slidesPerView: 1,
      spaceBetween: 20,
      touchMoveStopPropagation: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function(){
          $vue.pageNo = this.activeIndex + 1
        },
      },
    })
  },
  methods: {
    toggleClick () {
      this.showHF = !this.showHF
    },
    onReback() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
@import 'swiper/swiper.scss';

.swiper-widget {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #777777;
}

.reback-btn {
  display: flex;
  align-items: center;
  font-size: 1.0625rem;
  color: #FFFFFF;
  font-weight: 400;
  line-height: 1.5rem;
  margin-top: 2rem;
  .back-icon {
    width: 0.75rem;
    height: 1.5rem;
    margin: 0 1rem;
    display: inline-block;
    vertical-align: middle;
  }
}

.header-title {
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  text-align: center;
  font-size: 1.0625rem;
  color: #FFFFFF;
  font-weight: 400;
}

.swiper-header, .swiper-pagination-container {
  background: #777777;
  width: 100%;
  height: 6.875rem;
}

.swiper-container {
  width: 100%;
  flex: 1;
  background: #777777;
  padding: 1rem 0;

  .swiper-slide {
    height: 100%;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0.75rem 0 rgba(0,0,0,0.8);

    img{
      width: 100%;
      height: 100%;
    }
  }

  // .swiper-slide.active {
  //   box-shadow: 0 0 0.75rem 0 rgba(0,0,0,0.8);
  // }
}


.swiper-pagination.swiper-pagination-bullets {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet {
  display: block;
  width: 1.45rem;
  height: 2.05rem;
  // padding: 0.25rem;
  background: #FFFFFF;
  border: 0.5px solid rgba(60,60,60,1);
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  transform: scale(1.65);
}

.swiper-pagination-container {
  position: relative;
}
.pagination-container {
  position: absolute;
  background: #000000;
  border-radius: 0.875rem;
  font-size: 1.0625rem;
  color: #FFFFFF;
  text-align: center;
  font-weight: 400;
  padding: 0.25rem 1.5rem;
  top: -1.9375rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}
</style>