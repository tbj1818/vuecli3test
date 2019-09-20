<template>
  <div id="app">
    <section>
      <van-nav-bar title="标题" left-text="返回" @click-left="onClickLeft" left-arrow />
      <router-view></router-view>
      <Footer></Footer>
    </section>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'

  import Vue from 'vue';
  import {
    Toast
  } from 'vant';

  Vue.use(Toast);
  export default {
    name: 'app',
    components: {
      Footer
    },
    methods: {
      onClickLeft() {
        Toast('返回上一页');
        this.$router.go(-1);
      },
    }
  }
</script>

<style>
</style>