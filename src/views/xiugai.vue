<template >
  <el-form ref="form" :model="form" label-width="100px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="资料卡号">
          <el-input v-model="form.data_card_number"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="桥梁名称">
          <el-input v-model="form.bridge_name"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 基本信息 -->
    <el-form ref="form" :model="form1" label-width="100px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="桥梁编号">
            <el-input v-model="form1.bridge_no"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管理单位">
            <el-input v-model="form1.manage_unit"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="养护单位">
            <el-input v-model="form1.maintenance_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="建设单位">
            <el-input v-model="form1.build_unit"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="设计单位">
            <el-input v-model="form1.design_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="监理单位">
            <el-input v-model="form1.supervision_unit"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="施工单位">
            <el-input v-model="form1.construction_unit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="建成年月">
            <el-input v-model="form1.built_time"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="总造价">
            <el-input v-model="form1.total_cost"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="养护类型">
            <el-input v-model="form1.type_of_maintenance"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="养护等级">
            <el-input v-model="form1.maintenance_level"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="道路等级">
            <el-input v-model="form1.road_level"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="结构类型">
            <el-input v-model="form1.structure_type"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="设计荷载">
            <el-input v-model="form1.design_load"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="限载标准">
            <el-input v-model="form1.load_limit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="抗震烈度">
            <el-input v-model="form1.seismic_intensity"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="正斜交角">
            <el-input v-model="form1.positive_oblique_angle"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="桥梁跨数">
            <el-input v-model="form1.bridge_spans"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="跨径组合">
            <el-input v-model="form1.span_combination"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="桥面面积">
            <el-input v-model="form1.bridge_deck_area"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="桥梁总长">
            <el-input v-model="form1.total_bridge_length"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="桥梁总宽">
            <el-input v-model="form1.total_bridge_width"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="车行道净宽">
            <el-input v-model="form1.clear_width_of_roadway"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="人行道净宽">
            <el-input v-model="form1.clear_width_f_sidewalk"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="河道等级">
            <el-input v-model="form1.river_grade"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="最高水位">
            <el-input v-model="form1.maximum_water_level"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="常水位">
            <el-input v-model="form1.constant_water_level"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row>
      <el-col :span="12">
        <el-form-item label="所在路名">
          <el-input v-model="form.road_name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="桥梁类型编号">
          <el-input v-model="form.bridge_type_no"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="跨越地段">
          <el-input v-model="form.across_lot"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="地区">
          <el-input v-model="form.area"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="审定人">
          <el-input v-model="form.appraiser"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="复核人">
          <el-input v-model="form.reviewer"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="制表人">
          <el-input v-model="form.watchmaker"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="日期">
          <el-input v-model="form.date"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item>
      <el-button type="primary" @click="onSubmit()">立即修改</el-button>
      <el-button type="primary" @click="deSubmit()">删除</el-button>
      <!-- <el-button type="primary" @click="onSubmit1('form1')">立即添加1</el-button> -->
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
import axios from "axios";

export default {
  name: "allCheckTab",
  data() {
    return {
      form: {
        data_card_number: "",
        // substructure_no:'',
        // struct_id:'',
        // Subsidiary_project_no:'',
        // attached_line_no:'',
        bridge_no: "",
        bridge_type_no: "",
        bridge_name: "",
        road_name: "",
        across_lot: "",
        area: "",
        appraiser: "",
        reviewer: "",
        watchmaker: "",
        date: "",
        lng: "",
        lat: "",
      },
      form1: {
        bridge_no: "",
        manage_unit: "",
        maintenance_unit: "",
        build_unit: "",
        design_unit: "",
        supervision_unit: "",
        construction_unit: "",
        built_time: "",
        total_cost: "",
        type_of_maintenance: "",
        maintenance_level: "",
        road_level: "",
        structure_type: "",
        design_load: "",
        load_limit: "",
        seismic_intensity: "",
        positive_oblique_angle: "",
        bridge_spans: "",
        span_combination: "",
        bridge_deck_area: "",
        total_bridge_length: "",
        total_bridge_width: "",
        clear_width_of_roadway: "",
        clear_width_f_sidewalk: "",
        river_grade: "",
        maximum_water_level: "",
        constant_water_level: "",
      },
    };
  },
  methods: {
    onSubmit() {
      //添加
      const _this = this;
      this.form.bridge_no = this.form1.bridge_no;
      axios
        .post("http://localhost:8183/normal_info/save", this.form1)
        .then(function (resp) {
          if (resp.data == "success") {
            _this.$message("修改成功");
          }
        });
      this.form1 = "";
this.onSubmit1(this.form)
    },
      onSubmit1(formName1){
        console.log(formName1)
              axios
        .post("http://localhost:8183/bridge_Information/save", formName1)
        .then(function (resp) {
          if (resp.data == "success") {
            _this.$message("修改成功");
          }
        });
        this.form='';
      },
      deSubmit(){
    const _this = this;
      axios
        .delete("http://localhost:8183/bridge_Information/deleteById/" + this.$route.query.id)
        .then(function (resp) {
           _this.$message('删除成功')
        });
  },
  },
    created() {
    const _this = this;
    axios.get("http://localhost:8183/bridge_Information/findById/"+this.$route.query.id).then(function (resp) {
      _this.form = resp.data
    });
    axios.get("http://localhost:8183/normal_info/findById/"+this.$route.query.id1).then(function (resp) {
      _this.form1 = resp.data
    });
  },
  

};
</script>


<style scoped>
</style>
