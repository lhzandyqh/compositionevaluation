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
  </div>
</template>

<script>
import {getCompositionListData, getResearchListData} from '@/api/getCompositionData'
export default {
  name: 'compositionList',
  data () {
    return {
      compositionData: [],
      currentPage: 1,
      input3: '',
      total: 4000,
      researchFlag: false,
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    research: function () {
      this.researchFlag = true
      const prams = {
        keyword: this.input3,
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
        page: 1
      }
      getCompositionListData(prams).then(respone => {
        this.compositionData = respone.data.data
      })
    },
    handleCurrentChange (val) {
      if (this.researchFlag === false) {
        console.log(`当前页: ${val}`)
        const prams = {
          page: val
        }
        getCompositionListData(prams).then(respone => {
          this.compositionData = respone.data.data
        })
      } else {
        console.log(`当前页: ${val}`)
        const prams = {
          keyword: this.input3,
          page: val
        }
        this.loading = true
        getResearchListData(prams).then(respone => {
          this.compositionData = respone.data.data.essays
          this.loading = false
        })
      }
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
