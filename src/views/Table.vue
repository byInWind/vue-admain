<template>
    <div>
        <h1>table</h1>
        <el-table
                :data="tableData"
                style="width: 100%"
        >
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    width="200">
            </el-table-column>
            <el-table-column width="180" label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="" :visible.sync="dialogTableVisible">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogTableVisible: false,
                tableData: [{
                    date: '2016-05-02',
                    name: '赵小虎',
                    address: '上海市普陀区金沙江路 18 弄'
                }, {
                    date: '2016-05-04',
                    name: '钱小虎',
                    address: '上海市普陀区金沙江路 117 弄'
                }, {
                    date: '2016-05-01',
                    name: '孙小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '李小虎',
                    address: '上海市普陀区金沙江路 15116 弄'
                }],
                form: {
                    name: '',
                    address: '',
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: "120px"
            }
        },
        methods: {
            handleEdit(index, row) {
                this.dialogTableVisible = true
                console.log(row);
                this.form.name = row.name;
                this.form.address = row.address;
            },
            handleDelete(index, row) {
                console.log(this.tableData, index, row);
                this.tableData.splice(index, 1)
            }
        }
    }</script>

<style scoped>
    h1 {
        text-align: center;
    }
</style>