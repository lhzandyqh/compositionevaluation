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
        <div class="favoriteContainer">
          <div class="cardContaienr">
            <el-card class="box-card" style="width: 80%;height: 600px">
              <el-row>
                <span style="font-weight: bolder">我的收藏</span>
              </el-row>
              <el-divider></el-divider>
              <el-row>
                <div v-for="item in compositionData" :key="item.id" class="text item" v-loading="loading">
                  <el-card style="width: 90%;height: 200px">
                    <el-row>
                      <el-col :span="9">
                        <div class="picture-container">
                          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style="width: 300px;height: 160px">
                        </div>
                      </el-col>
                      <el-col :span="15">
                        <el-row style="padding-top: 0px">
                          <el-col :span="24">
                            <div class="one_row">
                              <div class="biaoqian">
                                <el-tag>{{item.ranking}}</el-tag>
                              </div>
                              <div class="composition_title">
                                <span style="font-size: 22px">{{item.title}}</span>
                              </div>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="4">
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
                                <span style="font-size: 10px;font-weight: bolder">2019-10-08</span>
                              </div>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row style="padding-top: 10px">
                          <span>{{item.summary}}</span>
                        </el-row>
                      </el-col>
                    </el-row>
                  </el-card>
                </div>
              </el-row>
              <el-row>
                <div class="fenye">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total=total>
                  </el-pagination>
                </div>
              </el-row>
            </el-card>
          </div>
        </div>
      </el-main>
      <el-footer>
        <div class="copyrightContainer">
          <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大数据中心   ©2019</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import logo from '@/assets/image/logo.png'
export default {
  name: 'compositionContent',
  data () {
    return {
      dialogVisible: false,
      logo: logo,
      textarea1: '',
      textarea2: ''
    }
  },
  methods: {
    startEvaluation: function () {
      this.dialogVisible = true
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
  .favoriteContainer{
  }
  .cardContaienr{
    padding-left: 15%;
  }
  .fenye{
    text-align: center;
  }

</style>
