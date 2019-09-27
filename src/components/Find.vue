<template>
    <section>
        <nut-noticebar text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"></nut-noticebar>
        <!-- banner组件 -->
        <Banner :bannerdata="bannerdata"></Banner>
        <div class="flexcont">
            <van-sidebar v-model="activeKey">
            <van-sidebar-item :title="item" v-for="(item,index) in datalist" :key="index"
                    @click="showright(index)" />
            </van-sidebar>
            <div class="rightcont">
                <h1>{{rightcontent.desc}}</h1>
            </div>

            
        </div>
        <!-- 图片懒加载无限加载展示 -->
        <Findpic></Findpic>
    </section>
</template>

<script>
    import Findpic from "./common/findPic.vue";
    import Banner from "./common/banner.vue";
    export default {
        name: '',
        data() {
            return {
                activeKey: 0,
                bannerdata: {
                    images: [
                        'https://img20.360buyimg.com/pop/s590x470_jfs/t1/75542/27/8583/95756/5d652a26E19736ac0/dc3b97e38f3bb84a.jpg.webp',
                        'https://img30.360buyimg.com/pop/s590x470_jfs/t1/65536/3/8943/89400/5d6ce0d0E5fae0a85/32cadf7c8ff96dae.jpg.webp',
                    ],
                    bannerH: '150px',
                },
                datalist: [],
                rightcontent: '1',
                showcont:false
            }
        },
        components: {
            Findpic,
            Banner
        },
        methods: {
            getdata: function () {
                var that = this;
                console.log(this.$api.classify.classify);
                this.$http.get(this.$api.classify.classify, false).then((res) => {
                    console.log(res);
                    that.datalist = res.data.category;
                    this.showright(0)
                })
            },
            showright(index){
                 console.log(index);
                this.$http.get(this.$api.classify.classify, false).then((res) => {
                    console.log(res);
                    this.rightcontent=res.data.results['Android'][index];
                    console.log(this.rightcontent)
                })
            }
        },
        mounted: function () {
            this.getdata();
        }
    }
</script>