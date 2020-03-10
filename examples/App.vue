<template>
  <div id="app">
    <header-top/>
   <left-nav class="nav"/>
    <router-view class="center-views"/>
    <div class="iframe-box">
        <div class="iframe-box-innner">
          <iframe :src="`https://shdejun.github.io/iframe/dist/#${route}`" frameborder="0" width="100%" height="100%"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
import leftNav from './components/leftNav';
import headerTop from './components/headerTop'
export default {
  name: 'App',
  data(){
    return{
      route:'/'
    }
  },
  components:{
    leftNav,
    headerTop
  },
  watch:{
    '$route.path'(n,o){
      console.log(n,'nn')
      this.route = n
    }
  }
}
</script>

<style lang="scss">
@import './assets/css/reset';
#app {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
  .nav{
    width: 200px;
    height: calc(100% - 80px);
    display: inline-block;
    overflow-y: auto;
    vertical-align: top;
  }
  .center-views{
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 643px)
  }
  .iframe-box{
    display: inline-block;
    vertical-align: top;
    width: 400px;
    height: 100%;
    .iframe-box-innner{
      width: 375px;
      height: 640px;
      border: 1px solid gray;
      border-radius: 20px;
      overflow: hidden;
    }
  }
}
</style>
