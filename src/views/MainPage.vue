<template>
  <section class="main-page">
    <header class="main-header">谷米产品手册</header>
    <div class="mc-1">
      <section class="main-content">
        <div class="device-list">
          <device-item-intro v-for="deviceType in deviceGroup1" :key="deviceType" :options="deviceIntros[deviceType]" class="dev-item"></device-item-intro>
          <section class="dev-item"></section>
        </div>
        <!-- <div class="grap-line"></div> -->

        <!-- <div class="device-list">
          <device-item-intro v-for="deviceType in deviceGroup2" :key="deviceType" :options="deviceIntros[deviceType]" class="dev-item"></device-item-intro>
        </div> -->
      </section>
    </div>
  </section>
</template>

<script>
import { deviceIntros } from '../devices/intro'
import DeviceItemIntro from '../components/DeviceItemIntro'

export default {
  name: 'Main',
  components: {
    DeviceItemIntro
  },
  data() {
    return {
      deviceGroup1: ['4G07', '4G01'],
    }
  },
  computed: {
    deviceIntros() {
      return Object.freeze(deviceIntros)
    }
  },
  mounted() {
    document.title = '谷米产品手册'
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  margin: 0;
  padding: 0;
  font-weight: 400;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.main-header {
  font-size: 1.0625rem;
  background: #FFFFFF;
  color: #000000;
  font-weight: 400;
  height: 5.625rem;
  padding-top: 3.5rem;
  box-sizing: border-box;
}

.mc-1 {
  width: 100%;
  height: calc(100% - 5.625rem);
  overflow-y: auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

.main-content {
  width: 22.25rem;
  margin: 0 auto;
}
.grap-line {
  border-bottom: solid 1px #AAAAAA;
}

.device-list {
  display: flex;
  padding: 1.25rem 0;
  justify-content: space-between;

  .dev-item {
    width: 32%;
  }
}

</style>