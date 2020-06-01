<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" label-width="68px">
      <el-form-item label="商品标题" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入商品标题"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!-- <el-form-item label="简述" prop="sketch">
        <el-input
          v-model="queryParams.sketch"
          placeholder="请输入简述"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item label="关键字" prop="keywords">
        <el-input
          v-model="queryParams.keywords"
          placeholder="请输入商品关键字"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <!-- <el-form-item label="商品排序" prop="seq">
        <el-input
          v-model="queryParams.seq"
          placeholder="请输入商品排序"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品图片地址" prop="picture">
        <el-input
          v-model="queryParams.picture"
          placeholder="请输入商品图片地址"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品浏览量" prop="view">
        <el-input
          v-model="queryParams.view"
          placeholder="请输入商品浏览量"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="评分" prop="matchPoint">
        <el-input
          v-model="queryParams.matchPoint"
          placeholder="请输入评分"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品总价" prop="price">
        <el-input
          v-model="queryParams.price"
          placeholder="请输入商品总价"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品标价" prop="marketPrice">
        <el-input
          v-model="queryParams.marketPrice"
          placeholder="请输入商品标价"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商品库存" prop="stock">
        <el-input
          v-model="queryParams.stock"
          placeholder="请输入商品库存"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="销售数量" prop="sales">
        <el-input
          v-model="queryParams.sales"
          placeholder="请输入销售数量"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="商户ID" prop="merchantId">
        <el-input
          v-model="queryParams.merchantId"
          placeholder="请输入商户ID"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="删除时间" prop="deleteTime">
        <el-date-picker clearable size="small" style="width: 200px"
          v-model="queryParams.deleteTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择删除时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="创建人" prop="createUser">
        <el-input
          v-model="queryParams.createUser"
          placeholder="请输入创建人"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="更新人" prop="updateUser">
        <el-input
          v-model="queryParams.updateUser"
          placeholder="请输入更新人"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="删除人" prop="deleteUser">
        <el-input
          v-model="queryParams.deleteUser"
          placeholder="请输入删除人"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否上架" prop="isDelete">
        <el-input
          v-model="queryParams.isDelete"
          placeholder="请输入是否上架"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="是否上架" prop="merchant">
        <el-input
          v-model="queryParams.merchant"
          placeholder="请输入是否上架"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="佣金率" prop="commissionrate">
        <el-input
          v-model="queryParams.commissionrate"
          placeholder="请输入佣金率"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="佣金金额" prop="invitemoney">
        <el-input
          v-model="queryParams.invitemoney"
          placeholder="请输入佣金金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="预留字段1" prop="param1">
        <el-input
          v-model="queryParams.param1"
          placeholder="请输入预留字段1"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="预留字段2" prop="param2">
        <el-input
          v-model="queryParams.param2"
          placeholder="请输入预留字段2"
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
      <el-col :span="1.5">
        <el-button
          type="primary"
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:goods:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:goods:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:goods:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:goods:export']"
        >导出</el-button>
      </el-col>
    </el-row>

    <el-table v-loading="loading" :data="goodsList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="id" />
      <el-table-column label="商品标题" align="center" prop="name" />
      <el-table-column label="简述" align="center" prop="sketch" />
      <el-table-column label="商品关键字" align="center" prop="keywords" />
      <el-table-column label="商品排序" align="center" prop="seq" />
      <el-table-column label="商品图片地址" align="center" prop="picture" >
      <template slot-scope="scope">
          <el-popover placement="right" title="" trigger="hover">
            <img :src="scope.row.picture" width="150" height="100"  />
            <img slot="reference" :src="scope.row.picture" :alt="scope.row.picture" style="max-height: 50px;max-width: 130px">
          </el-popover>
        </template>
       </el-table-column>
      <el-table-column label="商品浏览量" align="center" prop="view" />
      <el-table-column label="评分" align="center" prop="matchPoint" />
      <el-table-column label="商品总价" align="center" prop="price" />
      <el-table-column label="商品标价" align="center" prop="marketPrice" />
      <el-table-column label="商品库存" align="center" prop="stock" />
      <el-table-column label="销售数量" align="center" prop="sales" />
      <!-- <el-table-column label="商户ID" align="center" prop="merchantId" />
      <el-table-column label="删除时间" align="center" prop="deleteTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.deleteTime, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="创建人" align="center" prop="createUser" />
      <el-table-column label="更新人" align="center" prop="updateUser" />
      <el-table-column label="删除人" align="center" prop="deleteUser" />
      <el-table-column label="是否上架" align="center" prop="isDelete" />
      <el-table-column label="是否上架" align="center" prop="merchant" /> -->
      <el-table-column label="佣金率" align="center" prop="commissionrate" />
      <el-table-column label="佣金金额" align="center" prop="invitemoney" />
      <!-- <el-table-column label="预留字段1" align="center" prop="param1" />
      <el-table-column label="预留字段2" align="center" prop="param2" /> -->
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:goods:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:goods:remove']"
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

    <!-- 添加或修改商品对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="商品标题" prop="name">
          <el-input v-model="form.name" placeholder="请输入商品标题" />
        </el-form-item>
        <el-form-item label="简述" prop="sketch">
          <el-input v-model="form.sketch" placeholder="请输入简述" />
        </el-form-item>
        <el-form-item label="商品关键字" prop="keywords">
          <el-input v-model="form.keywords" placeholder="请输入商品关键字" />
        </el-form-item>
        <el-form-item label="商品排序" prop="seq">
          <el-input v-model="form.seq" placeholder="请输入商品排序" />
        </el-form-item>

        <el-form-item label="图片上传">
        <el-upload id='imgId'
            class="upload-demo"
            ref="upload"
            action="/dev-api/system/goods/uploadGoods"
                        :beforeUpload="beforeAvatarUpload"
                        :on-success = "handleSuccess"
                        :on-error = "alertError"
                        :auto-upload = 'false'
                        :data="fileParam"
                        list-type="picture"
                        :file-list="fileList"
                        :limit = '1'
                        :on-remove = "handleRemove"
                        accept=".jpg, .png">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload()" >上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload>

        </el-form-item>
        <el-form-item label="商品图片地址" prop="picture">
          <el-input v-model="form.picture" readonly="readonly" disabled="disabled" placeholder="请输入商品图片地址" />
        </el-form-item>
        <el-form-item label="商品浏览量" prop="view">
          <el-input v-model="form.view" placeholder="请输入商品浏览量" />
        </el-form-item>
        <el-form-item label="评分" prop="matchPoint">
          <el-input v-model="form.matchPoint" placeholder="请输入评分" />
        </el-form-item>
        <el-form-item label="商品总价" prop="price">
          <el-input v-model="form.price" placeholder="请输入商品总价" />
        </el-form-item>
        <el-form-item label="商品标价" prop="marketPrice">
          <el-input v-model="form.marketPrice" placeholder="请输入商品标价" />
        </el-form-item>
        <el-form-item label="商品库存" prop="stock">
          <el-input v-model="form.stock" placeholder="请输入商品库存" />
        </el-form-item>
        <el-form-item label="销售数量" prop="sales">
          <el-input v-model="form.sales" placeholder="请输入销售数量" />
        </el-form-item>
       <!--  <el-form-item label="商户ID" prop="merchantId">
          <el-input v-model="form.merchantId" placeholder="请输入商户ID" />
        </el-form-item>
        <el-form-item label="删除时间" prop="deleteTime">
          <el-date-picker clearable size="small" style="width: 200px"
            v-model="form.deleteTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择删除时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="创建人" prop="createUser">
          <el-input v-model="form.createUser" placeholder="请输入创建人" />
        </el-form-item>
        <el-form-item label="更新人" prop="updateUser">
          <el-input v-model="form.updateUser" placeholder="请输入更新人" />
        </el-form-item>
        <el-form-item label="删除人" prop="deleteUser">
          <el-input v-model="form.deleteUser" placeholder="请输入删除人" />
        </el-form-item>
        <el-form-item label="是否上架" prop="isDelete">
          <el-input v-model="form.isDelete" placeholder="请输入是否上架" />
        </el-form-item>
        <el-form-item label="是否上架" prop="merchant">
          <el-input v-model="form.merchant" placeholder="请输入是否上架" />
        </el-form-item> -->
        <el-form-item label="佣金率" prop="commissionrate">
          <el-input v-model="form.commissionrate" placeholder="请输入佣金率" />
        </el-form-item>
        <el-form-item label="佣金金额" prop="invitemoney">
          <el-input v-model="form.invitemoney" placeholder="请输入佣金金额" />
        </el-form-item>
       <!--  <el-form-item label="预留字段1" prop="param1">
          <el-input v-model="form.param1" placeholder="请输入预留字段1" />
        </el-form-item>
        <el-form-item label="预留字段2" prop="param2">
          <el-input v-model="form.param2" placeholder="请输入预留字段2" />
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listGoods, getGoods, delGoods, addGoods, updateGoods, exportGoods } from "@/api/system/goods";

