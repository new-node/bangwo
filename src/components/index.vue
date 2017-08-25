<template>
  <div class="hello">
    <!--<slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName2" :target="target"></slide>-->
    <slider :loop-time="2000" :speed="300" :show-indicators="true" :default-index="3">
      <slider-item class="slider" v-for="(pic,index) in picArr"><img :src= "pic.src"  alt=""></slider-item>
    </slider>
      <!--<slider-item class="slider electrical">-->
        <ul>
          <li v-for="(obj,index) in moduleListL" class="repairClean" :key="index" @click="record(obj.functionName)">
            <router-link :to="obj.internalUrl">
              <img :src="obj.iconUrl" />
              <a>{{obj.functionName}}</a>
            </router-link>
          </li>
        </ul>
     <!-- </slider-item>-->
    <div class="electricalRepair">
      <h3>家电维修</h3>
      <table border="1" cellspacing="0" cellpadding="0">
        <tr>
          <td>空调维修</td>
          <td>空调维修</td>
          <td>空调维修</td>
        </tr>
        <tr>
          <td>空调维修</td>
          <td>空调维修</td>
          <td>空调维修</td>
        </tr>
        <tr>
          <td>空调维修</td>
          <td>空调维修</td>
          <td>空调维修</td>
        </tr>
      </table>
    </div>
    <div class="electricalRepair">
      <h3>家电清洗</h3>
      <table border="1" cellspacing="0" cellpadding="0">
        <tr>
          <td>空调维修</td>
          <td>空调维修</td>
          <td>空调维修</td>
        </tr>
        <tr>
          <td>空调维修</td>
          <td>空调维修</td>
          <td>空调维修</td>
        </tr>
        <tr>
          <td>空调维修</td>
          <td>空调维修</td>
          <td>空调维修</td>
        </tr>
      </table>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import Slider from './slider/slider'
import SliderItem from './slider/slider-item'
import footer from './Foot/foot.vue'
import cbd from '../assets/img/cbd.jpg'
import muwu from '../assets/img/muwu.jpg'
import shuijiao from '../assets/img/shuijiao.jpg'
import yuantiao from '../assets/img/yuantiao.jpg'
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      elArr: [],
      picArr:[
        {name: 'slide',
          src: cbd
        },
        {name: 'slide',
          src: muwu
        },
        {name: 'slide',
          src: shuijiao
        },
        {name: 'slide',
          src: yuantiao
        }
      ],
      moduleListL: [],
    }
  },
  // 先导航和渲染组件，然后在组件的 created 钩子中获取数据
  // 组件创建完后获取数据，
  created () {
  		this.pageInit();
     const self = this
  },
  methods: {
    pageInit() {
        const self = this
				//self.moduleListL=['1','2']
				this.ajax({
					url: '/sysMainFunction/getAll',
					type:"GET",
				}, function(data) {
					if(data.result) {
						self.moduleListL = data.obj
				  	}
				  })
				},
    record(el) {
      console.log(el)
    }
  },
  components: {
     'my-footer': footer,
     'slider': Slider,
     'sliderItem': SliderItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped="">
  @import "../assets/style/sass/common/reset";
  .hello{
    padding-bottom: pxTorem(50px);
    .slider{
      width: 100%;
      height: pxTorem(150px);
      background: #ffffff;
      img{
        width: 100%;
        height: pxTorem(150px);
      }
    }
      ul{
        width: 100%;
        height: pxTorem(150px);
        padding: pxTorem(5px) 0 pxTorem(10px);
        background-color: #ffffff;
        margin-top: pxTorem(10px);
        li{
          float: left;
          width: pxTorem(70px);
          height: pxTorem(65px);
          margin: pxTorem(9px);
          img{
            max-width: pxTorem(40px);
          }
          a{
            display: table;
            margin: pxTorem(3px) auto;
          }
        }
      }
    .electricalRepair{
      width: 100%;
      height: pxTorem(175px);
      background: #ffffff;
      margin-top: pxTorem(10px);
      padding-top: pxTorem(10px);

      h3{
        text-align: left;
        margin-left: pxTorem(5px);
        color: red;
        margin-bottom: pxTorem(12px);
      }
      table{
        border: pxTorem(1px) solid #eeeeee;
        tr{
          height: pxTorem(38px);
        }
      }
    }
  }


</style>
