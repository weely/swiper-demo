<template>
  <section class="device-item">
    <img src="../assets/device-1.png" class="device-intro">
    <p>9-90v<p>
    <p>远程锁车</p>
    <router-link :to="{ path: '/device-intro', params: { deviceId: '2' } }"><button class="btn">阅读</button></router-link>
  </section>
</template>

<script>
export default {
  name: 'DeviceItemIntro',
  props: {
    imgIntro: {
      type: String,
      required: true
    },
    linkParams: {
      type: Object,
      required: true
    },
    options: {
      
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>