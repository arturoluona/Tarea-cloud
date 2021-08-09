<template>
  <div class="container border rounded text-start py-3">
    <div class="d-flex justify-content-between align-items-center">
      <h3>
        <img src="../assets/icons/add.png" width="30" alt=""> &nbsp;&nbsp;
        Task
      </h3>
      <button @click="clearForm" class="btn btn-success">New</button>
    </div>
    <div class="card mt-3">
      <div class="card-body">
        <form  @submit.prevent="onSubmit">
          <label for="name">Name</label>
          <input required type="text" id="name" v-model="$store.state.edit.name" class="form-control">

          <label for="description">Description</label>
          <input required type="text" id="description" v-model="$store.state.edit.description" class="form-control">

          <div v-if="$store.state.edit.id === null">
            <label for="type">Completed</label> &nbsp;&nbsp;
            <input type="checkbox" v-model="$store.state.edit.type" id="type">
          </div>

          <br><br>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addTask',
  data () {
    return { forms: {} }
  },
  methods: {
    onSubmit () {
      const task = {
        name: this.$store.state.edit.name,
        description: this.$store.state.edit.description,
        type: this.$store.state.edit.type,
        id: this.$store.state.edit.id
      }
      if (task.id !== null) this.$store.dispatch('editTask', task)
      else this.$store.dispatch('addNew', task)
      this.clearForm()
    },
    clearForm () {
      this.$store.state.edit = {
        description: '',
        name: '',
        type: false,
        id: null
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label {
    margin-top: 20px;
  }
</style>
