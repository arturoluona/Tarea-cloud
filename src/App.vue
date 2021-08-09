<template>
  <div class="container my-auto">
    <div class="row">
      <div class="col-sm-6">
        <listTaskProcess/>
        <listTaskCompleted class="mt-4"/>
      </div>
      <div class="col-sm-6">
        <addTask/>
      </div>
    </div>
  </div>
</template>

<script>
import addTask from './components/AddTask.vue'
import listTaskCompleted from './components/ListTaskCompleted.vue'
import listTaskProcess from './components/ListTaskProcess.vue'

export default {
  name: 'App',
  components: {
    addTask,
    listTaskCompleted,
    listTaskProcess
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .cursor-pointer {
    cursor: pointer;
  }
</style>
