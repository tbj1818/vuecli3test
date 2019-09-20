<template>
    <section class="w90">
        <nut-button block shape="circle" @click="emitMsg()">
            {{inputName}}
        </nut-button>
    </section>
</template>

<script>
  import Vue from 'vue';
  import {
    Toast
  } from 'vant';

  Vue.use(Toast);
    export default {
        name: '',
        data() {
            return {
                msg:'我的家在button子组件'
            }
        },
        methods:{
            emitMsg(){
                this.$emit('e-child',this.msg)          //发射给父组件
                //  Toast('我是');
            }
        },
       // 接受父组件的值
        props:  ['inputName']
    }
</script>

<style lang="" scoped>

</style>