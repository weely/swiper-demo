<template>
  <div class="swiper-widget" @click.stop="toggleClick">
    <header class="swiper-header" @click.stop>
      <div v-show="showHF">
        <section class="header-title header-item">{{ deviceType.toLocaleUpperCase() }}</section>
        <section class="reback-btn header-item">
          <div @click.stop="onReback"><img class="back-icon" src="../assets/back.png">返回</div>
        </section>
      </div>
    </header>

    <p v-if="!deviceType" class="error-tag">提示：设备类型为找到，返回 <i @click="onReback" class="link">首页</i></p>
    <p v-else-if="total <= 0" class="error-tag">
      提示：暂无 <strong>{{ deviceType }}</strong> 产品手册，返回 <i @click="onReback" class="link">首页</i>
    </p>
    <template v-else>
      <div id="main-swiper" class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(item, index) in swiperOptions" :key="index" class="swiper-slide">
            <img v-lazy="getImgSrc(item.imgPath)" />
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination-container" @click.stop>
        <span v-show="showHF">
          <div class="pagination-container">{{ pageNo }}/{{ total }}</div>
          <div id="thumbs" :style="{ width: `${total * 1.45}rem`, maxWidth: '80%' }">
            <div class="swiper-wrapper swiper-slides" >
              <div v-for="(item, index) in swiperOptions" :key="index" class="swiper-slide">
                <img v-lazy="getImgSrc(item.imgPath)" />
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
      showHF: true,
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
    document.title = this.deviceType + '产品手册'
    let mainSwiper;
    const $vue = this
    const thumbWidth = document.documentElement > 736 ? 24 : 20
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
      width: thumbWidth,
      // 如果需要分页器
      on: {
        slideChange: function(){
          $vue.pageNo = this.activeIndex + 1
        },
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

.header-item {
  line-height: 1.5rem;
  font-size: 1.0625rem;
  color: #FFFFFF;
  font-weight: 400;
  margin: 1.5rem 0 0.5rem;
}

.reback-btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;

  .back-icon {
    width: 0.75rem;
    height: 1.5rem;
    margin: 0 1rem;
    display: inline-block;
    vertical-align: middle;
  }
}

.header-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

.swiper-header, .swiper-pagination-container {
  background: #777777;
  width: 100%;
  position: relative;
}

.swiper-header, .swiper-pagination-container {
  height: 4.5rem;
}

#main-swiper.swiper-container {
  width: 100%;
  flex: 1;
  background: #777777;
  padding: 1rem 0;

  .swiper-slide {
    width: 100vw;
    height: 100%;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0.75rem 0 rgba(0,0,0,0.8);
    background: #FFFFFF;
    text-align: center;

    img{
      max-width: 100%;
      height: 100%;
    }
  }
}

#thumbs {
  height: 100%;
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

    img {
      width: 100%;
      height: 100%;
    }
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

@media screen and (max-height: 844px ) {
  .swiper-header {
    height: 3.5rem;
  }
  .header-item {
    margin: 1rem 0 0.5rem;
  }
}

@media screen and (max-height: 736px ) {
  .swiper-header {
    height: 3rem;
  }
  .swiper-pagination-container {
    height: 3.5rem;
  }

  .header-item {
    margin: 1rem 0 0.25rem;
  }

  #main-swiper.swiper-container {
    padding: 0.5rem 0 1rem;
  }

  #thumbs {
    padding-bottom: 0.5rem;

    .swiper-slide {
      height: 1.75rem;
    }
  }
}
</style>