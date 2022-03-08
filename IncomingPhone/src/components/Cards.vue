<script setup>
import { reactive, ref } from 'vue'
import CreateActivity from './CreateActivity.vue'
const companyName = "Ganske Enkelt AS"; //ref(new Date())
const personName = "Suran Basharati"; //ref(new Date())

let items = ref([
  { "id": 1, "name": "SuperOffice Norge AS", "src": "./src/assets/company.svg" },
  { "id": 2, "name": "Suran Basharati", "src": "./src/assets/person.svg" },
  { "id": 3, "name": "Opprett Sak", "src": "./src/assets/request.svg" },
  { "id": 4, "name": "Opprett Aktivitet", "src": "./src/assets/calender.svg" },
  { "id": 5, "name": "Vis firma", "src": "./src/assets/company.svg" }
]);

let defaultTime = new Date()
let showDialog = ref(false)
const cardClick = () => {
  showDialog.value = true
}
</script>
<!-- TEMPLATE -->
<template>
  <el-row>
    <el-col>
      <el-card 
      :body-style="{ padding: '0px' }"
      v-for="item in items"
     :key="item.name">
      <div class="inner" @click="cardClick()">
        <img
        :src="item.src"
          class="image">
        <div class="bottom">
        <p>{{ item.name }}</p>
        </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <CreateActivity :show="showDialog" @close="showDialog = false"></CreateActivity>
</template>
<!-- STYLE -->
<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  min-height: auto;
}
.el-col {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.el-card {
  width: 15%;
}
.image {
  padding-top: 5%;
  width: 10%;
}
</style>