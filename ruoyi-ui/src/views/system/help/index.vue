<template>
 <div>
   <div class="app-container" v-if="!open">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <!-- <el-form-item label="帮助中心名称" prop="helpName">
        <el-input
          v-model="queryParams.helpName"
          placeholder="请输入帮助中心名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="帮助中心标题" prop="title">
        <el-input
          v-model="queryParams.title"
          placeholder="请输入帮助中心标题"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="帮助中心内容" prop="body">
        <el-input
          v-model="queryParams.body"
          placeholder="请输入帮助中心内容"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item> -->
    </el-form>


    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:help:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:help:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:help:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:help:export']"
        >导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="helpList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="帮助中心名称" align="center" prop="helpName" />
      <el-table-column label="帮助中心标题" align="center" prop="title" />
     <!--  <el-table-column label="帮助中心内容" align="center" prop="body" /> -->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:help:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:help:remove']"
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

    <!-- 添加或修改帮助中心对话框 -->
   <!--  <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body> -->
    <div v-if="open" class="app-container" >
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="帮助中心名称" prop="helpName">
          <el-input v-model="form.helpName" placeholder="请输入帮助中心名称" />
        </el-form-item>
        <el-form-item label="帮助中心标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入帮助中心标题" />
        </el-form-item>
        <el-form-item label="帮助中心内容" prop="body">
         <!--  <el-input v-model="form.body" placeholder="请输入帮助中心内容" /> -->
         <quill-editor ref="myTextEditor"  v-model="form.body" :options="editorOption" style="height:400px;" @change="onEditorChange($event)"></quill-editor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-top: 100px">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </div>
<!--     </el-dialog>
 -->  
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import { listHelp, getHelp, delHelp, addHelp, updateHelp, exportHelp } from "@/api/system/help";
import { Base64 } from 'js-base64';

export default {
  name: "Help",
  data() {
    return {
      editorOption: {
         placeholder: '编辑帮助中心'
       },
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
      // 帮助中心表格数据
      helpList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        helpName: undefined,
        title: undefined,
        body: undefined
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

    /** 查询新闻列表 */
        onEditorChange({ editor, html, text }) {
                this.form.body = html;
        },

    /** 查询帮助中心列表 */
    getList() {
      this.loading = true;
      listHelp(this.queryParams).then(response => {
        /* response.rows.forEach((v, i) => {
                v.body =Base64.decode(v.body ); 
            })*/
        this.helpList = response.rows;
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
        helpName: undefined,
        title: undefined,
        body: undefined
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
      this.title = "添加帮助中心";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getHelp(id).then(response => {
        /*response.data.body =Base64.decode(response.data.body );*/
        this.form = response.data;
        this.open = true;
        this.title = "修改帮助中心";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.form.body  =Base64.encode(this.form.body);
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != undefined) {
            updateHelp(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addHelp(this.form).then(response => {
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
      this.$confirm('是否确认删除帮助中心编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delHelp(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有帮助中心数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportHelp(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  }
};
</script>
<style type="text/css" scoped>
  .ql-editor {
    height: 85% !important
  }
  
</style>