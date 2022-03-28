<template>
  <section class="device-item">
    <!-- <img :src="imgSrc" class="device-intro"> -->
    <img v-lazy="imgSrc" class="device-intro">
    <p>{{ options.tag1 }}<p>
    <p>{{ options.tag2 }}</p>
    <router-link :to="{ path: '/device-intro', query: { deviceType: options.value } }"><button class="btn">阅读</button></router-link>
  </section>
</template>

<script>
export default {
  name: 'DeviceItemIntro',
  props: {
    options: {
      type: Object,
      required: true,
      default: () => ({
        tag1: 'tag1',
        tag2: 'tag2',
        img: '',
        value: ''
      })
    }
  },
  computed: {
    imgSrc() {
      return this.options?.imgPath && require('@/' + this.options.imgPath)
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
    width: 100%;
    height: 12.5rem;
  }

  a {
    color: #000000;
    text-decoration: none;
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