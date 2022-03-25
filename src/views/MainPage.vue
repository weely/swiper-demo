<template>
  <section class="main-page">
    <header class="main-header">谷米产品手册</header>
    <div class="mc-1">
    <section class="main-content">
      <div class="device-list">
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>9-90v<p>
          <p>通用基本款</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '1' } }"><button class="btn">阅读</button></router-link>
        </section>
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>9-90v<p>
          <p>远程锁车</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '2' } }"><button class="btn">阅读</button></router-link>
        </section>
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>9-90v<p>
          <p>通用基本款</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '3' } }"><button class="btn">阅读</button></router-link>
        </section>
      </div>

      <div class="grap-line"></div>

      <div class="device-list">
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>6000mAh<p>
          <p>强磁免安装</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '3' } }"><button class="btn">阅读</button></router-link>
        </section>
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>6000mAh<p>
          <p>强磁免安装</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '3' } }"><button class="btn">阅读</button></router-link>
        </section>
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>6000mAh<p>
          <p>强磁免安装</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '3' } }"><button class="btn">阅读</button></router-link>
        </section>
      </div>

      <div class="grap-line"></div>

      <div class="device-list">
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>6000mAh<p>
          <p>强磁免安装</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '3' } }"><button class="btn">阅读</button></router-link>
        </section>
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>6000mAh<p>
          <p>强磁免安装</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '3' } }"><button class="btn">阅读</button></router-link>
        </section>
        <section class="device-item">
          <img src="../assets/device-1.png" class="device-intro">
          <p>6000mAh<p>
          <p>强磁免安装</p>
          <router-link :to="{ path: '/device-intro', params: { deviceId: '3' } }"><button class="btn">阅读</button></router-link>
        </section>
      </div>
    </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
    }
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
  background: #000000;
  color: #FFFFFF;
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

  .device-item {
    font-size: 0.8125rem;
    font-weight: 400;
    color: #000000;
    line-height: 1.125rem;

    p {
      margin: 0.125rem auto;
    }

    img.device-intro {
      height: 12.5rem;
    }

    .btn {
      width: 100%;
      height: 2.25rem;
      background: #ffffff;
      border: 0.5px solid rgba(170,170,170,1);
      border-radius: 0.3125rem;
      margin-top: 0.5rem;
    }
  }
}

</style>