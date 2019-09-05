<template>
  <div class="app-container">
    <div class="show-contaienr">
      <div class="card-two">
        <el-card  shadow="never" class="box-card">
          <div slot="header" class="clearfix" style="height: 10px">
            <span style="font-weight: bolder">为您推荐</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="changeList">换一批</el-button>
          </div>
          <div v-for="item in recommandData" :key="item.id" class="text item">
            <el-card class="box-card" style="width: 100%;height: 120px" @click.native="gotoContent(item)">
              <el-row>
                <el-col :span="10">
                  <img :src=changePicture(item) class="image" style="width: 80px;height: 80px">
                </el-col>
                <el-col :span="14">
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
    </div>
  </div>
</template>

<script>
import {getRecommandListData} from '@/api/getCompositionData'
export default {
  name: 'searchSection',
  data () {
    return {
      input3: '',
      recommandData: []
    }
  },
  mounted () {
    this.getMyData()
  },
  methods: {
    gotoContent: function (item) {
      this.$router.push({
        path: '/compositiondetails',
        query: {
          id: item.essayId
        }
      })
      console.log(item)
    },
    changePicture: function (item) {
      var num = (item.id) % 100
      if (num < 10) {
        num = '0' + num
      } else {
        num = '' + num
      }
      var str = 'http://114.242.223.253/zihui/images/20190703a0' + num + '.jpg'
      return str
    },
    getMyData: function () {
      const prams = {
        user: '1234'
      }
      getRecommandListData(prams).then(respone => {
        this.recommandData = respone.data.data
        console.log(this.recommandData)
      })
    },
    changeList: function () {
      const prams = {
        user: '1234'
      }
      getRecommandListData(prams).then(respone => {
        this.recommandData = respone.data.data
      })
    }
  }
}
</script>

<style scoped>
  .search-container{
  }
  .card-one{
    width: 80%;
    height: 100px;
  }
  .card-two{
    width: 80%;
  }
  .show-contaienr{
    margin-top: 10px;
  }
  .app-container{
    padding-top: 10px;
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
</style>
