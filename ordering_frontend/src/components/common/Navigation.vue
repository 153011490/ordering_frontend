<template>
    <el-container style=" border: 1px solid #eee">
        <el-header>
            <span style="float: left; font-size: 25px;">点餐后台系统</span>
            <span style="float: right; font-size: 12px;">
                 <el-dropdown>
                <i class="el-icon-bell" style="margin-right: 15px;color: whitesmoke">消息中心</i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
                <i class="el-icon-user" style="margin-right: 15px;color: whitesmoke">个人中心</i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>修改资料</el-dropdown-item>
                    <el-dropdown-item>退出系统</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </span>
        </el-header>

        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu router>
                    <el-submenu :index="idx+''" v-for="(item, idx) in navMenuData" :key="idx">
                        <template slot="title"><i class="el-icon-message"></i>{{item.title}}</template>
                        <el-menu-item :index="subItem.path" v-for="subItem in item.menuItems" :key="subItem.path">{{subItem.title}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style>
    .el-header {
        background-color: #545c64;
        color: #ffd04b;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                navMenuData:[
                    {
                        title: '商品管理',
                        menuItems:[
                            {
                                title: '查看商品',
                                path:'/login'
                            },
                            {
                                title: '添加商品',
                                path:'/goods/addition'
                            },
                            {
                                title: '更新商品',
                                path:'/goods/updation'
                            },
                            {
                                title: '删除商品',
                                path:'/goods/deletion'
                            },
                        ]
                    },
                    {
                        title: '订单管理',
                        menuItems:[
                            {
                                title: '查看订单',
                                path:'/order/list'
                            }
                        ]
                    },
                    {
                        title: '营业额管理',
                        menuItems:[
                            {
                                title: '查看营业额',
                                path:'/turnover/list'
                            },
                            {
                                title: '分析营业额',
                                    path:'/turnover/analysic'
                            }
                        ]
                    }
                ]
            }
        },
        created () {
            this.onRouteChanged()
        },
        methods: {
            onRouteChanged () {
                let that = this
                that.path  = that.$route.path
            }
        },
        watch: {
            // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
            '$route': 'onRouteChanged'
        }
    };
</script>