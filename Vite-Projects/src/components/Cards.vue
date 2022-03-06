<script lang="ts" setup>
import { reactive, ref } from 'vue'
const companyName: String = "Ganske Enkelt AS"; //ref(new Date())
const personName: String = "Suran Basharati"; //ref(new Date())
let dialogTableVisible = ref(false)
let dialogFormVisible = ref(false)
const formLabelWidth = '140px'
//const props = defineProps(['showDialog'])

let items = [
  { "id": 1, "name": "SuperOffice Norge AS", "src": "./src/assets/company.svg" },
  { "id": 2, "name": "Suran Basharati", "src": "./src/assets/person.svg" },
  { "id": 3, "name": "Opprett Sak", "src": "./src/assets/request.svg" },
  { "id": 4, "name": "Opprett Aktivitet", "src": "./src/assets/calender.svg" },
  { "id": 5, "name": "Vis firma", "src": "./src/assets/company.svg" }
];

let defaultTime = new Date()
console.log(defaultTime);

const cardClick = (id: number) => {
  if(id == 4)
  dialogFormVisible.value = true;
}

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})


</script>
<template>
  <el-row>
    <el-col>
      <el-card 
      :body-style="{ padding: '0px' }"
      v-for="item in items"
     :key="item.name">
      <div class="inner" @click="cardClick(item.id)">
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
  
  <el-dialog v-model="dialogFormVisible" title="Opprett Aktivitet">
    <el-form :model="form">
      <!-- Aktivitets Type -->
      <el-form-item label="Type Aktivitet" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Velg aktivitet">
          <el-option label="Zone No.1" value="shanghai"></el-option>
          <el-option label="Zone No.2" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <!-- Firma -->
      <el-form-item label="Firma" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <!-- Person -->
      <el-form-item label="Person" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>

      <!-- Start -->
      <div class="demo-datetime-picker">
        <el-form-item label="Start" :label-width="formLabelWidth">
<div class="block">
          <el-date-picker
            v-model="form.date1"
            type="datetime"
            placeholder="Select date and time"
            :default-time="defaultTime"
            >
          </el-date-picker>
          </div>
        </el-form-item>
        <!-- Slutt -->
        <el-form-item label="Slutt" :label-width="formLabelWidth">
          <div class="block">
          <el-date-picker
            v-model="form.date2"
            type="datetime"
            placeholder="Select date and time"
            :default-time="defaultTime"
            >
          </el-date-picker>
          </div>
        </el-form-item>
      </div>
      <!-- Beskrivelse -->
      <el-form-item label="Beskrivelse" :label-width="formLabelWidth">
        <el-input v-model="form.desc" type="textarea" :row="8" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>

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

.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.demo-datetime-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-datetime-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color-base);
  flex: 1;
}
.demo-datetime-picker .block:last-child {
  border-right: none;
}
.demo-datetime-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>