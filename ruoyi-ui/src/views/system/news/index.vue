<template>
  <div>
    <div class="app-container" v-if="!open">
      <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
        <el-form-item label="新闻标题" prop="newsTitle">
          <el-input
            v-model="queryParams.newsTitle"
            placeholder="请输入新闻标题"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="新闻类型" prop="newsType">
          <el-select v-model="queryParams.newsType" placeholder="请选择新闻类型" clearable size="small">
            <el-option label="航空公司" value="航空公司" />
            <el-option label="航空院校" value="航空院校" />
            <el-option label="招聘信息" value="招聘信息" />
            <el-option label="应试技巧" value="应试技巧" />
          </el-select>
        </el-form-item>
        <el-form-item label="新闻排序" prop="newsSeq">
          <el-input
            v-model="queryParams.newsSeq"
            placeholder="请输入新闻排序"
            clearable
            size="small"
            @keyup.enter.native="handleQuery"
          />
        </el-form-item>
        <el-form-item label="新闻体" prop="newsBody">
          <el-input
            v-model="queryParams.newsBody"
            placeholder="请输入新闻体"
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
        <el-table-column label="id" align="center" prop="id" />
        <el-table-column label="新闻标题" align="center" prop="newsTitle" />
        <el-table-column label="新闻类型" align="center" prop="newsType" />
        <el-table-column label="新闻排序" align="center" prop="newsSeq" />
       <!--  <el-table-column label="新闻体" align="center" prop="newsBody" /> -->
        <el-table-column label="是否展示" align="center" prop="isDelete" />
        <el-table-column label="收藏数量" align="center" prop="likeNumber" />
        <el-table-column label="查看数量" align="center" prop="viewNumber" />
        <el-table-column label="评论数量" align="center" prop="commentNumber" />
        <el-table-column label="新闻图片" align="center" prop="newsPicture">
           <!-- <template slot-scope="scope">
               {{scope.row.newsPicture}}
               　<img :src="scope.row.newsPicture" 
              <img src=""  width="150" height="100"  />
           </template> -->
          <template slot-scope="scope">
            <el-popover placement="right" title="" trigger="hover">
              <img :src="scope.row.newsPicture" width="150" height="100"  />
              <img slot="reference" :src="scope.row.newsPicture" :alt="scope.row.newsPicture" style="max-height: 50px;max-width: 130px">
            </el-popover>
          </template>
        </el-table-column>
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
      <!-- 添加或修改新闻对话框 -->
    </div>
    <div v-if="open" class="app-container" >
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="新闻标题" prop="newsTitle">
          <el-input v-model="form.newsTitle" placeholder="请输入新闻标题" />
        </el-form-item>
        <el-form-item label="新闻类型">
          <el-select v-model="form.newsType" placeholder="请选择新闻类型">
            <el-option label="航空公司" value="航空公司" />
            <el-option label="航空院校" value="航空院校" />
            <el-option label="招聘信息" value="招聘信息" />
            <el-option label="应试技巧" value="应试技巧" />
          </el-select>
        </el-form-item>
        <el-form-item label="新闻排序" prop="newsSeq">
          <el-input v-model="form.newsSeq" placeholder="请输入新闻排序" />
        </el-form-item>
        <el-form-item label="新闻体" prop="newsBody">
          <quill-editor ref="myTextEditor"  v-model="form.newsBody" :options="editorOption" style="height:600px;" @change="onEditorChange($event)"></quill-editor>
        </el-form-item>
        <el-form-item label="是否展示" prop="isDelete">
          <el-input v-model="form.isDelete" placeholder="请输入是否展示" />
        </el-form-item>
        <el-form-item label="收藏数量" prop="likeNumber">
          <el-input v-model="form.likeNumber" placeholder="请输入收藏数量" />
        </el-form-item>
        <el-form-item label="查看数量" prop="viewNumber">
          <el-input v-model="form.viewNumber" placeholder="请输入查看数量" />
        </el-form-item>
        <el-form-item label="评论数量" prop="commentNumber">
          <el-input v-model="form.commentNumber" placeholder="请输入评论数量" />
        </el-form-item>
        <el-form-item label="新闻图片" prop="newsPicture">
          <el-input v-model="form.newsPicture" placeholder="请输入新闻图片" />
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
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import { listNews, getNews, delNews, addNews, updateNews, exportNews } from "@/api/system/news";
import { Base64 } from 'js-base64';
export default {
  name: "News",
  data() {
    return {
       editorOption: {
         placeholder: '编辑文章内容'
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
      // 新闻表格数据
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
    /** 查询新闻列表 */
    onEditorChange({ editor, html, text }) {
            this.form.newsBody = html;
    },
    getList() {
      this.loading = true;
      listNews(this.queryParams).then(response => {
          response.rows.forEach((v, i) => {
                v.newsBody =Base64.decode(v.newsBody ); 
            })
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
      this.title = "添加新闻";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getNews(id).then(response => {
        response.data.newsBody =Base64.decode(response.data.newsBody ); 
        this.form = response.data;
        this.open = true;
        this.title = "修改新闻";
      });
    },
    /** 提交按钮 */
    submitForm: function() {

      this.form.newsBody  =Base64.encode(this.form.newsBody );
      console.log(this.form.newsBody )
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
      this.$confirm('是否确认删除新闻编号为"' + ids + '"的数据项?', "警告", {
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
      this.$confirm('是否确认导出所有新闻数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportNews(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    }
  },
  components: {
    quillEditor
  }
};
</script>