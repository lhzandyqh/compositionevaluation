<template>
  <div class="app-container">
    <el-container style="width: 100%">
      <el-header height="80px">
        <el-row>
          <el-col :span="4" :offset="4">
            <div class="logo_container">
              <el-image
                style="width: 162px; height: 42px"
                :src=logo></el-image>
            </div>
          </el-col>
          <el-col :span="2" :offset="12">
            <div class="tubiao-contianer">
              <div class="tubiao">
<!--                <i class="el-icon-s-data"></i>-->
              </div>
              <div class="title">
<!--                <span style="color: dimgrey;cursor: pointer" @click="goCompositionContent">智能测评</span>-->
              </div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="tubiao-contianer">
              <div class="tubiao">
<!--                <i class="el-icon-s-custom"></i>-->
              </div>
              <div class="title">
<!--                <span v-if="loginFlag==='否'" style="color: dimgrey;cursor: pointer" @click="showLogin">登录</span>-->
<!--                <span v-else style="color: dimgrey">我的</span>-->
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-container>
          <el-main width="70%;">
            <el-card class="box-card"  shadow="never" style="width: 100%;height: 600px">
              <el-row>
                <el-col :span="2">
                  <div style="padding-top: 8px">
                    <span style="font-weight: bolder">作文标题</span>
                  </div>
                </el-col>
                <el-col :span="22">
                  <el-input
                    type="textarea"
                    rows="1"
                    placeholder="请输入作文标题"
                    v-model="textarea1">
                  </el-input>
                </el-col>
              </el-row>
              <el-divider></el-divider>
              <el-row>
                <el-col :span="2">
                  <div style="padding-top: 8px">
                    <span style="font-weight: bolder">作文内容</span>
                  </div>
                </el-col>
                <el-col :span="22">
                  <el-input
                    type="textarea"
                    rows="18"
                    placeholder="请输入作文内容"
                    v-model="textarea2">
                  </el-input>
                </el-col>
              </el-row>
              <el-row>
                <div class="button_container">
                  <el-button type="primary" round @click="beginMeasure">点击进行智能评测</el-button>
                </div>
              </el-row>
            </el-card>
          </el-main>
          <el-aside width="30%">
            <div style="padding-top: 20px">
              <el-card class="box-card"  shadow="never" >
                <el-row>
                  <span style="font-weight: bolder">推荐模板</span>
                </el-row>
                <el-divider></el-divider>
                <div v-if="tuijianFlag === false">
                  <span style="font-size: 25px">暂无推荐</span>
                </div>
                <div v-else v-for="item in tuijianData" :key="item.id" class="text item" v-loading="loading">
                  <el-card class="box-card" style="width: 100%;height: 120px">
                    <el-row>
                      <el-col :span="8">
                        <img src="http://114.242.223.253/zihui/images/20190703c001.jpg" class="image" style="width: 80px;height: 80px">
                      </el-col>
                      <el-col :span="16">
                        <el-row>
                          <span>{{item.title}}</span>
                        </el-row>
                        <el-row>
                          <el-col :span="12">
                            <div class="one_row">
                              <div class="biaoqian">
                                <i class="el-icon-time"></i>
                              </div>
                              <div class="composition_title">
                                <span style="font-size: 10px;font-weight: bolder">{{item.year}}</span>
                              </div>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div class="one_row">
                              <div class="biaoqian">
                                <i class="el-icon-view"></i>
                              </div>
                              <div class="composition_title">
                                <span style="font-size: 10px;font-weight: bolder">201</span>
                              </div>
                            </div>
                          </el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-card>
                </div>
              </el-card>
            </div>
          </el-aside>
        </el-container>
      </el-main>
      <el-footer>
        <div class="copyrightContainer">
          <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大数据中心   ©2019</span>
        </div>
      </el-footer>
    </el-container>
    <el-dialog
      title="智能评测结果"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div class="dialogContent">
        <el-row>
          <el-col :span="4">
            <span style="font-weight: bolder">我的得分: </span>
          </el-col>
          <el-col :span="8">
            <span>{{dialogData[0]}}</span>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-col :span="4">
            <span style="font-weight: bolder">标签: </span>
          </el-col>
          <el-col :span="8">
            <span>{{dialogData[1]}}</span>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-col :span="4">
            <span style="font-weight: bolder">题材: </span>
          </el-col>
          <el-col :span="8">
            <span>{{dialogData[2]}}</span>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-col :span="4">
          <span style="font-weight: bolder">引用次数: </span>
        </el-col>
          <el-col :span="8">
            <span>{{dialogData[3]}}</span>
          </el-col>
          <el-col :span="4">
            <span style="font-weight: bolder">排比次数: </span>
          </el-col>
          <el-col :span="8">
            <span>{{dialogData[4]}}</span>
          </el-col>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-col :span="4">
            <span style="font-weight: bolder">建议: </span>
          </el-col>
          <el-col :span="20">
            <span>{{dialogData[6]}}</span>
          </el-col>
        </el-row>
        <el-row style="padding-top: 30px">
          <span style="font-weight: bolder">可前往推荐模板处阅读更多模板</span>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import {intelligentMeasurement} from '@/api/getCompositionData'
import logo from '@/assets/image/logo.png'
export default {
  name: 'compositionContent',
  data () {
    return {
      dialogVisible: false,
      username: localStorage.getItem('username'),
      logo: logo,
      textarea1: '',
      textarea2: '',
      measureData: [],
      dialogData: [],
      tuijianData: [],
      tuijianFlag: false,
      loading: false
    }
  },
  methods: {
    startEvaluation: function () {
      this.dialogVisible = true
    },
    beginMeasure: function () {
      if (this.textarea1 === '' || this.textarea2 === '') {
        this.$message.error('作文标题或作文内容不能为空')
      } else {
        const prames = {
          title: this.textarea1,
          passage: this.textarea2,
          user: this.username
        }
        this.loading = true
        intelligentMeasurement(prames).then(respone => {
          this.measureData = respone.data.data
          this.dialogData = this.measureData.tags
          this.tuijianData = respone.data.data.passage
          console.log(this.tuijianData)
        })
        this.tuijianFlag = true
        this.dialogVisible = true
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
  .logo_container{
    padding-top: 20px;
  }
  .el-icon-s-custom,
  .el-icon-s-data{
    padding-top: 25px;
    font-size: 23px;
  }
  .tubiao-contianer{
    display: inline-block;
  }
  .tubiao{
    display: inline-block;
  }
  .title{
    display: inline-block;
  }
  .el-main{
    background-color: #F5F5F5;
  }
  .copyrightContainer{
    padding-top: 20px;
    text-align: center;
  }
  .title_container{
    display: inline-block;
  }
  .input{
    display: inline-block;
  }
  .button_container{
    padding-top: 25px;
    text-align: center;
  }

</style>
