<template>
  <div>
    <div class="left" >
      <baidu-map class="map" :center = center1 :zoom=15 @ready="handler">
        <!--缩放-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
        <!--定位-->
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
        <!--点-->
        <bm-marker :position = center1 :dragging=true animation="BMAP_ANIMATION_DROP">
          <!--提示信息-->
          <bm-info-window :show=true>
            <tr>{{name1}}</tr>
            <!-- <tr>{{number1}}</tr> -->
            <!-- <el-table :data="xy" style="width: 50%">
                  <el-table-column prop="data_card_number"  /> -->
                  <!-- <template #default="scope">
                <el-button size="small" @click="search(scope.row)">sas</el-button>
            </template> -->
            
                <el-button @click="search(number)">查看桥梁信息</el-button>
                <el-button @click="xiugai(number)">修改/删除桥梁信息</el-button>
          </bm-info-window>
        </bm-marker>
      </baidu-map>
    </div>
    <div class="right">
              <!-- <button class="btn" @click = "Onclick(xy[index])">{{item.bridge_name}}</button> -->
      <!-- <button class="btn" @click = "Onclick(xy[0])">{{xy[0].bridge_name}}</button>
       <button class="btn" @click = "Onclick(xy[1])">{{xy[1].bridge_name}}</button> -->
       <ul v-for="(item,index) in xy" :key="index">
            <el-button  @click="Onclick(xy[index])">{{item.bridge_name}}</el-button>
       </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Map",
  data()
  {
    return{
      xy: [
        {
          lng:106.572,
          lat:29.572,
          bridge_name: "鱼嘴两江大桥",
          data_card_number:1,
          bridge_no:1,
        }
      ],
      center1:{lng: 106.5852,lat: 29.5715},
      name1: "千厮门大桥",
      number:1,
      number1:1,
    }
  },
  created() {
    const _this = this
    axios.get('http://localhost:8183/bridge_Information/findAll').then(function (resp){
      _this.xy = resp.data;
    })
  },
  methods: {
    handler({BMap, map}) {
      let me = this;
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true);
      // 点击事件获取经纬度
      map.addEventListener('click', function (e) {
        console.log(e.point.lng, e.point.lat)
        alert(e.point.lng)
        alert(e.point.lat)
      })
    },
    Onclick(index) {
      this.center1 = {lng: index.lng,lat: index.lat};
      this.name1 = index.bridge_name;
      this.number = index.data_card_number;
      this.number1 = index.bridge_no;
    },
    search(number){
        this.$router.push({
            path:'/',
            query:{
                id:number,
                id1:this.number1
            }
        })
    },
    xiugai(number){
        this.$router.push({
            path:'/xiugai',
            query:{
                id:number,
                id1:this.number1
            }
        })
    },
    // search(){
    //     this.$router.push({path:'/'})
    // }
  },
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 600px;
}
.btn{
  width: 150px;
  float: contour;
  float: contour;
}
.left{
  float: left;
  width: 50%;
  height: 100%;
  position: absolute;
  overflow: auto;
}
.right{
  right: 450px;
  width: 12%;
  height: 300px;
  position: absolute;
  overflow: auto;

}
</style>