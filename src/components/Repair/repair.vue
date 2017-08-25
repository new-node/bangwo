<template>
  <div class="repairPage">
    <h3>{{msg}}</h3>
    <div class="repairPic">
      <img :src="imgUrl" alt="">
    </div>
    <div class="repairEquipment">
      <div class="equipmentHead">
        <ul>
          <li v-for="(element,$index) in equipmentArr" :class="{active: $index === num }" @click="changeActive($index,element)">{{element.obj}}</li>
        </ul>
        <span class="icon iconfont icon-xiyiji"></span>
      </div>
      <div class="repairType">
        <ul>
          <li v-for="(typeObj,index) in allTyeArr" :class="{act: index === number}" @click="selectType(index,typeObj)">{{typeObj.obj}}</li>
        </ul>
      </div>
      <table border="1" cellspacing="0" cellpadding="0">
        <tr>
          <th colspan="2">{{message}}</th>
        </tr>
        <tr>
          <td>对应更换配件</td>
          <td>价格</td>
        </tr>
        <tr>
          <td>检测出维修故障时，用户主动放弃维修时收取</td>
          <td>30元</td>
        </tr>
        <tr>
          <td>检测出维修故障时，用户主动放弃维修时收取</td>
          <td>30元</td>
        </tr>
        <tr>
          <td colspan="2">
            <span>温馨提示:</span>
            <p>1.同一电器级别的多项维修，每增加一项累计计算费用，同一级别维修收费累计最高不超过两项；不同级别的维修，进行累计收费。</p>
            <p>2.在使用原有配件的基础上，按标准收费；如果更换新配件，则按实际情况另加配件收费。</p>
            <p> 3.此价格仅供参考，具体以上门收费为准。</p>
          </td>
        </tr>
      </table>
      <div class="serviecProgress">
        <h3>服务流程</h3>
        <ul class="serPro">
          <li v-for="(imgUrl,index) in imgArr">
            <img :src="imgUrl.src" alt="流程图">
            <div>{{imgUrl.des}}</div>
          </li>
        </ul>
        <h4>服务说明</h4>
        <ul class="serExplain">
          <li>1.预约后，客服将尽快联系您，确认上门时间</li>
          <li>2.工程师携专业设备，上门提供检测维修服务</li>
          <li>3.服务完成后，填写"专用保险卡"</li>
          <li>4.如有疑问，请咨询客服电话:400-89000，咨询时间:8:00~22:00</li>
          <li>5.为了保障您的合法权益和服务质量，避免不必要的损失，请您切勿与维修工程师私下交易(我们无法对私下交易提供安全和质量保障)。感谢支持</li>
        </ul>
        <h4>服务承诺</h4>
        <ul class="ser">
          <li v-for="(srcUrl,index) in srcArr"><img :src="srcUrl.img" alt=""><span>{{srcUrl.des}}</span></li>
        </ul>
      </div>
    </div>
    <div class="rightNow">
      <router-link to="/index/position" class="btn">立即预约</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import repairImg from '../../assets/img/weixiu.png'
  import kf from '../../assets/img/kf.gif'
  import qx from '../../assets/img/qx.png'
  import xc from '../../assets/img/xc.png'
  import qc from '../../assets/img/qc.png'
  import ser from '../../assets/img/ser.png'
  export default{
      data() {
          return{
              msg: '动态增加标题！！',
              imgUrl: repairImg,
              num: 0,
              number: 0,
              message: '热水器',
              equipmentArr:[
                {obj: '热水器'},
                {obj: '洗衣机'},
                {obj: '冰箱'},
                {obj: '电视'},
                {obj: '油烟机'},
                {obj: '燃气灶'},
                {obj: '微波炉'},
                {obj: '空调'},
                {obj: '电磁炉'},
                {obj: '消毒柜'},
                {obj: '饮水机'},
                {obj: '净水器'}
              ],
              allTyeArr: [
                {obj: '检测'},
                {obj: '检修'},
                {obj: '小修'},
                {obj: '中修'},
                {obj: '大修'},
                {obj: '特修'},
                {obj: '拆装'},
              ],
              imgArr: [
                {
                  src: kf,
                  des: '预约上门时间'
                },{
                  src: qx,
                  des: '上门检查报价'
                },{
                  src: xc,
                  des: '彻底修查'
                },{
                  src: qc,
                  des: '清场退件'
                },
              ],
            srcArr: [
              {
                 img: ser,
                 des:'价格公开透明,统一收费标准'
              },
              {
                img: ser,
                des:'工程师经专业技术培训考核上岗'
              },
              {
                img: ser,
                des:'凭保修卡,可享3个月免费保修'
              },
              {
                img: ser,
                des:'修不好，不收费'
              },
            ]
          }
      },
    methods: {
      changeActive: function ($index,element) {
        this.num = $index;
        this.message = element.obj
      },
      selectType: function (index) {
        this.number = index;
      }
    }
  }
