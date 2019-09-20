<template>
  <section>
    <!-- 固定底部 -->
    <div class="nut-tabbar my-tabbar bottom">
      <a href="javascript:;" class="tabbar-nav" v-for="(item,index) in tabList3" :key="index">
        <router-link :to="item.to">
          <span class="icon-box">
            <div class="icon">
              <i class="van-icon " :class="item.icon"></i>
            </div>
            <span class="tabbar-nav-word">{{item.tabTitle}}</span>
          </span>
        </router-link>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        active: 0,
        tabList3: [{
            'tabTitle': '主页',
            'icon': 'van-icon-bag-o',
            'to': 'home'
          },
          {
            'tabTitle': '发现',
            'icon': 'van-icon-eye-o',
            'to': 'find'
          },
          {
            'tabTitle': '购物车',
            'icon': 'van-icon-shopping-cart-o',
            'to': 'order'
          },
          {
            'tabTitle': '我的',
            'icon': 'van-icon-manager-o',
            'to': 'my'
          }
        ]
      }
    },
    methods: {
      tabSwitch3: function (value, index) {
        window.console.log(index);
      }
    },
    props: {
      msg: String
    }
  }
</script>