<template>
  <div class="app-container">
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
      <el-form-item label="我的邀请码" prop="inviteCode">
        <el-input
          v-model="queryParams.inviteCode"
          placeholder="请输入我的邀请码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="总邀请人数" prop="inviteNumberTotal">
        <el-input
          v-model="queryParams.inviteNumberTotal"
          placeholder="请输入总邀请人数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="总金额" prop="inviteMoneyTotal">
        <el-input
          v-model="queryParams.inviteMoneyTotal"
          placeholder="请输入总金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="未提现金额" prop="inviteMoneyNot">
        <el-input
          v-model="queryParams.inviteMoneyNot"
          placeholder="请输入未提现金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="已提现金额" prop="inviteMoneyAlready">
        <el-input
          v-model="queryParams.inviteMoneyAlready"
          placeholder="请输入已提现金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="支付宝账户姓名" prop="zfbName">
        <el-input
          v-model="queryParams.zfbName"
          placeholder="请输入支付宝账户姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="支付宝账户" prop="zfbAccount">
        <el-input
          v-model="queryParams.zfbAccount"
          placeholder="请输入支付宝账户"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <!-- <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:invite:add']"
        >新增</el-button>
      </el-col> -->
      <!-- <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:invite:edit']"
        >修改</el-button>
      </el-col> -->
      <!-- <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:invite:remove']"
        >删除</el-button>
      </el-col> -->
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:invite:export']"
        >导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="inviteList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="用户ID" align="center" prop="userId" />
      <el-table-column label="用户手机号" align="center" prop="phone" />
      <el-table-column label="我的邀请码" align="center" prop="inviteCode" />
      <el-table-column label="总邀请人数" align="center" prop="inviteNumberTotal" />
      <el-table-column label="总金额" align="center" prop="inviteMoneyTotal" />
      <el-table-column label="未提现金额" align="center" prop="inviteMoneyNot" />
      <el-table-column label="已提现金额" align="center" prop="inviteMoneyAlready" />
      <el-table-column label="支付宝账户姓名" align="center" prop="zfbName" />
      <el-table-column label="支付宝账户" align="center" prop="zfbAccount" />
      <el-table-column label="备注" align="center" prop="remark" />
      <!-- <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:invite:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:invite:remove']"
          >删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改用户邀请对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户手机号" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入用户手机号" />
        </el-form-item>
        <el-form-item label="我的邀请码" prop="inviteCode">
          <el-input v-model="form.inviteCode" placeholder="请输入我的邀请码" />
        </el-form-item>
        <el-form-item label="总邀请人数" prop="inviteNumberTotal">
          <el-input v-model="form.inviteNumberTotal" placeholder="请输入总邀请人数" />
        </el-form-item>
        <el-form-item label="总金额" prop="inviteMoneyTotal">
          <el-input v-model="form.inviteMoneyTotal" placeholder="请输入总金额" />
        </el-form-item>
        <el-form-item label="未提现金额" prop="inviteMoneyNot">
          <el-input v-model="form.inviteMoneyNot" placeholder="请输入未提现金额" />
        </el-form-item>
        <el-form-item label="已提现金额" prop="inviteMoneyAlready">
          <el-input v-model="form.inviteMoneyAlready" placeholder="请输入已提现金额" />
        </el-form-item>
        <el-form-item label="支付宝账户姓名" prop="zfbName">
          <el-input v-model="form.zfbName" placeholder="请输入支付宝账户姓名" />
        </el-form-item>
        <el-form-item label="支付宝账户" prop="zfbAccount">
          <el-input v-model="form.zfbAccount" placeholder="请输入支付宝账户" />
        </el-form-item>
        <el-form-item label="删除标志" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="请输入删除标志" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listInvite, getInvite, delInvite, addInvite, updateInvite, exportInvite } from "@/api/system/invite";

export default {
  name: "Invite",
  data() {
    return {
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
      // 用户邀请表格数据
      inviteList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        phone: undefined,
        inviteCode: undefined,
        inviteNumberTotal: undefined,
        inviteMoneyTotal: undefined,
        inviteMoneyNot: undefined,
        inviteMoneyAlready: undefined,
        zfbName: undefined,
        zfbAccount: undefined,
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
    /** 查询用户邀请列表 */
    getList() {
      this.loading = true;
      listInvite(this.queryParams).then(response => {
        this.inviteList = response.rows;
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
        userId: undefined,
        phone: undefined,
        inviteCode: undefined,
        inviteNumberTotal: undefined,
        inviteMoneyTotal: undefined,
        inviteMoneyNot: undefined,
        inviteMoneyAlready: undefined,
        zfbName: undefined,
        zfbAccount: undefined,
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
      this.title = "添加用户邀请";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const userId = row.userId || this.ids
      getInvite(userId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改用户邀请";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.userId != undefined) {
            updateInvite(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addInvite(this.form).then(response => {
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
      this.$confirm('是否确认删除用户邀请编号为"' + userIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delInvite(userIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有用户邀请数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportInvite(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>