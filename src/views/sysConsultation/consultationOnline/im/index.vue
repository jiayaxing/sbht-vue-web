<template>
  <div>
    <div class="im-chat-container">
      <div class="uploader-container">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <i class="el-icon-picture avatar-uploader-icon"></i>
        </el-upload>
        <span class="suggest-edit"><i class="el-icon-edit suggest-edit-icon"></i>填写会诊意见</span>
      </div>
      <el-input
        type="textarea"
        :rows="6"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <p class="im-chat-send">
        <el-button type="info" size="mini">退出</el-button>
        <el-button type="warning" size="mini">结束会诊</el-button>
        <el-button type="primary" size="mini">发送</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "caseIm",
  data() {
    return {
      textarea: "",
      imageUrl: ""
    };
  },
  computed: {},
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.im-chat-container {
  .el-textarea__inner {
    border: none;
    resize: none;
    padding: 0 10px;
  }
  .avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
.im-chat-container {
  position: absolute;
  bottom: 0px;
  width: 100%;
  .uploader-container {
    border-top: 1px solid #d0d0d0;
    display: flex;
    .suggest-edit{
      color: #8c939d;
      font-size: 12px;
      cursor: pointer;
      &-icon{
        font-size: 28px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    }
  }
  .im-chat-send {
    text-align: right;
    padding: 5px 10px;
  }
}
</style>
