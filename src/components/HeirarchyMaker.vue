<template>
  <div class="heirarchy-maker-component">
    <div v-for="(value, index) in studentData" :key="index">
      <div v-for="(item, key, i) in value" :key="i">
        <div class="h4 mb-0parent-node">
          <b-icon icon="folder-fill"></b-icon>
          {{ key }}
        </div>
        <div v-for="(record, val) in item" :key="val" class="folder">
          <b-icon icon="folder"></b-icon>
          <ul class="folder-list">
            <li v-for="(a, b, c) in record" :key="c">
              <b-icon icon="file-earmark-bar-graph"></b-icon>
              <span class="title">{{ b }}</span
              >: {{ a }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeirarchyMaker",
  props: ["studentData"],
};
</script>
