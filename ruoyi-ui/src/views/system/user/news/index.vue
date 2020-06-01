<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="新闻排序字段" prop="newsTitle">
        <el-input
          v-model="queryParams.newsTitle"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻类型" prop="newsType">
        <el-select v-model="queryParams.newsType" placeholder="请选择新闻类型" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="newsSeq">
        <el-input
          v-model="queryParams.newsSeq"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="newsBody">
        <el-input
          v-model="queryParams.newsBody"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="deleteTime">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.deleteTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择新闻排序字段">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="createUser">
        <el-input
          v-model="queryParams.createUser"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="updateUser">
        <el-input
          v-model="queryParams.updateUser"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="deleteUser">
        <el-input
          v-model="queryParams.deleteUser"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="isDelete">
        <el-input
          v-model="queryParams.isDelete"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="likeNumber">
        <el-input
          v-model="queryParams.likeNumber"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="viewNumber">
        <el-input
          v-model="queryParams.viewNumber"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="commentNumber">
        <el-input
          v-model="queryParams.commentNumber"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="newsPicture">
        <el-input
          v-model="queryParams.newsPicture"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param1">
        <el-input
          v-model="queryParams.param1"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param2">
        <el-input
          v-model="queryParams.param2"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param3">
        <el-input
          v-model="queryParams.param3"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param4">
        <el-input
          v-model="queryParams.param4"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param5">
        <el-input
          v-model="queryParams.param5"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param6">
        <el-input
          v-model="queryParams.param6"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param7">
        <el-input
          v-model="queryParams.param7"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param8">
        <el-input
          v-model="queryParams.param8"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param9">
        <el-input
          v-model="queryParams.param9"
          placeholder="请输入新闻排序字段"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="新闻排序字段" prop="param10">
        <el-input
          v-model="queryParams.param10"
          placeholder="请输入新闻排序字段"
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
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:news:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:news:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:news:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:news:export']"
        >导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="newsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="新闻排序字段" align="center" prop="id" />
      <el-table-column label="新闻排序字段" align="center" prop="newsTitle" />
      <el-table-column label="新闻类型" align="center" prop="newsType" />
      <el-table-column label="新闻排序字段" align="center" prop="newsSeq" />
      <el-table-column label="新闻排序字段" align="center" prop="newsBody" />
      <el-table-column label="新闻排序字段" align="center" prop="deleteTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.deleteTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="新闻排序字段" align="center" prop="createUser" />
      <el-table-column label="新闻排序字段" align="center" prop="updateUser" />
      <el-table-column label="新闻排序字段" align="center" prop="deleteUser" />
      <el-table-column label="新闻排序字段" align="center" prop="isDelete" />
      <el-table-column label="新闻排序字段" align="center" prop="likeNumber" />
      <el-table-column label="新闻排序字段" align="center" prop="viewNumber" />
      <el-table-column label="新闻排序字段" align="center" prop="commentNumber" />
      <el-table-column label="新闻排序字段" align="center" prop="newsPicture" />
      <el-table-column label="新闻排序字段" align="center" prop="param1" />
      <el-table-column label="新闻排序字段" align="center" prop="param2" />
      <el-table-column label="新闻排序字段" align="center" prop="param3" />
      <el-table-column label="新闻排序字段" align="center" prop="param4" />
      <el-table-column label="新闻排序字段" align="center" prop="param5" />
      <el-table-column label="新闻排序字段" align="center" prop="param6" />
      <el-table-column label="新闻排序字段" align="center" prop="param7" />
      <el-table-column label="新闻排序字段" align="center" prop="param8" />
      <el-table-column label="新闻排序字段" align="center" prop="param9" />
      <el-table-column label="新闻排序字段" align="center" prop="param10" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:news:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:news:remove']"
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

    <!-- 添加或修改【请填写功能名称】对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="新闻排序字段" prop="newsTitle">
          <el-input v-model="form.newsTitle" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻类型">
          <el-select v-model="form.newsType" placeholder="请选择新闻类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="newsSeq">
          <el-input v-model="form.newsSeq" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="newsBody">
          <el-input v-model="form.newsBody" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="deleteTime">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.deleteTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择新闻排序字段">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="createUser">
          <el-input v-model="form.createUser" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="updateUser">
          <el-input v-model="form.updateUser" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="deleteUser">
          <el-input v-model="form.deleteUser" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="isDelete">
          <el-input v-model="form.isDelete" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="likeNumber">
          <el-input v-model="form.likeNumber" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="viewNumber">
          <el-input v-model="form.viewNumber" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="commentNumber">
          <el-input v-model="form.commentNumber" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="newsPicture">
          <el-input v-model="form.newsPicture" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param1">
          <el-input v-model="form.param1" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param2">
          <el-input v-model="form.param2" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param3">
          <el-input v-model="form.param3" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param4">
          <el-input v-model="form.param4" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param5">
          <el-input v-model="form.param5" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param6">
          <el-input v-model="form.param6" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param7">
          <el-input v-model="form.param7" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param8">
          <el-input v-model="form.param8" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param9">
          <el-input v-model="form.param9" placeholder="请输入新闻排序字段" />
        </el-form-item>
        <el-form-item label="新闻排序字段" prop="param10">
          <el-input v-model="form.param10" placeholder="请输入新闻排序字段" />
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
import { listNews, getNews, delNews, addNews, updateNews, exportNews } from "@/api/system/news";

export default {
  name: "News",
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
      // 【请填写功能名称】表格数据
      newsList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        newsTitle: undefined,
        newsType: undefined,
        newsSeq: undefined,
        newsBody: undefined,
        deleteTime: undefined,
        createUser: undefined,
        updateUser: undefined,
        deleteUser: undefined,
        isDelete: undefined,
        likeNumber: undefined,
        viewNumber: undefined,
        commentNumber: undefined,
        newsPicture: undefined,
        param1: undefined,
        param2: undefined,
        param3: undefined,
        param4: undefined,
        param5: undefined,
        param6: undefined,
        param7: undefined,
        param8: undefined,
        param9: undefined,
        param10: undefined
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
    /** 查询【请填写功能名称】列表 */
    getList() {
      this.loading = true;
      listNews(this.queryParams).then(response => {
        this.newsList = response.rows;
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
        newsTitle: undefined,
        newsType: undefined,
        newsSeq: undefined,
        newsBody: undefined,
        createTime: undefined,
        updateTime: undefined,
        deleteTime: undefined,
        createUser: undefined,
        updateUser: undefined,
        deleteUser: undefined,
        isDelete: undefined,
        likeNumber: undefined,
        viewNumber: undefined,
        commentNumber: undefined,
        newsPicture: undefined,
        param1: undefined,
        param2: undefined,
        param3: undefined,
        param4: undefined,
        param5: undefined,
        param6: undefined,
        param7: undefined,
        param8: undefined,
        param9: undefined,
        param10: undefined
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
      this.title = "添加【请填写功能名称】";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getNews(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改【请填写功能名称】";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != undefined) {
            updateNews(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addNews(this.form).then(response => {
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
      this.$confirm('是否确认删除【请填写功能名称】编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delNews(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有【请填写功能名称】数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportNews(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>