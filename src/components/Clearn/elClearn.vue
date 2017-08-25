<template>
  <div class="clearPage">
    <h3>{{msg}}</h3>
    <div class="picPosition">
      <img src="../../assets/img/qx_1.jpg" alt="清洗">
      <h4>{{msg}}</h4>
      <p class="clearnPrice">
        <span class="newPrice">￥200</span>
        <span class="oldPrice">￥220</span>
      </p>
      <p class="service">
        <span class="discountService">特惠</span>
        <span class="goService">上门服务</span>
      </p>
    </div>
    <div class="shopList">
      <h4>商品详情</h4>
      <table border="1" cellspacing="0" cellpadding="0">
          <tr class="tableHead">
            <th colspan="2">价格列表</th>
          </tr>
          <tr>
            <td>300L以内清洗</td>
            <td>￥118</td>
          </tr>
          <tr>
            <td>300L以上清洗</td>
            <td>￥258</td>
          </tr>
      </table>
      <ul>
        <li class="describtion">
          <span>1</span>
          新洗衣机建议每年清洗1-2次，年限长的2-3次
        </li>
        <li class="imgPic">
          <img :src="imgUrl" alt="清洗">
        </li>
        <li class="describtion">
          <span>2</span>
          为预防机器意外损坏，不提供拆洗服务;
        </li>
        <li class="imgPic">
          <img :src="imgUrl" alt="清洗">
        </li>
      </ul>
    </div>
    <div class="Notice">
      <h4>须知及保障</h4>
      <div>
        <div class="btnCtn">
          <div class="ctnImg">
            <img src="../../assets/img/xz_1.png" alt="">
          </div>
          <div class="detaile">
            <h4>未服务随时退</h4>
            <p>1.如果您预约的服务尚未开始，您可以在线取消订单或联系客服取消订单（鲜花等特殊物品发货后不可取消订单，特殊情况以客服确认为准）。</p>
            <p>2.取消成功后,您之前支付成功的费用会在7个工作日左右原路退回到原支付账户</p>
          </div>
        </div>
        <div class="btnCtn lastCtn">
          <div class="ctnImg">
            <img src="../../assets/img/xz_2.png" alt="">
          </div>
          <div class="detaile">
            <h4>未服务随时退</h4>
            <p>1.如果您预约的服务尚未开始，您可以在线取消订单或联系客服取消订单（鲜花等特殊物品发货后不可取消订单，特殊情况以客服确认为准）。</p>
            <p>2.取消成功后,您之前支付成功的费用会在7个工作日左右原路退回到原支付账户</p>
          </div>
        </div>
      </div>
    </div>
    <div class="rightNow">
      <input type="button" class="btn" value="立即预约">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import qxPic from '../../assets/img/qx_2.jpg'
  export default{
      data() {
          return {
            msg: '冰箱清洗',
            imgUrl: qxPic
          }
      }
  }
</script>

<style lang='scss'>
  @import "../../assets/style/sass/common/reset";
  html{
    background-color: #ffffff;
    .clearPage{
      background-color: #ffffff;
      h3{
        font-size: pxTorem(16px);
        margin-top: pxTorem(10px);
      }
      .picPosition{
        width: 100%;
        margin-top: pxTorem(10px);
        img{
          width: 100%;
          height: pxTorem(175px);
        }
        h4{
          font-size: pxTorem(14px);
          margin: pxTorem(10px);
        }
        .clearnPrice{
          span.newPrice{
            font-size: pxTorem(14px);
            color: red;
            padding: pxTorem(5px);
            margin: pxTorem(10px);
          }
          span.oldPrice{
            font-size: pxTorem(14px);
            text-decoration: line-through;
            padding: pxTorem(5px);
            margin: pxTorem(10px);
          }
        }
        .service{
          .discountService{
            display: inline-block;
            font-size: pxTorem(14px);
            color: #ffffff;
            padding: pxTorem(6px);
            margin: pxTorem(5px);
            background: #c39869;
            @include rounded-corners;
          }
          .goService{
            display: inline-block;
            font-size: pxTorem(14px);
            color: #c39869;
            padding: pxTorem(5px);
            margin: pxTorem(5px);
            border: pxTorem(1px) solid #c39869;
            @include rounded-corners;
          }
        }
      }
      .shopList{
        h4{
          text-align: left;
          margin: pxTorem(5px);
        }
        table {
          border: 1px solid #eeeeee;
          tr{
            height: pxTorem(30px);
          }
        }
        ul{
          text-align: left;
          margin-bottom: pxTorem(5px);
          padding-left: pxTorem(5px);
          li{
            width: 100%;
            font-size: pxTorem(14px);
            margin: pxTorem(10px) 0;
            span{
              text-align: left;
              background: #ee444f;
              padding: pxTorem(5px) pxTorem(10px) pxTorem(5px) pxTorem(10px);
            }
            img{
              width: 100%;
            }
          }
          li.imgPic{
            text-align: center;
          }
        }
      }
      div.Notice{
        padding-top: pxTorem(6px);
        border-top: pxTorem(1px) solid #eeeeee;
        padding-left: pxTorem(10px);
        padding-bottom: pxTorem(50px);
        h4{
          text-align: left;
          height: pxTorem(30px);
          line-height: pxTorem(30px);
        }
        div{
          div.btnCtn{
            width: 100%;
            border-top: pxTorem(1px) solid #eeeeee;
            padding-top: pxTorem(6px);
            div.ctnImg{
              max-width: 42px;
              display: inline-block;
              float: left;
              height: 60px;
              img{
                width: 100%;
              }
            }
            .detaile{
              h4{
                text-align: left;
                height: pxTorem(20px);
                line-height: pxTorem(20px);
              }
              padding-left: pxTorem(60px);
              text-align: left;
              font-size: pxTorem(13px);
              p{
                margin: pxTorem(5px);
              }
            }
          }
        }
      }
      .rightNow{
        width: 100%;
        position: fixed;
        bottom: 0;
        .btn{
          padding: pxTorem(15px) 0;
          display: block;
          width: 100%;
          border: none;
          font-size: pxTorem(18px);
          color: #ffffff;
          background-color: #dd524d;
          @include rounded-corners;
        }
      }
    }
  }

</style>
