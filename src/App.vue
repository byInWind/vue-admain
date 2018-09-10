<template>
    <div id="app">
        <el-container style="position: relative;height: 100%;width: 100%; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1" v-for="item in items">
                        <template slot="title"><i class="el-icon-message"></i>Example</template>
                        <el-menu-item index="1-1">Table</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-menu"></i>菜单实例</template>
                        <el-submenu index="3-1">
                            <template slot="title">菜单1</template>
                            <el-menu-item index="3-1-1">菜单1-1</el-menu-item>
                            <el-menu-item index="3-1-2">菜单1-2</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-2">
                            <template slot="title">菜单2</template>
                            <el-menu-item index="3-2-1">菜单2-1</el-menu-item>
                            <el-submenu index="3-2-2">
                                <template slot="title">菜单2-2</template>
                                <el-menu-item index="3-2-2-1">菜单2-2-1</el-menu-item>
                                <el-menu-item index="3-2-2-2">菜单2-2-2</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-submenu>
                    <!--
                     <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>Example</template>
                        <el-menu-item index="1-1">Table</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-menu"></i>菜单实例</template>
                        <el-submenu index="3-1">
                            <template slot="title">菜单1</template>
                            <el-menu-item index="3-1-1">菜单1-1</el-menu-item>
                            <el-menu-item index="3-1-2">菜单1-2</el-menu-item>
                        </el-submenu>
                        <el-submenu index="3-2">
                            <template slot="title">菜单2</template>
                            <el-menu-item index="3-2-1">菜单2-1</el-menu-item>
                            <el-submenu index="3-2-2">
                                <template slot="title">菜单2-2</template>
                                <el-menu-item index="3-2-2-1">菜单2-2-1</el-menu-item>
                                <el-menu-item index="3-2-2-2">菜单2-2-2</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                    </el-submenu>
                    -->
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
                    <router-link tag="span" to="/home">to home</router-link>
                    <router-link to="/about">to about</router-link>
                    <router-view></router-view>
                    <HelloWorld></HelloWorld>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import HelloWorld from './components/BaseHeader.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        methods: {},
        data: function () {
            return {
                items: []
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