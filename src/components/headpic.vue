<template>
    <section class="contp10">
        <h1>头像上传</h1>
        <!--头像上传  -->
        <nut-imagepicker @imgMsg="imgMsg" :width="120" :height="120" :margin="10" :imgList="imgList2">
        </nut-imagepicker>
    </section>
</template>

<script>
    export default {
        name: '',
        data() {
            return {

            }
        }
    }
</script>

<style lang="" scoped>

</style>