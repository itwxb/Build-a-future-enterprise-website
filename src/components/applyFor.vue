<template>
  <div class="ApplyFor" id="form">
    <div class="ApplyFor_cont">
      <h1>申请职位</h1>
      <div class="ApplyFor_cont_btm">
        <div class="ApplyFor_cont_btm_l">
          <div class="ApplyFor_cont_btm_l_div_input">
            <label for="">姓名：</label
            ><input
              class="ApplyFor_cont_btm_l_input1"
              type="text"
              v-model="formData.name"
              placeholder="请输入姓名"
            />
          </div>

          <div class="ApplyFor_cont_btm_l_div_input">
            <label for="">学历：</label
            ><input
              class="ApplyFor_cont_btm_l_input1"
              type="text"
              placeholder="请输入学历"
              v-model="formData.degree"
            />
          </div>
          <div class="ApplyFor_cont_btm_l_div_input input3">
            <label for="">工作年限：</label
            ><input
              class="ApplyFor_cont_btm_l_input1"
              type="number"
              placeholder="请输入工作年限"
              v-model="formData.YearsOfService"
            />
          </div>

          <div
            class="ApplyFor_cont_btm_l_div_input ApplyFor_cont_btm_l_div_button"
          >
            <label for="">简历：</label>
            <input
              class="ApplyFor_cont_btm_l_input1 input4"
              type="file"
              accept=".pdf"
              placeholder="请输入名字"
              ref="selectFile"
              @change="checkFile($event)"
              hidden
            />

            <span class="ApplyFor_cont_btm_l_input1 file">{{ fileName }}</span>

            <button class="button1" @click="selectFile">上传简历</button>
            <span class="msg">
              ·&ensp;仅支持pdf文件<br />
              ·&ensp;文件大小不超过20MB</span
            >
          </div>
          <button class="button2" @click="submitUpload">提交</button>
        </div>
        <div class="ApplyFor_cont_btm_r">
          <div class="ApplyFor_cont_btm_r_text">
            <h1>咨询热线</h1>
            <span>400-000-000</span>
          </div>
          <div class="ApplyFor_cont_btm_r_text">
            <h1>咨询热线</h1>
            <span>400-000-000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        name: "",
        degree: "",
        YearsOfService: "",
      },
      fileData: "",
      fileName: "未上传文件",
    };
  },
  methods: {
    selectFile() {
      this.$refs.selectFile.click();
    },
    checkFile(e) {
      // 得到文件
      const file = e.target.files[0];

      if (file == undefined) {
        return;
      }
      // 得到名称
      const fileName = file.name;

      // 赋值给data中的file
      this.fileData = file;
      this.fileName = fileName;

      // 限制文件
      const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
      const whiteList = ["pdf"];
      const isSuffix = whiteList.indexOf(fileSuffix.toLowerCase()) === -1;
      const isLt1M = file.size / 1024 / 1024 > 1;

      if (isSuffix) {
        alert("上传文件只能是 pdf 格式");
        this.fileName = "未上传文件";
        this.fileData = "";
        console.log(this.fileData);
        console.log(this.fileName);
        return;
      }
      if (isLt1M) {
        alert("上传文件大小不能超过 1MB");
        this.fileName = "未上传文件";
        this.fileData = "";
        console.log(this.fileData);
        console.log(this.fileName);
        return;
      }
    },
    submitUpload() {
      // 检测未输入
      var obj = {};
      obj.name = this.formData.name;
      obj.degree = this.formData.degree;
      obj.YearsOfService = this.formData.YearsOfService;
      obj.fileName = this.fileName;
      // this.submitUploadCheck(obj);

      if (this.submitUploadCheck(obj)) {
        let newformData = new FormData();
        newformData.append("file", this.fileData);
        newformData.append("name", this.formData.name);
        newformData.append("degree", this.formData.degree);
        newformData.append("YearsOfService", this.formData.YearsOfService);

        // axios
        //   .post(
        //     "https://mock.apifox.cn/m1/2314330-0-default/upload",
        //     newformData
        //   )
        //   .then(function (response) {
        //     console.log(response);

        //     alert("提交成功");
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     alert("请求失败，请联系开发人员");
        //   });
        var config = {
          method: "post",
          url: "https://mock.apifox.cn/m1/2314330-0-default/upload",
          headers: {
            Accept: "*/*",
            "Content-Type": "multipart/form-data",
          },
          data: newformData,
        };

        axios(config)
          .then(function (response) {
            alert("提交成功");
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
            alert("请求失败，请联系开发人员");
          });
      }
    },

    submitUploadCheck(obj) {
      var obj1 = {
        name: "名字",
        degree: "学历",
        YearsOfService: "工作经历",
        fileName: "简历文件",
      };
      for (const key in obj) {
        if (!obj[key] || obj[key] == "未上传文件") {
          let text = obj1[key] + "不能为空";
          alert(text);
          return false;
        }
      }
      return true;
    },
  },
};
</script>
<style scoped>
/* 申请职位 */
.ApplyFor {
  width: 1920px;
  height: 582px;
  background: #f8f8f8;
}

.ApplyFor_cont {
  width: 1200px;
  margin: 0 auto;
}

.ApplyFor_cont > h1 {
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #444444;
  line-height: 45px;
  padding-top: 65px;
}

.ApplyFor_cont_btm {
  justify-content: space-between;
  margin-top: 24px;
  display: flex;
}

.ApplyFor_cont_btm_l {
  padding-top: 52px;
  width: 900px;
  height: 336px;
  background: #ffffff;
}

.ApplyFor_cont_btm_r {
  width: 252px;
  height: 290px;
  background-image: url("../assets/img/zhaopinxinxi/蒙版.png");
}

.ApplyFor_cont_btm_l label {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #444444;
  line-height: 22px;
}

.ApplyFor_cont_btm_l_div_input {
  margin-bottom: 16px;
  margin-left: 82px;
}

.input3 {
  margin-left: 50px;
}

.ApplyFor_cont_btm_l_input1 {
  margin-left: 15px;

  font-size: 20px;
  text-indent: 10px;
  width: 280px;
  height: 40px;
  background: #f8f8f8;
}

.input4 {
  width: 704px;
  height: 40px;
  background: #f8f8f8;
  border: 1px solid;
}

.file {
  display: inline-block;
  width: 704px;
  height: 40px;
  background: #f8f8f8;
  border: 2px solid black;
  line-height: 40px;
  color: #999999;
}

.ApplyFor_cont_btm_l_div_button {
  position: relative;
}

.button1 {
  width: 72px;
  height: 24px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #23337f;
  position: absolute;
  bottom: 10px;
  right: 70px;
  font-size: 12px;
  color: #23337f;
  z-index: 999;
}

.button2 {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 22px;
  margin-left: 140px;
  width: 180px;
  height: 40px;
  background: #23337f;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
}

.ApplyFor_cont_btm_r {
  padding: 49px 16px;
}

.ApplyFor_cont_btm_r_text {
  padding-top: 32px;
  width: 252px;
  height: 98px;
  background: rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  text-align: center;
  margin-bottom: 30px;
}

.ApplyFor_cont_btm_r_text h1 {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
}

.ApplyFor_cont_btm_r_text span {
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 45px;
}

.msg {
  position: absolute;
  right: 48px;
  bottom: 64px;
  display: inline-block;
  width: 147px;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  font-weight: 400;
  color: #23337f;
  line-height: 30px;
  padding: 4px 10px;
  box-sizing: border-box;
}
</style>