<template>
  <div class="swiper-widget" @click.stop="toggleClick">
    <header class="swiper-header">
      <span v-show="showHF">
        <section class="reback-btn"><span @click="onReback"><img class="back-icon" src="../assets/back.png"></span>返回列表</section>
        <section class="header-title">{{ deviceType.toLocaleUpperCase() }}产品手册</section>
      </span>
    </header>

    <p v-if="!deviceType" class="error-tag">提示：设备类型为找到，返回 <i @click="onReback" class="link">首页</i></p>
    <p v-else-if="total <= 0" class="error-tag">
      提示：暂无 <strong>{{ deviceType }}</strong> 产品手册，返回 <i @click="onReback" class="link">首页</i>
    </p>
    <template v-else>
      <div id="main-swiper" class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in swiperOptions" :key="index" class="swiper-slide">
            <!-- <img :src="getImgSrc(item.imgPath)" /> -->
            <img v-lazy="getImgSrc(item.imgPath)" />
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination-container" @click.stop >
        <span v-show="showHF">
          <div class="pagination-container">{{ pageNo }}/{{ total }}</div>
          <div id="thumbs" :style="{ width: `${total * 1.45}rem`, maxWidth: '80%' }">
            <div class="swiper-wrapper swiper-slides" >
              <div v-for="index in swiperOptions.length" :key="index" class="swiper-slide swiper-slide">
                {{ index }}
              </div>
            </div>
          </div>
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { getManualByDeviceType } from '../devices/manual.js'

export default {
  name: 'SwiperWidget',
  data(){
    return {
      deviceType: '',
      showHF: false,
      pageNo: 1,
    }
  },
  computed: {
    swiperOptions() {
      return getManualByDeviceType(this.deviceType) || []
    },
    total() {
      return this.swiperOptions.length || 0
    }
  },
  created() {
    this.deviceType = this.$route.query?.deviceType || ''
  },
  mounted() {
    let mainSwiper;
    const $vue = this
    // eslint-disable-next-line
    const thumbsSwiper = new Swiper ('#thumbs', {
      loop: false, // 循环模式选项
      // slidesPerView: $vue.total,
      spaceBetween: 4,
      watchSlidesVisibility: true,
      touchMoveStopPropagation: true,
      preventClicksPropagation: true,
      preventClicks: true,
      slideToClickedSlide: true,
      width: 24,
      // 如果需要分页器
      on: {
        transitionEnd: function(){
          $vue.pageNo = this.activeIndex + 1
          mainSwiper && mainSwiper.slideTo(this.activeIndex)
        },
        click: function() {
          $vue.pageNo = this.activeIndex + 1
          mainSwiper && mainSwiper.slideTo(this.activeIndex)
        }
      }
    });
    mainSwiper = new Swiper ('#main-swiper', {
      direction: 'horizontal', // 垂直切换选项
      loop: false, // 循环模式选项
      slidesPerView: 1,
      spaceBetween: 20,
      touchMoveStopPropagation: true,
      on: {
        slideChange: function(){
          $vue.pageNo = this.activeIndex + 1
        },
      },
      controller: {
        control: thumbsSwiper,
      }
    });
  },
  methods: {
    toggleClick () {
      this.showHF = !this.showHF
    },
    onReback() {
      this.$router.push({ path: '/' })
    },
    getImgSrc(path) {
      return require('@/' + path)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'swiper/swiper.scss';

.swiper-widget {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #777777;
  overflow-x: hidden;
}

.error-tag {
  width: 100%;
  background: #FFFFFF;
  color: #666666;
  font-size: 1rem;
  font-weight: 600;
  height: 60%;
  padding: 20px;

  .link {
    cursor: pointer;
    text-decoration:underline;
  }
}

.reback-btn {
  display: flex;
  align-items: center;
  font-size: 1.0625rem;
  color: #FFFFFF;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 2rem 0 1rem;
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
}

#thumbs {
  height: 100%;
  // width: 1.45rem;
  margin: auto auto;
  padding-bottom: 1rem;
  box-sizing: border-box;

  .swiper-slides {
    align-items: center;
  }

  .swiper-slide {
    display: block;
    width: 1.45rem;
    height: 2.05rem;
    background: #FFFFFF;
    border: 0.5px solid rgba(60,60,60,1);
    text-align: center;
  }
  .swiper-slide.swiper-slide-active {
    transform: scale(1.65);
    z-index: 2;
  }
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

@media screen and ( max-height: 736px ) {
  .swiper-header, .swiper-pagination-container {
    height: 5.5rem;
  }

  .reback-btn {
    margin: 1.25rem 0 0.75rem;
  }
}
</style>