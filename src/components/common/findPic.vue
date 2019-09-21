<template>
    <section>
        <van-cell-group class="paddtb10 contp10">
            <h1 class="htitle">图片懒加载无限加载展示</h1>
            <nut-row :gutter="10">
                <nut-infiniteloading @loadmore="onInfinite" :is-show-mod="true" :has-more="isHasMore"
                    :is-loading="isLoading" :threshold="200">
                    <nut-col :span="12" v-for="(item,index) in datalist" :key="index">
                        <div class="flex-content">
                            <img v-lazy="item.url"  alt="img" />
                            <p>{{item.who | filternum}}</p>
                        </div>
                    </nut-col>
                </nut-infiniteloading>
            </nut-row>
        </van-cell-group>
    </section>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                datalist: [],
                page: 10,
                limit: 1,
                isHasMore: true,
                isLoading: false,
                isErr: false,
                timer: null
            }
        },
        methods: {
            onInfinite() {
                this.isLoading = true;
                this.timer = setTimeout(() => {
                    if (this.page <= 50) {
                        this.getdata(this.page++);
                    } else {
                        this.isHasMore = false;
                    }
                    this.isLoading = false;
                }, 100);
            },
            getdata: function (num) {
                console.log(this.$api.Findpic.find);
                this.$http.get(this.$api.Findpic.find+ num +'/'+ this.limit,false).then((res) => {
                    console.log(res);
                     for (var i in res.data.results) {
                        var item = res.data.results[i];
                        this.datalist.push(item)
                    }
               })
            }
        },
        filters:{
                filternum(data){
                       return '美女'+data 
                }
        },
        destroyed() {
            clearTimeout(this.timer);
        },
        mounted: function () {
            this.getdata(10);
        }
    }
</script>

<style  scoped>
    .nut-col-12{width: 45%; margin: 2.5%}
</style>