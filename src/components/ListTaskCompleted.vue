<template>
  <div class="container text-start">
    <h3>
      <img src="../assets/icons/completed.png" width="40" alt="">
      Completed Tasks
    </h3>

    <div class="alert alert-success mt-3 d-flex justify-content-between" role="alert"
         v-for="(item, index) of completed" :key="index">
      <div>
        <input type="checkbox" @click="changeType(item, index)" id="1" checked> &nbsp;
        <span class="strike">{{item.name}} <span class="text-muted">{{item.description}}</span> {{ index + 1 }}</span>
      </div>
      <div>
        <img class="cursor-pointer" @click="editTask(item, index)" src="../assets/icons/edit.png" width="20" alt=""> &nbsp;
        <img class="cursor-pointer" @click="deleteTask(item, index)" src="../assets/icons/delete.png" width="20" alt="">
      </div>
    </div>

    <h6 v-if="!completed.length" class="ps-5">Add new task</h6>
  </div>
</template>

<script>

export default {
  name: 'listTaskCompleted',
  computed: {
    completed () {
      return this.$store.state.tasks.completed
    }
  },
  methods: {
    changeType (item, index) {
      this.$store.dispatch('changeType', { ...item, id: index })
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
.strike {
  text-decoration: line-through;
}
</style>
