<template>
   <div>
  <div class="app-container" v-if="!open">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="用户ID" prop="userId">
        <el-input
          v-model="queryParams.userId"
          placeholder="请输入用户ID"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!-- <el-form-item label="商品名称" prop="goodName">
        <el-input
          v-model="queryParams.goodName"
          placeholder="请输入商品名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item label="图片地址" prop="goodPath">
        <el-input
          v-model="queryParams.goodPath"
          placeholder="请输入图片地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!-- <el-form-item label="商品id" prop="goodId">
        <el-input
          v-model="queryParams.goodId"
          placeholder="请输入商品id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
     <!--  <el-form-item label="商品类型" prop="goodType">
        <el-select v-model="queryParams.goodType" placeholder="请选择商品类型" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item> -->
      <!-- <el-form-item label="消费金额" prop="payMoney">
        <el-input
          v-model="queryParams.payMoney"
          placeholder="请输入消费金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <!-- <el-form-item label="服务进度" prop="serviceProcess">
        <el-input
          v-model="queryParams.serviceProcess"
          placeholder="请输入服务进度"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
     <!--  <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:order:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:order:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:order:remove']"
        >删除</el-button>
      </el-col> -->
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:order:export']"
        >导出</el-button>
      </el-col>
    </el-row>
    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="订单编号" align="center" prop="orderId" />
      <el-table-column label="用户名" align="center" prop="userName" />
      <el-table-column label="商品名称" align="center" prop="goodName" />
      <el-table-column label="商品图片" align="center" prop="goodPath">
      <template slot-scope="scope">
          <el-popover placement="right" title="" trigger="hover">
            <img :src="scope.row.goodPath" width="150" height="100"  />
            <img slot="reference" :src="scope.row.goodPath" :alt="scope.row.goodPath" style="max-height: 50px;max-width: 130px">
          </el-popover>
        </template>
       </el-table-column>
      <el-table-column label="用户手机号" align="center" prop="phone" />
      <el-table-column label="商品id" align="center" prop="goodId" />
      <el-table-column label="商品类型" align="center" prop="goodType" />
      <el-table-column label="消费金额" align="center" prop="payMoney" />
      <el-table-column label="订单进度" align="center" prop="process" >
         <template slot-scope="scope">
            <span :class="[{'color1':scope.row.process=='1'},{'color2':scope.row.process=='2'},{'color3':scope.row.process=='3'},{'color4':scope.row.process=='4'},]">
             {{ fy(scope.row.process)}}
            </span>
          </template>
        </el-table-column> 
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:order:edit']"
          >订单详情</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:order:remove']"
          >删除</el-button>
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
  </div>
  <div class="app-container" v-if="open" style="">
      <el-form ref="form" :model="form" :rules="rules" label-width="280px">
        <el-form-item label="用户账号" prop="userName">
          <span> {{form.userName}}</span>
        </el-form-item>
        <el-form-item label="用户手机号" prop="phone">
           <span> {{form.phone}}</span>
        </el-form-item>
        <el-form-item label="订单编号" prop="orderId">
           <span> {{form.orderId}}</span>
        </el-form-item>
        <el-form-item label="商品名称" prop="goodName">
           <span> {{form.goodName}}</span>
        </el-form-item>
        <el-form-item label="消费金额" prop="goodName">
           <span> {{form.payMoney}}</span>
        </el-form-item>
        <el-form-item label="处理进度" prop="delFlag">
          <div class="block">
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color=" activity.value ==form.serviceProcess ?activity.color:''"
                :size="activity.size"
               >
               <span   @click="cktileg(activity)">  {{activity.content}}</span>
               
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
            <el-input v-model="form.remark"  type="textarea"  placeholder="输入备注" />
        </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center;">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
  </div>
  </div>
</template>

<script>
import { listOrder, getOrder, delOrder, addOrder, updateOrder, exportOrder } from "@/api/system/order";

export default {
  name: "Order",
  data() {
    return {
      activities: [{
          content: '订单创建',
          timestamp: '2018-04-12 20:46',
          color: '#0bbd87',
          size: 'large',
          value: '1',
        }, {
          content: '信息提交',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87',
          size: 'large',
          value: '2',
        }, {
          content: '简历制作',
           color: '#0bbd87',
          size: 'large',
          value: '3',
        }, {
          content: '公司选择',
           color: '#0bbd87',
          size: 'large',
          value: '4',
        }, {
          content: '简历提交',
           color: '#0bbd87',
          size: 'large',
          value: '5',
        }, {
          content: '获取面试通知',
           color: '#0bbd87',
          size: 'large',
          value: '6',
        }, {
          content: '参加面试',
           color: '#0bbd87',
          size: 'large',
          value: '7',
        }, {
          content: '参加体检',
           color: '#0bbd87',
          size: 'large',
          value: '8',
        }, {
          content: '入职',
           color: '#0bbd87',
          size: 'large',
          value: '9',
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
      // 用户商品表格数据
      orderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: undefined,
        goodName: undefined,
        goodPath: undefined,
        goodId: undefined,
        goodType: undefined,
        payMoney: undefined,
        serviceProcess: undefined,
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
    cktileg(item){
        this.form.serviceProcess =item.value;
    },
    fy(name){
      var fl;
      if(name =='1'){
         fl ='待确认'
      }else if(name =='2'){
        fl ='服务中'
      }else if(name =='3'){
        fl ='已完成'
      }
      return  fl;
    },
    /** 查询用户商品列表 */
    getList() {
      this.loading = true;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
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
      this.form = {
        id: undefined,
        userId: undefined,
        goodName: undefined,
        goodPath: undefined,
        goodId: undefined,
        goodType: undefined,
        payMoney: undefined,
        serviceProcess: undefined,
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
      this.ids = selection.map(item => item.id)
      this.single = selection.length!=1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加用户商品";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改用户商品";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != undefined) {
            if (this.form.serviceProcess != '1') {
                this.form.process ='2'
                if(this.form.serviceProcess == '9'){
                    this.form.process ='3'
                }
            }
            updateOrder(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addOrder(this.form).then(response => {
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
      const ids = row.id || this.ids;
      this.$confirm('是否确认删除用户商品编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delOrder(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有用户商品数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportOrder(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>
<style type="text/css" scoped>
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
</style>