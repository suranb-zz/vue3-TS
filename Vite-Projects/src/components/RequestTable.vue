<script lang="ts" setup>
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <el-table 
  style="width: 77%; margin: auto;"
  :data="tableData" 
  >
    <el-table-column prop="date" label="Saksnummer" width="180" />
    <el-table-column prop="name" label="Title" width="180" />
    <el-table-column prop="address" label="Status" />
    <el-table-column prop="address" label="Kontaktperson" />
    <el-table-column prop="address" label="Sist endret" />
    <el-table-column prop="address" label="Sakseier" />
  </el-table>
</template>

<style>
el-table {
  padding-top: 10px;
}
</style>