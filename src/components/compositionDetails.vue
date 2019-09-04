<template>
  <div class="article-body">
    <div class="article">
      <el-scrollbar style="height: 100%">
        <h1>{{ListData.title}}</h1>
        <div class="topic">
          <a>{{ListData.topic}}</a>
        </div>
        <p>{{ListData.content}}</p>
        <div class="footer">
          <span>{{ListData.year}}年</span>
          <span>{{ListData.province}}</span>
          <span>{{ListData.ranking}}作文</span>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import {getContentData} from '@/api/getCompositionData'
export default {
  name: 'compositionContent',
  data () {
    return {
      id: '',
      ListData: {}
    }
  },
  mounted () {
    this.id = this.$route.query.id
    console.log(this.id)
    this.getContent()
  },
  methods: {
    getContent () {
      const params = {
        id: this.id
      }
      getContentData(params).then(res => {
        if (res.data.code === 0) {
          this.ListData = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped>
  .article-body{
    text-align: center;
    background: url("../assets/image/article-bg.png");
    background-size: 100% 100%;
    height: 100%;
    top:0;
    left: 0;
    overflow-y: auto;
    /*overflow-x: auto;*/
  }
  .article{
    margin: 150px auto;
    width: 680px;
    height: 1000px;
    border: 1px solid rgb(100, 100, 100);
    background: rgb(248, 225, 204);
  }
  .article h1{
    font-size: 45px;
    background: url("../assets/image/p-bg.png");
  }
  .article p{
    background: url("../assets/image/p-bg.png");
    text-align: left;
    font-size: 20px;
    padding: 0 32px 12px;
    line-height: 31px;
  }
  .topic{
    /* margin-top: 0px; */
    /* margin-bottom: 0px; */
    /* padding-bottom: 10px;  */
    height: 20px;
  }
  .topic a{
    color: white;
    background-color: #3399cc;
    padding: 3px 6px;
    font-size: 12px;
    display: inline-block;
    position: relative;
    margin-left: 3px;
  }
  .topic a:hover{
    background-color: gray;
    cursor: pointer;
  }
  .footer {
    margin-bottom: 20px;
  }
</style>
<style>
  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
</style>
