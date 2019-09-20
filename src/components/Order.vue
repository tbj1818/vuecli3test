<template>
    <section class="contp10">
        <nut-searchbar placeText="请输入自定义文案" :hasSearchButton="false"></nut-searchbar>
        <van-card num="2" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg" />
        <Button :inputName="msgname" v-on:e-child="showmsgchild" />
    </section>
</template>

<script>
    import Button from './common/button';
    export default {
        name: '',
        data() {
            return {
                msgname: '购物车按钮'
            }
        },
        components:{
            Button
        },
        methods:{
            showmsgchild(data){
                window.console.log(data);
            }
        }
    }
</script>

<style lang="" scoped>

</style>