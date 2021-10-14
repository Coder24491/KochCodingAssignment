<template>
  <div class="dropdown-container">
    <b-form-group :label="label" :label-for="id">
      <b-form-select
        :id="id"
        v-model="modalValues[id]"
        :options="options"
        :required="isRequired"
        :class="classes"
        @change="onSelect(id, modalValues[id])"
      ></b-form-select>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["label", "id", "modalValues", "options", "isRequired", "classes"],
  data() {
    return {
      value: "",
    };
  },
  beforeMount() {
    this.modalValues[this.id] = null;
  },
  methods: {
    onSelect(id, value) {
      this.$emit("onSelect", {
        id,
        value,
      });
    },
  },
};
</script>
