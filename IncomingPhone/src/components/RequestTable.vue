<script setup>

const underLine = false;

const tableData = [
  {
    id: 103424,
    title: 'Tom',
    status: 'Aktiv',
    custid: 'Ola Normann',
    lastChanged: '2021-01-01',
    owner: 'Suran Basharati',
    url: 'https://online2.superoffice.com/Cust25790/CS/scripts/ticket.fcgi?_sf=0&action=viewTableEntry&table=ticket&id=5324'
  },
  {
    id: 103666,
    title: 'Per',
    status: 'Aktiv',
    custid: 'Ola Normann',
    lastChanged: '2021-01-01',
    owner: 'Suran Basharati',
    url: 'https://online2.superoffice.com/Cust25790/CS/scripts/ticket.fcgi?_sf=0&action=viewTableEntry&table=ticket&id=5325'
  },
  {
    id: 100474,
    title: 'Olav',
    status: 'Avsluttet',
    custid: 'Ola Normann',
    lastChanged: '2021-01-01',
    owner: 'Suran Basharati',
    url: 'https://online2.superoffice.com/Cust25790/CS/scripts/ticket.fcgi?_sf=0&action=viewTableEntry&table=ticket&id=5326'
  },
  {
    id: 99084,
    title: 'Markus',
    status: 'Aktiv',
    custid: 'Ola Normann',
    lastChanged: '2021-01-01',
    owner: 'Suran Basharati',
    url: '<a href="https://online2.superoffice.com/Cust25790/CS/scripts/ticket.fcgi?_sf=0&action=viewTableEntry&table=ticket&id=5327"</a>'
  },
]

const baseUrl = "https://online2.superoffice.com/Cust25790/CS/scripts/ticket.fcgi?_sf=0&action=viewTableEntry&table=ticket&id=";
const handleClick = (index, ticketId) => {
  window.open(baseUrl + ticketId);
}
</script>

<template>
  <el-table 
  style="width: 77%; margin: auto;"
  :data="tableData" 
  >
    <el-table-column prop="id" label="Saksnummer" width="180" />
    <el-table-column prop="title" label="Title" width="180" />
    <el-table-column prop="status" label="Status" />
    <el-table-column prop="custid" label="Kontaktperson" />
    <el-table-column prop="lastChanged" label="Sist endret" />
    <el-table-column prop="owner" label="Sakseier"/>
    <el-table-column prop="url">
      <template #default="scope">
      <el-button type="primary" plain @click="handleClick(scope.$index, scope.row.id)">
        Gå Til Sak
      </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
el-table {
  padding-top: 10px;
}
</style>