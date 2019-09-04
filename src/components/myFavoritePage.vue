<template>
  <div class="app-container">
    <el-container style="width: 100%">
      <el-header height="80px">
        <el-row>
          <el-col :span="5">
            <div class="pictureContainer">
              <img src="../assets/image/mynewlogo.png" style="width:100%;height: 60px">
            </div>
          </el-col>
          <el-col :span="4" :offset="1">
            <div class="logo_container">
              <el-image
                style="width: 162px; height: 42px"
                :src=logo></el-image>
            </div>
          </el-col>
          <el-col :span="2" :offset="10">
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
            <el-card class="box-card" style="width: 80%">
              <el-row>
                <span style="font-weight: bolder">我的收藏</span>
              </el-row>
              <el-divider></el-divider>
              <el-row>
                <div v-for="item in favoriteData" :key="item.id" class="text item" v-loading="loading">
                  <el-card style="width: 100%;height: 200px" @click.native="gotoContent(item)">
                    <el-row>
                      <el-col :span="9">
                        <div class="picture-container">
                          <img src="http://114.242.223.253/zihui/images/20190703a002.jpg" class="image" style="width: 300px;height: 160px">
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
import {getFavoriteListData} from '@/api/getCompositionData'
export default {
  name: 'compositionContent',
  data () {
    return {
      username: localStorage.getItem('username'),
      dialogVisible: false,
      total: 0,
      logo: logo,
      textarea1: '',
      textarea2: '',
      favoriteData: []
    }
  },
  mounted () {
    this.getFavoriteData()
  },
  methods: {
    getFavoriteData: function () {
      const prams = {
        user: this.username
      }
      getFavoriteListData(prams).then(respone => {
        this.favoriteData = respone.data.data.collectList
        this.total = respone.data.data.collectCount
        if (this.total === 0) {
          this.$message({
            message: '未查询到相关收藏',
            type: 'warning'
          })
        }
        console.log(this.favoriteData)
      })
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      const prams = {
        page: val,
        user: this.username
      }
      getFavoriteListData(prams).then(respone => {
        this.favoriteData = respone.data.data.collectList
        this.total = respone.data.data.collectCount
        if (this.total === 0) {
          this.$message({
            message: '未查询到相关收藏',
            type: 'warning'
          })
        }
        console.log('我喜欢的')
        console.log(this.favoriteData)
      })
    },
    gotoContent (item) {
      // const {href} = this.$router.resolve({
      //   path: '/compositionContent',
      //   query: {
      //     id: item.essayId
      //   }
      // })
      // window.open(href, '_bank')
      this.$router.push({
        path: '/compositiondetails',
        query: {
          id: item.essayId
        }
      })
      console.log(item)
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
  .biaoqian{
    display: inline-block;
  }
  .composition_title{
    display: inline-block;
    margin-top: 10px;
  }
  .one_row{
    display: inline-block;
  }
  .fenye{
    padding-top: 20px;
    text-align: center;
  }
  .pictureContainer{
    padding-top: 10px;
  }

</style>
