<template>
  <div class="heirarchy-container">
    <h3 class="heirarchy-container--title">Heirarchy builder</h3>
    <b-form @submit="onSubmit" class="heirarchy-container--form">
      <b-row>
        <b-col
          cols="6"
          v-for="(data, index) in heirarchyData"
          :key="index"
          class="heirarchy-form--dropdown"
        >
          <Dropdown
            :label="data.label"
            :id="data.id"
            :options="data.options"
            :isRequired="data.isRequired"
            :classes="data.classes"
            @onSelect="onSelect"
            :modalValues="heirarchyMakerData"
          />
        </b-col>
        <b-form-group
          id="input-group-1"
          label="Your name:"
          label-for="input-1"
          class="heirarchy-form--input col-6"
        >
          <b-form-input
            id="input-1"
            v-model="studentName"
            placeholder="Enter name"
            required
            class="input-field"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <b-button type="submit" variant="primary" class="submit-button"
        >Submit</b-button
      >
    </b-form>
    <HeirarchyMaker :studentData="studentData" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { heirarchyData } from "@/assets/heirarchyData";
import Dropdown from "@/components/Dropdown";
import HeirarchyMaker from "@/components/HeirarchyMaker";
export default {
  name: "Heirarchy",
  components: { Dropdown, HeirarchyMaker },
  data() {
    return {
      heirarchyData: "",
      studentName: "",
      heirarchyMakerData: [],
    };
  },
  beforeMount() {
    this.heirarchyData = heirarchyData();
  },
  computed: {
    ...mapGetters(["studentData", "editState"]),
  },
  methods: {
    ...mapMutations(["SET_STUDENT_DATA"]),
    onSubmit(event) {
      event.preventDefault();
      let data = this.studentData;
      let isMatch = false;
      Object.keys(data[0]).forEach((key) => {
        if (key === this.heirarchyMakerData["school"].replace(/\s/g, "")) {
          data[0][key].push({
            name: this.studentName,
            class: this.heirarchyMakerData["class"],
            section: this.heirarchyMakerData["section"],
            gender: this.heirarchyMakerData["gender"],
            school: this.heirarchyMakerData["school"],
          });
          isMatch = true;
        }
      });
      if (!isMatch) {
        // this works in Vue2 only
        this.$set(
          data[0],
          [this.heirarchyMakerData["school"].replace(/\s/g, "")],
          [
            {
              name: this.studentName,
              class: this.heirarchyMakerData["class"],
              section: this.heirarchyMakerData["section"],
              gender: this.heirarchyMakerData["gender"],
              school: this.heirarchyMakerData["school"],
            },
          ]
        );
        // below solution for Vue3
        // data[0][this.heirarchyMakerData["school"].replace(/\s/g, "")] = [
        //   {
        //     name: this.studentName,
        //     class: this.heirarchyMakerData["class"],
        //     section: this.heirarchyMakerData["section"],
        //     gender: this.heirarchyMakerData["gender"],
        //     school: this.heirarchyMakerData["school"],
        //   },
        // ];
      }
      this.SET_STUDENT_DATA(data);
      this.heirarchyMakerData = [];
      this.studentName = "";
    },
    onSelect(data) {
      Object.assign(this.heirarchyMakerData, {
        [data["id"]]: data.value,
      });
    },
  },
};
</script>
