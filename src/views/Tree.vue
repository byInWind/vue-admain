<template>
    <el-tree :data="data" :default-expanded-keys="[1,2,3,4]" node-key="id" :props="defaultProps"
             @node-click="handleNodeClick"></el-tree>
</template>

<script>
    export default {
        name: "Tree",
        data() {
            return {
                data: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            id: 4,
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            id: 5,
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            id: 6,
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            id: 7,
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            id: 8,
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    }
</script>

<style scoped>

</style>