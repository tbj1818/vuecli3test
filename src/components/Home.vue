<template>
    <section>
        <!-- banner组件 -->
        <Banner :bannerdata="bannerdata"></Banner>
        <van-grid :column-num="3" class="iconlist" :border="false">
            <van-grid-item v-for="(item,index) in iconlist" :key="index" :to="item.url">
                <van-icon :name="item.icon" />
                <p>{{item.text}}</p>
            </van-grid-item>
        </van-grid>
        <!-- 图片懒加载无限加载展示 -->
        <Findpic></Findpic>
        <!-- 返回顶部 -->
        <nut-backtop :distance="400">
        </nut-backtop>
    </section>
</template>

<script>
    import Findpic from "./common/findPic.vue";
    import Banner from "./common/banner.vue";
    export default {
        name: '',
        data() {
            return {
                bannerdata: {
                    images: [
                        'https://img20.360buyimg.com/babel/s590x470_jfs/t1/51493/25/9615/95389/5d6e06c8Ef20c0dc8/fac5b4df2a2359d4.jpg.webp',
                        'https://img20.360buyimg.com/pop/s590x470_jfs/t1/79086/37/9254/70633/5d70e55bE759e46b8/41565d4d07fd5674.jpg.webp',
                        'https://img20.360buyimg.com/pop/s590x470_jfs/t1/75542/27/8583/95756/5d652a26E19736ac0/dc3b97e38f3bb84a.jpg.webp',
                        'https://img30.360buyimg.com/pop/s590x470_jfs/t1/65536/3/8943/89400/5d6ce0d0E5fae0a85/32cadf7c8ff96dae.jpg.webp',
                    ],
                    bannerH: '200px',
                },
                iconlist: [{
                        icon: 'gift-o',
                        text: '商品',
                        url: '/home'
                    },
                    {
                        icon: 'fire-o',
                        text: '热门',
                        url: '/order'
                    },
                    {
                        icon: 'gem-o',
                        text: '精品',
                        url: '/find'
                    },
                    {
                        icon: 'shop-o',
                        text: '好物',
                        url: '/my'
                    },
                    {
                        icon: 'medel-o',
                        text: '最棒',
                        url: '/my'
                    },
                    {
                        icon: 'flower-o',
                        text: '新品',
                        url: '/my'
                    },
                ],
                datalist: [],
                page: 10,
                limit: 1,
                isHasMore: true,
                isLoading: false,
                isErr: false,
                timer: null
            }
        },
        components: {
            Findpic,
            Banner
        },
        methods: {

        },

        mounted: function () {
            // this.getdata(10);
        }
    }
</script>

<style>
    .van-swipe {
        background: #39a9ed
    }

    .van-swipe-item img {
        width: 100%
    }

    .iconlist {
        margin: 0;
        padding: 10px 0;
        background: #FFF;
    }

    .iconlist p {
        margin: 0
    }

    .iconlist .van-icon {
        font-size: 40px;
        color: #f78448;
    }

    .van-image {
        width: 100%;
        height: 150px;
        overflow: hidden;
    }

    .van-icon__image {
        width: 100% !important;
        height: 2em !important;
    }
</style>