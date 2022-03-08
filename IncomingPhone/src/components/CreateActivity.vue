<script setup>
import { reactive, ref } from 'vue'
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const emit = defineEmits(['close'])
const props = defineProps(['show'])

const defaultTime = new Date()

const closeDialog = () => {
  console.log('Close Dialog...');
  emit('close')
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

const gridData = [ 
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]


</script>
<template>
  <el-dialog v-model="show" @close="closeDialog" title="Opprett Aktivitet">
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
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="closeDialog"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>
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
</style>