</script>

<style lang='scss'>
  @import "../../assets/style/sass/common/reset";
  ::-webkit-scrollbar {display:none; width:0; height: 0;}
  .active{
    color: red !important;
    border-bottom: pxTorem(1px) solid red;
  }
  .act{
    background: #a0a0a0;
  }
  html{
    background-color: #ffffff;
    body{
      margin: 0;
      .repairPage{
        padding-top: pxTorem(10px);
        background-color: #ffffff;
        position: relative;
        h3{
          margin-bottom: pxTorem(10px);
        }
        .repairPic{
          width: 100%;
          img{
            width: 100%;
          }
        }
        .equipmentHead{
          width: 100%;
          height:pxTorem(48px);
          overflow-x: scroll;
          border-bottom: pxTorem(1px) solid #eeeeee;
          background-color: #ffffff;
          position: relative;
          ul{
            width: 243%;
            height: 100%;
            li{
              float: left;
              display: inline-block;
              padding: pxTorem(10px) pxTorem(10px);
              outline: none;
              font-size: pxTorem(14px);
              font-weight: 700;
              margin:  pxTorem(12px) pxTorem(8px);
              text-align: center;
              &:hover{
                cursor: pointer;
              }
            }
          }
          span{
            position: absolute;
            right: pxTorem(2px);
            width: pxTorem(24px);
            height: pxTorem(24px);
            bottom: pxTorem(3px);
          }
        }
        .repairType{
          width: 100%;
          padding-left: pxTorem(3px);
          ul {
            li{
              float: left;
              padding: pxTorem(10px) pxTorem(15px);
              margin: pxTorem(5px) pxTorem(13px);
              border: pxTorem(1px) solid #eeeeee;
              @include rounded-corner
            }
          }

        }
        table {
          border: pxTorem(1px) solid #eeeeee;
          tr{
            height: pxTorem(30px);
            th{
              font-size: pxTorem(14px);
            }
            td{
              font-size: pxTorem(13px);
            }
            &:last-child{
              text-align: left;
              span{
                display: block;
                margin: pxTorem(5px);
                font-weight: bold;
              }
              p{
                margin: pxTorem(5px);
              }
            }
          }
        }
        .serviecProgress{
          margin-top: pxTorem(10px);
          ul.serPro{
            padding-left: pxTorem(12px);
            width: 100%;
            min-height: pxTorem(300px);
            li{
              float: left;
              margin: pxTorem(8px) pxTorem(23px);
            }
          }
          ul.ser{
            padding-left: pxTorem(10px);
            padding-bottom: pxTorem(50px);
            li{
              width: 100%;
              text-align: left;
              margin: pxTorem(10px) 0 pxTorem(10px);
              height: pxTorem(30px);
              span{
                height: 100%;
                line-height: pxTorem(30px);
                font-size: pxTorem(13px);
              }
            }
          }
          h4{
            text-align: left;
            font-size: 14px;
            margin: 0.3125rem;
          }
          ul.serExplain{
            li{
              text-align: left;
              font-size: 14px;
              margin: pxTorem(10px) 0 pxTorem(10px) pxTorem(10px);
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
  }
</style>
