<template>
  <div class="crud-container">
    <h3 class="crud-container--title">Basic CRUD operations using Vuex</h3>
    <b-form-input
      v-model="filterText"
      placeholder="Enter 3 char to filter by name"
      class="filter-input"
    ></b-form-input>
    <Table
      :tableData="tableData"
      @onRowEdit="onRowEdit"
      @onRowDelete="onRowDelete"
    />
    <FormModal
      :modalData="modalData"
      :showModal="showModal"
      @onModalSubmit="onSubmit"
      @onModalClose="onModalClose"
      @onEditReset="onEditReset"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Table from "@/components/Table";
import FormModal from "@/components/FormModal";
export default {
  name: "Crud",
  data() {
    return {
      modalData: {
        name: "",
        age: "",
        gender: null,
        phoneNumber: "",
      },
      showModal: false,
      originalRowData: "",
      tableData: "",
      filterText: "",
    };
  },
  components: { Table, FormModal },
  computed: {
    ...mapGetters(["tableDataMaster", "editState", "filteredData"]),
  },
  mounted() {
    this.tableData = this.tableDataMaster;
  },
  watch: {
    tableDataMaster(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    filterText(newVal) {
      if (newVal.length >= 3) {
        let arrayData = [];
        this.tableDataMaster.forEach((item) => {
          if (item.name.toLowerCase().includes(newVal.toLowerCase())) {
            arrayData.push(item);
          }
        });
        this.tableData = arrayData;
      } else {
        this.tableData = this.tableDataMaster;
      }
    },
  },
  methods: {
    ...mapMutations(["SET_TABLE_DATA", "SET_EDIT_STATE"]),
    onSubmit(data) {
      let newData = "";
      if (this.editState) {
        newData = this.tableDataMaster.map((item) => {
          if (item.name === this.originalRowData.name) {
            item = data;
          }
          return item;
        });
      } else {
        newData = this.tableDataMaster;
        newData.push(data);
      }
      this.SET_TABLE_DATA(newData);
      this.tableData = newData;
      this.showModal = false;
    },
    onRowEdit(rowData) {
      this.originalRowData = rowData;
      // Avoid mutations on edit
      this.modalData = JSON.parse(JSON.stringify(rowData));
      this.showModal = true;
      this.SET_EDIT_STATE(true);
    },
    onRowDelete(rowData) {
      const newData = this.tableDataMaster.filter(
        (e) => e.name !== rowData.name
      );
      this.SET_TABLE_DATA(newData);
      this.tableData = newData;
    },
    onEditReset() {
      // Avoid mutations on edit
      this.modalData = JSON.parse(JSON.stringify(this.originalRowData));
    },
    onModalClose() {
      this.modalData = {
        name: "",
        age: "",
        gender: "",
        phoneNumber: "",
      };
      this.showModal = false;
    },
  },
};
</script>
