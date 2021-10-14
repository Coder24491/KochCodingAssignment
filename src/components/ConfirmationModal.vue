<template>
  <div class="confirmation-modal-container">
    <b-modal
      ref="modal-2"
      hide-footer
      hide-close
      id="modal-2"
      title="Confimation to delete"
    >
      <h4>Are you sure you want to delete ?</h4>
      <b-button variant="primary" class="submit-button" @click="onYesClick"
        >Yes</b-button
      >
      <b-button variant="secondary" @click="onNoClick">No</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ConfirmationModal",
  props: ["showConfirmationModal"],
  watch: {
    showConfirmationModal(newVal) {
      if (newVal) {
        this.$refs["modal-2"].show();
      }
    },
  },
  methods: {
    onYesClick() {
      this.$refs["modal-2"].hide();
      this.$emit("onYesClick");
    },
    onNoClick() {
      this.$refs["modal-2"].hide();
      this.$emit("onNoClick");
    },
  },
};
</script>
