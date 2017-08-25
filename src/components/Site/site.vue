<template>
    <div>
      <mt-header title="服务地址" style="background: #fd7b27;">
        <mt-button  v-link="'/'" icon="back" slot="left">返回</mt-button>
      </mt-header>
      <div style="margin-bottom: 16%;">
        <div v-if="addrList.length==0" style="text-align: center;background: white;padding: 10px;">
          暂无收获地址
        </div>
        <div v-for="(obj,index) in addrList" style="margin-top: 15px; " class="a_title">
          <mt-cell  style="padding-top: 9px;padding-bottom: 9px;" class="get_detail">
            <div slot="title" style="font-size: 15px; color: #222;">
              {{obj.contractUser}}&nbsp;&nbsp;&nbsp;&nbsp;{{obj.tel}}
              <div  style="margin-top: 15px; color: #999; font-size: 13px;line-height: 20px;">
                <!--{{obj.provinceName+obj.cityName+obj.areaName+obj.detailAdress||''}}-->
                {{obj.provinceName}}&nbsp;{{obj.cityName}}&nbsp;{{obj.areaName}}&nbsp;{{obj.detailAdress}}
              </div>
            </div>
          </mt-cell>
          <a class="mint-cell">
            <div class="mint-cell-wrapper">
              <div class="mint-cell-title">
                <!---->
                <label class="mint-radiolist-label" style="padding: 0 7px;">
							<span class="mint-radio" >
								<input type="radio" class="mint-radio-input" :checked="obj.isDefault" :value="true" name='mr' @click="defaultaddress(obj)">
								<span class="mint-radio-core"></span>
							</span> <span class="mint-radio-label" style="font-size:14px;color: #999;">设为默认 </span>
                </label>
              </div>
              <div class="mint-cell-value" style="width: 40%;text-align: right;">
								<span @click="goto(obj)" style=" width: 50%; color: black;font-size:14px ;">
							<img style=" margin-bottom: 3px;" src="../../assets/img/bj.png" width="16" height="16" />
							编辑
						</span>
                <span @click="remove(obj,index)" style="width: 50%;margin-right: 5%; color: black;font-size:14px ;color: #999;">
							<img style="margin-bottom: 3px;" src="../../assets/img/del.png" width="16" height="16" />
							删除
						</span>
              </div>
            </div>
            <div class="mint-cell-right"></div>
          </a>
        </div>
      </div>
      <div style=" position: fixed;bottom: 0px;width: 100%;background: #FFFFFF;text-align: center; ">
        <mt-button size="large" @click.native="goto()" style=" background: #fd7b27;width: 100%;" type="primary">新增收货地址</mt-button>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
        return {
          addrList: []
        }
    },
    created() {
      this.getSysUserAdressByUserId()
    },
    methods: {
      getSysUserAdressByUserId() {
        const self = this;
        this.ajax({
          url: '', //通过userid获得地址
          data: {
            userid: localStorage.userId
          },
          type: 'post'
        }, function(data) {
          if(data.result) {
            self.addrList = data.obj;
          } else {
            self.$toast(data.description)
          }
        })
      },
      defaultaddress (obj) {
        let self = this;
        if(localStorage.defaultaddress){
          var address=JSON.parse(localStorage.defaultaddress);
          if(address.adressId===obj.adressId){
            return
          }
        }
        localStorage.defaultaddress = JSON.stringify(obj)
        this.ajax({
          url:  '',//设置为默认地址的url
          data: {
            adressId: obj.adressId,
            userid: localStorage.userId
          },
          type: 'post'
        }, function(data) {
          if(data.result) {
            self.getSysUserAdressByUserId()
          }
          self.$toast(data.description)
        })
      },
      goto(param) {
        let page = {
          name: 'mine_address'
        };
        if(param) {
          page = {
            name: 'mine_address',
            title: '编辑收货地址'
          }
          this.$router.push(page);
        } else {
          this.$router.push(page);
        }
      },
      remove (obj, index) {
        var self = this;
        this.$messagebox.confirm('确认删除?').then(action => {
          this.ajax({
            url: '', //删除地址
            data: {
              adressId: obj.adressId,
              userid: localStorage.userId
            },
            type: 'post'
          }, function(data) {
            if(data.result) {
              self.addrList.splice(index, 1)
            }
            self.$toast(data.description)
          })
        })
      }
    }
  }
</script>

<style lang='scss'>

</style>
