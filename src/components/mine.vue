<template>
  <div>
    <p>我的</p>
    <my-footer></my-footer>
  </div>

</template>

<script type="text/ecmascript-6">
  import footer from './Foot/foot.vue'
  export default{
    components: {
      'my-footer': footer
    }
  }
</script>

<style lang='scss'>
  @import "../assets/style/sass/common/reset";

</style>
