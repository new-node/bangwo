<template>
  <div class="foot">
    <div class="get-item">
      <i class="icon iconfont icon-xiyiji"></i>
      <router-link to="/index">首页</router-link>
    </div>
    <div class="get-item">
      <router-link to="/guarantee">一键报修</router-link>
    </div>
    <div class="get-item">
      <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang='scss'>
  @import "../../assets/style/sass/common/reset";
  .foot{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: pxTorem(50px);
    display: flex;
    background: #f7f7f7;
    z-index: 10;
    .get-item{
      flex: 1;
      height: 100%;
      line-height: pxTorem(50px);
      text-align: center;
    }
  }
</style>
