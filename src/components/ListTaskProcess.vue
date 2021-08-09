<template>
  <div class="container text-start">
    <h3>
      <img src="../assets/icons/process.png" width="40" alt="">
      In Progress Tasks
    </h3>

    <div class="alert alert-warning mt-3 d-flex justify-content-between" role="alert"
         v-for="(item, index) of process" :key="index">
      <div>
        <input type="checkbox" id="1" @click="changeType(item, index)"> &nbsp;
        {{item.name}} <span class="text-muted">{{item.description}}</span> {{ index + 1 }}
      </div>
      <div>
        <img class="cursor-pointer" @click="editTask(item, index)" src="../assets/icons/edit.png" width="20" alt=""> &nbsp;
        <img class="cursor-pointer" @click="deleteTask(item, index)" src="../assets/icons/delete.png" width="20" alt="">
      </div>
    </div>
    <h6 v-if="!process.length" class="ps-5">Add new task</h6>
  </div>
</template>

<script>
export default {
  name: 'listTaskProcess',
  computed: {
    process () {
      return this.$store.state.tasks.process
    }
  },
  methods: {
    changeType (item, index) {
      const task = { ...item, id: index }
      this.$store.dispatch('changeType', task)
    },
    editTask (item, index) {
      this.$store.state.edit = { ...item, id: index }
    },
    deleteTask (item, index) {
      this.$store.dispatch('deleteTask', { ...item, id: index })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
