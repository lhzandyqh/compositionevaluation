<template>
  <div class="app-contianer">
    <el-row>
      <el-col :span="4">
        <span style="font-size: 20px;font-weight: bolder">作文列表</span>
      </el-col>
      <el-col :span="8" :offset="12">
        <div class="card-one">
          <el-card shadow="never" style="height: 80px;width: 100%">
            <el-input placeholder="请输入关键字" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="research"></el-button>
            </el-input>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <div v-for="item in compositionData" :key="item.essay.id" class="text item" v-loading="loading">
        <el-card style="width: 100%;height: 200px" @click.native="gotoContent(item)">
          <el-row>
            <el-col :span="10">
              <div class="picture-container">
<!--                // https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png-->
                <img :src=changePicture(item.essay) class="image" style="width: 300px;height: 160px">
              </div>
            </el-col>
            <el-col :span="14">
              <el-row style="padding-top: 0px">
                <el-col :span="22">
                  <div class="one_row">
                    <div class="biaoqian">
                      <el-tag>{{item.essay.ranking}}</el-tag>
                    </div>
                    <div class="composition_title">
                      <span style="font-size: 22px">{{item.essay.title}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="2">
                  <div class="like">
                    <i v-if="item.shouchang === false" class="el-icon-star-off" @click.stop="like(item)"></i>
                    <i v-else class="el-icon-star-on"></i>
<!--                    user: this.father-->
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
                      <span style="font-size: 10px;font-weight: bolder">{{item.essay.year}}</span>
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
                <span>{{item.essay.summary}}</span>
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
  </div>
</template>

<script>
import {getCompositionListData, getResearchListData} from '@/api/getCompositionData'
import {collectComposition} from '@/api/collectOrLikeComposition'
export default {
  name: 'compositionList',
  inject: ['reload'],
  props: {
    father: String,
    fatherArray: Array
  },
  data () {
    return {
      compositionData: [],
      currentPage: 1,
      input3: '',
      total: 4437,
      researchFlag: false,
      loading: false,
      likeFlag: false,
      username: localStorage.username
      // url: this.changePicture()
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
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
    research: function () {
      this.researchFlag = true
      const prams = {
        keyword: this.input3,
        user: this.username,
        page: 1
      }
      this.loading = true
      getResearchListData(prams).then(respone => {
        this.compositionData = respone.data.data.essays
        this.total = respone.data.data.count
        if (this.total === 0) {
          this.$message({
            message: '未查询到相关文章',
            type: 'warning'
          })
        }
        console.log(this.total)
        this.loading = false
      })
    },
    getData: function () {
      const prams = {
        page: 1,
        user: this.username
      }
      getCompositionListData(prams).then(respone => {
        this.compositionData = respone.data.data
        console.log('输出测试')
        console.log(this.compositionData)
      })
    },
    handleCurrentChange (val) {
      if (this.researchFlag === false) {
        console.log(`当前页: ${val}`)
        const prams = {
          page: val,
          user: this.username
        }
        getCompositionListData(prams).then(respone => {
          this.compositionData = respone.data.data
        })
      } else {
        console.log(`当前页: ${val}`)
        const prams = {
          keyword: this.input3,
          user: this.username,
          page: val
        }
        this.loading = true
        getResearchListData(prams).then(respone => {
          this.compositionData = respone.data.data.essays
          this.loading = false
        })
      }
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
          id: item.essay.essayId
        }
      })
      console.log(item)
    },
    like: function (item) {
      console.log(this.username)
      console.log('我点了')
      // this.likeFlag = !this.likeFlag
      if (this.username === '' || this.username === undefined) {
        this.$message({
          message: '未登录，无法收藏，请登录后再试',
          type: 'warning'
        })
      } else {
        console.log('用户名')
        console.log(this.username)
        const prams = {
          id: item.essay.essayId,
          user: this.username,
          page: this.currentPage
        }
        collectComposition(prams).then(respone => {
          this.$message({
            message: '收藏成功',
            type: 'success'
          })
          // const prams = {
          //   page: 1,
          //   user: this.father
          // }
          // getCompositionListData(prams).then(respone => {
          //   this.compositionData = respone.data.data
          //   console.log('输出收藏后的展示数据')
          //   console.log(this.compositionData)
          // })
        })
        item.shouchang = true
      }
    },
    reloadData: function () {
      this.compositionData = this.fatherArray
      console.log('我正在触发数据更新事件')
      // this.reload()
    }
  }
}
</script>

<style scoped>
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
</style>
