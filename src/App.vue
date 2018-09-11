<template>
    <div id="app">
        <el-container style="position: relative;height: 100%;width: 100%; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu v-for="item in navs" :index="item.id" :key="item.id">
                        <template slot="title"><i :class="item.class"></i>{{item.name}}</template>
                        <el-menu-item v-for="item in item.childeItem" :index="item.id" :key="item.id" @click="change_router(item.path)">
                            {{item.name}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container class="el-container">
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {

        },
        methods: {
            change_router: function (path) {
                this.$router.push(path)
            }
        },
        data: function () {
            return {
                navs: [
                    {
                        id: "1",
                        name: "Example",
                        class: "el-icon-more",
                        childeItem: [
                            {
                                id: "1-1",
                                name: "Table",
                                path: "table"
                            }, {
                                id: "1-2",
                                name: "Tree",
                                path: "tree"
                            }
                        ]
                    },
                    {
                        id: "2",
                        name: "Form",
                        class: "el-icon-edit-outline",
                        childeItem: [
                            {
                                id: "2-1",
                                name: "form",
                                path: "form"
                            }
                        ]
                    },
                    {
                        id: "3",
                        name: "菜单实例",
                        class: "el-icon-menu",
                        childeItem: [
                            {
                                id: "3-1",
                                name: "菜单1",
                                childeItem: [
                                    {
                                        id: "3-1-1",
                                        name: "菜单1",
                                    }, {
                                        id: "3-1-2",
                                        name: "菜单2",
                                    }
                                ]
                            }, {
                                id: "3-2",
                                name: "菜单2",
                                childeItem: [
                                    {
                                        id: "3-2-1",
                                        name: "菜单1",
                                        path: ""
                                    }, {
                                        id: "3-2-2",
                                        name: "菜单2",
                                        path: ""
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .el-container {
        height: 100vh;
    }
</style>