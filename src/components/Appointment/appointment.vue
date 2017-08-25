<template>
    <div class="appointmentPage">
      <h3>预约下单</h3>
      <ul class="serviceSite">
        <mt-cell title="请选择服务地址" @click.native="goto({name:'site'})" is-link>
        </mt-cell>
      </ul>
      <ul class="repairProject">
        <mt-cell title="维修项目" value="编辑"></mt-cell>
        <mt-cell
          title="添加要修的家电"
          @click.native="goto({name:'repairDetaile'})"
          is-link>
        </mt-cell>
      </ul>
      <ul class="repairProject">
        <mt-cell title="选择上门服务时间"  is-link></mt-cell>
        <mt-cell
          title="上门费">
          <span style="color: #FF0000">30元</span>
        </mt-cell>
        <mt-field  placeholder="请填写您的特殊需求" type="textarea" rows="4" style="padding: 15px 0"></mt-field>
      </ul>
      <div class="disc">
        您需要支付30元上门费,如取消服务，我们将全额退还。实际维修费用由维修师傅上门检测后，根据故障大小而定
      </div>
      <div class="appointmentBtn">
        <a > 立即预约</a>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">

  export default{
    data () {
        return {

        }
    },
    methods: {
      goto(page) {
        this.$router.push(page);
      },
    }
  }
</script>

<style lang='scss'>
  @import "../../assets/style/sass/common/reset";
  #app{
    text-align: left;
    h3{
      width: 100%;
      height: pxTorem(45px);
      background-color: #f7f7f7;
      line-height: pxTorem(45px);
      margin-bottom: pxTorem(20px);
      text-align: center;
    }
    ul.serviceSite{
      width: 100%;
      height: pxTorem(45px);background: #ffffff;
      line-height: pxTorem(45px);
      li{
               font-size: pxTorem(14px);
               text-align: left;
               color: #bbbbbb;
               padding-left: pxTorem(20px);
             }
    }
    ul.repairProject{
      width: 100%;
      background-color: #ffffff;
      margin: pxTorem(15px) 0;
      textarea.mint-field-core{
        border: 1px solid #eeeeee;
      }
    }
    .disc{
      padding: pxTorem(15px);
      font-size: pxTorem(14px);
    }
    .appointmentBtn{
      position: fixed;
      width: 100%;
      height: pxTorem(50px);
      border-bottom: 0px;
      left: 0;
      background-color: #dd524d;
      @include rounded-corners;
      text-align: center;
      a{
        width: 100%;
        height: 100%;
        color: #ffffff;
        font-size: pxTorem(16px);
        line-height: pxTorem(50px);
      }
    }
  }


</style>
