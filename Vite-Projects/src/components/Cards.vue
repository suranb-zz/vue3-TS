<script lang="ts" setup>
import { ref } from 'vue'
const companyName: String = "Ganske Enkelt AS"; //ref(new Date())
const personName: String = "Suran Basharati"; //ref(new Date())

let items = [
  { "name": "SuperOffice Norge AS", "src": "./src/assets/company.svg" },
  { "name": "Suran Basharati", "src": "./src/assets/person.svg" },
  { "name": "Opprett Sak", "src": "./src/assets/request.svg" },
  { "name": "Opprett Aktivitet", "src": "./src/assets/calender.svg" },
  { "name": "Vis firma", "src": "./src/assets/company.svg" }
];

const cardClick = (element: String) => {
  console.log(element);
}

</script>
<template>
  <el-row>
    <el-col>
      <el-card 
      :body-style="{ padding: '0px' }"
      v-for="item in items"
     :key="item.name"
      >
      <div class="inner" @click="cardClick(item.name)">
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
</template>

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