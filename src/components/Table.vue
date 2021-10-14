<template>
  <div class="table case-listing">
    <table class="table__el">
      <thead class="table__thead">
        <tr class="table__tr">
          <th
            class="table__th"
            v-for="heading in headings"
            :key="heading.title"
          >
            {{ heading.title }}
          </th>
        </tr>
      </thead>
      <tbody class="table__tbody" v-for="(row, key) of tableData" :key="key">
        <tr class="table__tr hover-style" data-test="data">
          <td class="table__td" v-for="(value, cellkey) in row" :key="cellkey">
            <div>
              {{ value }}
            </div>
          </td>
          <td>
            <div>
              <b-button variant="primary primary-class" @click="editRow(row)"
                >Edit</b-button
              >
              <b-button variant="danger" @click="deleteRow(row)"
                >Delete</b-button
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <ConfirmationModal
      :showConfirmationModal="showConfirmationModal"
      @onYesClick="confirmDelete"
      @onNoClick="reverseDelete"
    />
  </div>
</template>

<script>
import ConfirmationModal from "@/components/ConfirmationModal";
export default {
  name: "Table",
  props: ["tableData"],
  components: { ConfirmationModal },
  data() {
    return {
      headings: [
        { title: "Name", id: "name", class: "" },
        { title: "Age", id: "age", class: "" },
        { title: "Gender", id: "gender", class: "" },
        { title: "Contact number", id: "phoneNumber", class: "td--long" },
        { title: "Actions", id: "actions", class: "" },
      ],
      showConfirmationModal: false,
      rowData: "",
    };
  },
  methods: {
    editRow(row) {
      this.rowData = row;
      this.$emit("onRowEdit", row);
    },
    deleteRow(row) {
      this.rowData = row;
      this.showConfirmationModal = true;
    },
    confirmDelete() {
      this.showConfirmationModal = false;
      this.$emit("onRowDelete", this.rowData);
    },
    reverseDelete() {
      this.showConfirmationModal = false;
    },
  },
};
</script>
