<template>
  <div class="modal-container">
    <b-button variant="success" v-b-modal.modal-1>Add record</b-button>
    <b-modal
      ref="modal-1"
      hide-footer
      hide-close
      id="modal-1"
      @hide="onModalClose"
      title="Add details"
    >
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Your name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Your age: " label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.age"
            placeholder="Enter age"
            type="number"
            maxlength="2"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Your gender:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.gender"
            :options="genderValues"
            required
            class="gender-select"
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Your contact number: "
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="form.phoneNumber"
            placeholder="Enter phone number"
            required
            maxlength="10"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="submit-button"
          >Submit</b-button
        >
        <b-button type="reset" variant="secondary">Reset</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FormModal",
  props: ["modalData", "showModal"],
  data() {
    return {
      genderValues: [{ text: "Select One", value: null }, "Male", "Female"],
      show: true,
      idEdit: false,
      originalformData: "",
    };
  },
  computed: {
    ...mapGetters(["editState"]),
    form() {
      return this.modalData;
    },
  },
  watch: {
    showModal(newVal) {
      if (newVal) {
        this.$refs["modal-1"].show();
      }
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("onModalSubmit", this.form);
      this.$refs["modal-1"].hide();
    },
    onModalClose() {
      this.$emit("onModalClose");
    },
    onReset(event) {
      event.preventDefault();

      if (this.editState) {
        this.$emit("onEditReset");
      } else {
        // Reset our form values
        this.form.name = "";
        this.form.age = "";
        this.form.gender = null;
        this.form.phoneNumber = "";
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      }
    },
  },
};
</script>