export default {
  name: "Goods",
  props: ['image', 'clearList'],
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
      // 商品表格数据
      goodsList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: undefined,
        sketch: undefined,
        keywords: undefined,
        seq: undefined,
        picture: undefined,
        view: undefined,
        matchPoint: undefined,
        price: undefined,
        marketPrice: undefined,
        stock: undefined,
        sales: undefined,
        merchantId: undefined,
        deleteTime: undefined,
        createUser: undefined,
        updateUser: undefined,
        deleteUser: undefined,
        isDelete: undefined,
        merchant: undefined,
        commissionrate: undefined,
        invitemoney: undefined,
        param1: undefined,
        param2: undefined
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      },
      fileParam: {
              // attachFile: '',
              createUser: '',
              flieName: '',
              dependId: '',
              type:''
            },
      fileList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询商品列表 */
    getList() {
      this.loading = true;
      listGoods(this.queryParams).then(response => {
        this.goodsList = response.rows;
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
        name: undefined,
        sketch: undefined,
        keywords: undefined,
        seq: undefined,
        picture: undefined,
        view: undefined,
        matchPoint: undefined,
        price: undefined,
        marketPrice: undefined,
        stock: undefined,
        sales: undefined,
        merchantId: undefined,
        createTime: undefined,
        updateTime: undefined,
        deleteTime: undefined,
        createUser: undefined,
        updateUser: undefined,
        deleteUser: undefined,
        isDelete: undefined,
        merchant: undefined,
        commissionrate: undefined,
        invitemoney: undefined,
        param1: undefined,
        param2: undefined
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
      this.title = "添加商品";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getGoods(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改商品";
      });
    },
    /** 提交按钮 */
    submitForm: function() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != undefined) {
            updateGoods(this.form).then(response => {
              if (response.code === 200) {
                this.msgSuccess("修改成功");
                this.open = false;
                this.getList();
              } else {
                this.msgError(response.msg);
              }
            });
          } else {
            addGoods(this.form).then(response => {
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
      this.$confirm('是否确认删除商品编号为"' + ids + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delGoods(ids);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        }).catch(function() {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有商品数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportGoods(queryParams);
        }).then(response => {
          this.download(response.msg);
        }).catch(function() {});
    },


    beforeAvatarUpload(file) {
          this.fileParam.attachFile = file;
          const extension = file.name.split('.')[1] === 'jpg'
          const extension2 = file.name.split('.')[1] === 'png'
          if (!extension && !extension2) {
              window.app.$msgBox.showMsgBox({
                  title: '提示',
                  content: '只能为jpg、png格式',
                  isShowInput: false,
                  isShowCancelBtn: false
            }).then(async (val) => {
                  console.log(val);
              }).catch(() => {
                 // ...
            });
          };
          return extension || extension2;
        },

        handleSuccess(response, file, fileList){
          console.log(response.url)
          var msg = '';
          this.form.picture =response.url
          console.log(response)
          if(response.result == 'failed'){
            msg = '上传服务器失败';
          }else if( response.result== 'success'){
            msg = '上传服务器成功';
          }
        },

        alertError(err, file, fileList){
          console.log(2222222222222);
          window.app.$msgBox.showMsgBox({
                title: '提示',
                content: '上传服务器失败',
                isShowInput: false,
                isShowCancelBtn: false
          }).then(async (val) => {
                console.log(val);
            }).catch(() => {
               // ...
          });
        },

        // myUpload(content) {
        //  var data = new FormData();
        //  data.append("attachFile", content.file);
        //  data.append("createUser", this.$store.state.userInfo.uid);
        //  data.append("fileName", this.fileParam.flieName);
        //  data.append("dependId", this.$store.state.userInfo.uid);
        //  data.append("type", this.type);
        //  this.$ajaxFile({
        //        method: 'post',
        //       url: content.action,
        //       timeout: 20000,
        //       headers: {
          //     'Content-Type': 'multipart/form-data'
         //   },
        //       data: data
        //    }).then(res => {
        //   }).catch(error => {})
        // },

        submitUpload() {
          this.$refs.upload.submit();
        },

        handleRemove(file, fileList) {
          this.fileList = [];
            }

  }
}
</script>
<style scoped>
    .flex-img {
        display: flex;
    }

    .image-uploader {
        margin: 0 auto;
        background-color: #fbfdff;
        border: 1px dashed #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 148px;
        height: auto;
        cursor: pointer;
        line-height: 146px;
        vertical-align: top;
        text-align: center
    }

    .image-uploader {
        font-size: 28px;
        color: #8c939d;
    }

    .image-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .flex-img__image {
        width: 146px;
        height: auto;

        border-radius: 6px;
    }
</style>
<style>
    .disabled {
        display: none;
    }

    .el-upload--picture-card {
        height: auto
    }

    .el-upload-list--picture-card .el-upload-list__item {
        height: auto;
    }

    .el-upload-list--picture-card .el-upload-list__item {
        overflow: hidden;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 148px;
        height: auto;
        margin: 0 8px 8px 0;
        display: inline-block;
    }

    .el-upload-list__item.is-success .el-upload-list__item-status-label {
        display: block;
        position: absolute;
        right: -15px;
        top: -6px;
        width: 40px;
        height: 24px;
        background: #13ce66;
        text-align: center;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-box-shadow: 0 0 1pc 1px rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 1pc 1px rgba(0, 0, 0, 0.2);
    }

    .el-upload-list--picture-card .el-upload-list__item-actions {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        cursor: default;
        text-align: center;
        color: #fff;
        opacity: 0;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
    }
</style>