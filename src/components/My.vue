<template>
    <section>
        <div class="userk">
            <router-link to="headpic">
                <van-image round width="5rem" height="5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <h1 class="username">低调的风</h1>
            </router-link>
        </div>
        <van-cell-group>
            <van-cell title="我的收藏" value="更多" />
            <van-cell title="我的预约" value="内容" label="描述信息" />
        </van-cell-group>

        <van-cell-group>
            <van-grid :column-num="3">
                <van-grid-item>
                    <van-field v-model="obj.user" placeholder="请输入用户名" />
                </van-grid-item>
                <van-grid-item>
                    <van-field v-model="obj.age" placeholder="请输入年龄" />
                </van-grid-item>
                <van-grid-item>
                    <van-button type="primary" @click="adddata()">新增</van-button>
                </van-grid-item>
            </van-grid>
        </van-cell-group>

         <van-cell-group class="paddtb10 mart10">
        <table class="tablebor" cellspacing="0" cellpadding="0">
            <tr>
                <td>序号</td>
                <td>用户名</td>
                <td>年龄</td>
                <td>操作</td>
            </tr>
            <tr v-for="(item,index) in  tabdata" :key="index">
                <td>{{index+1}}</td>
                <td>{{item.user}}</td>
                <td>{{item.age}}</td>
                <td>
                    <van-button type="default" style="margin-right:10px" @click="del(index)">删除</van-button>
                    <van-button type="primary" @click="editbtn(item)">编辑</van-button>
                </td>
            </tr>
        </table>
         </van-cell-group>
        <!-- 弹窗 -->
        <div class="shadedialog" v-if="flag">
            <div class="dialog">
                <div class="w100F">
                    <p>编辑内容</p>
                    <van-field v-model="editdata.user" placeholder="请输入用户名" />
                </div>
                <div class="w100F">
                    <van-field v-model="editdata.age" placeholder="请输入年龄" />
                </div>
                <div class="w100F paddtb10" style="border:0">
                    <van-button type="default" style="margin-right:10px" @click="renewal()">更新</van-button>
                    <van-button type="primary" @click="flag=false">取消</van-button>
                </div>
            </div>
        </div>
        <!--引用button按钮组件  -->
            <Button :inputName="msgname" />
    </section>
</template>

<script>
import Button from './common/button'
    export default {
        name: '',
        data() {
            return {
                msgname:'我的',
                obj: {
                    user: '',
                    age: '',
                    id: ''
                },
                flag: false,
                editdata: {
                    user: '',
                    age: ''
                },
                tabdata: [{
                        user: '低调的风',
                        age: 30,
                        id: 1
                    },
                    {
                        user: '是德国首都',
                        age: 28,
                        id: 2
                    },
                    {
                        user: '风中时间',
                        age: 30,
                        id: 3
                    },
                ]
            }
        },
        components:{
            Button
        },
        methods: {
            adddata: function () {
                if (!this.obj.user || !this.obj.age){
                     this.$toast.text('请填写信息');
                     return
                }
                var _id = Math.max.apply(null, this.tabdata.map(function (v) {
                    return v.id
                })) + 1;
                this.tabdata.push({
                    user: this.obj.user,
                    age: this.obj.age,
                    id: _id
                });
                this.obj = {};
            },
            del: function (index) {
                this.tabdata.splice(index, 1);
            },
            editbtn: function (item) {
                this.flag = true;
                this.editdata = {
                    user: item.user,
                    age: item.age,
                    id: item.id
                }
            },
            renewal: function () {
                 window.console.log(1234);
                for (var i = 0; i < this.tabdata.length; i++) {
                    if (this.tabdata[i].id == this.editdata.id) {
                        window.console.log(222);
                        this.tabdata[i] = this.editdata;
                        this.flag = false;
                    }
                }
            }
        }
    }
</script>

<style scoped>
</style>