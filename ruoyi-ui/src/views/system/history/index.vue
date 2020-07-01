<template>
  <div>
    <div class="app-container " v-if="!open">
      <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
        <el-form-item label="用户手机号" prop="phone">
          <el-input
            v-model="queryParams.phone"
            placeholder="请输入用户手机号"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="提现金额" prop="money">
          <el-input
            v-model="queryParams.money"
            placeholder="请输入提现金额"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="审核状态" prop="status">
          <el-select v-model="queryParams.status" placeholder="请选择审核状态 " clearable size="small">
              <el-option
                v-for="item in options"
                :key="item.label"
                :label="item.value"
                :value="item.label">
              </el-option>
            </el-select>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
          <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <el-row :gutter="10" class="mb8">
        
        <el-col :span="1.5">
          <el-button
            type="warning"
            icon="el-icon-download"
            size="mini"
            @click="handleExport"
            v-hasPermi="['system:history:export']"
          >导出</el-button>
        </el-col>
      </el-row>

      <el-table v-loading="loading" :data="historyList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="用户名" align="center" prop="userName" />
        <el-table-column label="用户手机号" align="center" prop="phone" />
        <el-table-column label="支付宝账号" align="center" prop="zfbAccount" />
        <el-table-column label="支付宝姓名" align="center" prop="zfbName" />
        <el-table-column label="提现金额" align="center" prop="money" />
        <el-table-column label="审核状态" align="center" prop="status" >
         <template slot-scope="scope">
            <span :class="[{'color1':scope.row.status=='1'},{'color2':scope.row.status=='2'},{'color3':scope.row.status=='3'},{'color4':scope.row.status=='4'},]">
             {{ fy(scope.row.status)}}
            </span>
          </template>
        </el-table-column> 
        <el-table-column label="备注" align="center" prop="remark" />
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button v-if="scope.row.status =='1'"
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleUpdate(scope.row)"
              v-hasPermi="['system:history:edit']"
            >审核</el-button>
            <!-- <el-button
              size="mini"
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
              v-hasPermi="['system:history:remove']"
            >删除</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="queryParams.pageNum"
        :limit.sync="queryParams.pageSize"
        @pagination="getList"
      />

    <!-- 添加或修改提现流水对话框 -->
    <!-- <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户手机号" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入用户手机号" />
        </el-form-item>
        <el-form-item label="提现金额" prop="money">
          <el-input v-model="form.money" placeholder="请输入提现金额" />
        </el-form-item>
        <el-form-item label="审核状态 4.提现成功 3.审核失败 2:审核通过 1:提交申请">
          <el-radio-group v-model="form.status">
            <el-radio label="1">请选择字典生成</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="删除标志" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="请输入删除标志" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog> -->
  
    
      </div>
      <div v-if="open" class="app-container gul">
        <el-form ref="form" :model="form"  label-width="280px">
          <el-form-item label="用户名" >
            <span> {{form.userName}}</span>
          </el-form-item>
          <el-form-item label="用户手机号" >
            <span> {{form.phone}}</span>
          </el-form-item>
           <el-form-item label="用户支付宝号" >
            <span> {{form.zfbAccount}}</span>
          </el-form-item>
          <el-form-item label="用户支付宝姓名" >
            <span> {{form.zfbName}}</span>
          </el-form-item>
          <el-form-item label="提现金额" prop="money">
            <span> {{form.money}}</span>
          </el-form-item>
          <el-form-item label="邀请记录" prop="money">
            <el-table  :data="ufinlist" >
              <el-table-column label="用户" align="center" prop="phone" />
              <el-table-column label="购买商品" align="center" prop="goodName" />
              <el-table-column label="产生奖励金" align="center" prop="money" />
            </el-table>
          </el-form-item>
          <el-form-item label="审核">
             <el-radio v-model="radio" label="1">审核通过</el-radio>
              <el-radio v-model="radio" label="2">审核不通过</el-radio>
          </el-form-item>
          <el-form-item label="转账">
             <el-radio v-model="radio" label="1">已转账</el-radio>
              <el-radio v-model="radio" label="2">未转账</el-radio>
          </el-form-item>
          <el-form-item label="备注" prop="delFlag">
            <el-input type="textarea" v-model="form.remark" placeholder="请输入备注"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
          </div>
  </div>
</template>

<script>
import { yaolis,listHistory, getHistory, delHistory, addHistory, updateHistory, exportHistory } from "@/api/system/history";

export default {
  name: "History",
  data() {
    return {
      ufinlist:[],
      radio:'1',
       options: [{
          value: '待审核',
          label: '1'
        }, {
          value: '审核通过',
          label: '2'
        }, {
          value: '审核失败 ',
          label: '3'
        }, {
          value: '提现成功',
          label: '4'
        }],
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 总条数
      total: 0,
      // 提现流水表格数据
      historyList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        phone: undefined,
        money: undefined,
        status: undefined,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询提现流水列表 */
    fy(name){
      var fl;
      if(name =='1'){
         fl ='待审核'
      }else if(name =='2'){
        fl ='审核通过'
      }else if(name =='3'){
        fl ='审核失败'
      }else{
        fl ='提现成功'
      }
      return  fl;
    },
    getList() {
      this.loading = true;
      listHistory(this.queryParams).then(response => {
        this.historyList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.radio ='1'
      this.form = {
        userId: undefined,
        phone: undefined,
        money: undefined,
        status: "0",
        delFlag: undefined,
        createBy: undefined,
        createTime: undefined,
        updateBy: undefined,
        updateTime: undefined,
        remark: undefined
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.userId)
      this.single = selection.length!=1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加提现流水";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const userId = row.userId || this.ids
      const id = row.id || this.ids
      getHistory(id).then(response => {
        this.form = response.data;

        this.title = "修改提现流水";
          yaolis(userId).then(res => {
          console.log(response.rows)
          this.open = true;
          this.ufinlist= res.rows;
        });
      });
      
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.userId != undefined) {
            if (this.radio =='1') {
                this.form.status ='4'
            }else{
                this.form.status='3'
            }
            var parnm={"id":this.form.id , "status":this.form.status ,remark:this.form.remark }
            updateHistory(parnm).then(response => {
              if (response.code === 200) {
                this.msgSuccess("审核成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addHistory(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("新增成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const userIds = row.userId || this.ids;
      this.$confirm('是否确认删除提现流水编号为"' + userIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delHistory(userIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有提现流水数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportHistory(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>
<style lang="less" scoped>
  .color1{
    color: #1890ff;
  }
  .color2{
    color: #4CAF50;
  }
  .color3{
    color: #ff5722;
  }
  .color4{
    color: #9e9e9e;
  }
  .dialog-footer{
      text-align: center;
  }
  .gul{
    .el-form{
        width: 780px;
      }
  }
  
</style>