<template>
     <van-swipe :style="{height:bannerdata.bannerH}" :autoplay="3000" indicator-color="white">
            <van-swipe-item  v-for="(image, index) in bannerdata.images" :key="index"><img :src="image" /></van-swipe-item>
     </van-swipe>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                
            }
        },
        props:['bannerdata']
    }
</script>

<style lang="\" scoped>
    
</style>