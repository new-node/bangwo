<template>
  <div class="repairDetailePage">
    <mt-header title="维修详情">
      <mt-button @click.native="goto({name:'appointment'})" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="selectType">
      <table border="1" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <td colspan="3">选择品类</td>
          </tr>
        </thead>
        <tr>
          <td>空调</td>
          <td>空调</td>
          <td>空调</td>
        </tr>
        <tr>
          <td>空调</td>
          <td>空调</td>
          <td>空调</td>
        </tr>
      </table>
    </div>
    <div class="faultDis">
      <h3>故障描述</h3>
      <table width="100%">
        <tr>
          <td>
            <label class="mint-radiolist-label" slot="title" style="">
					        <span class="mint-radio">
					          <input class="mint-radio-input" type="radio" v-model="sex" name="radio"  :value="1" >
					          <span class="mint-radio-core" :checked="checked"></span>
					        </span>
              <span class="mint-radio-label">不制冷</span>
            </label>
          </td>
          <td>
            <label class="mint-radiolist-label" slot="title" style="display: inline-block;">
					        <span class="mint-radio">
					          <input class="mint-radio-input" type="radio" v-model="sex" name="radio" :value="2">
					          <span class="mint-radio-core"></span>
					        </span>
              <span class="mint-radio-label">不制热</span>
            </label>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <mt-field  placeholder="请填写您的特殊需求" type="textarea" rows="4" style="padding: 15px 0"></mt-field>
          </td>
        </tr>
      </table>
    </div>
    <div class="appointmentBtn">
      <a> 立即预约</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
        return {
          sex:'1',
        }
    },
    methods: {
      goto(page) {
          /*console.log(page)*/
        this.$router.push(page);
      },
    }
  }
</script>

<style lang='scss'>
  @import "../../assets/style/sass/common/reset";
  body{
    margin: 0;
    #app{
      .repairDetailePage {
        .mint-header{
          background-color: #f7f7f7;
          color: #2c3e50;
        }
        .selectType{
          background: #ffffff;
          padding-top: pxTorem(50px);
          table{
            text-align: center;
            width: 100%;
            border: pxTorem(1px) solid #eeeeee;
            font-size: pxTorem(14px);
            tr{
              height: pxTorem(38px);
            }
          }
        }
        .faultDis{
          width: 100%;
          min-height: pxTorem(400px);
          background: #ffffff;
          margin-top: pxTorem(10px);
          h3{
            width: 100%;
            height: pxTorem(35px);
            line-height: pxTorem(35px);
            border: pxTorem(1px) solid #eeeeee;
          }
          ul{
            li{
              float: left;
            }
          }
        }
        .faultDis{
          table{
            text-align: center;
            tr{
              height: pxTorem(35px);
            }
          }
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
    }
  }
</style>
