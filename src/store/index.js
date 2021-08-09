import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: {
      process: [],
      completed: []
    },
    edit: {
      description: '',
      name: '',
      type: false,
      id: null
    }
  },
  mutations: {
    addNew (state, task) {
      task.type
        ? state.tasks.completed = [task, ...state.tasks.completed]
        : state.tasks.process = [task, ...state.tasks.process]
    },
    changeType (state, task) {
      if (task.type) state.tasks.completed.splice(task.id, 1)
      else state.tasks.process.splice(task.id, 1)

      task.type = !task.type
      task.type
        ? state.tasks.completed = [task, ...state.tasks.completed]
        : state.tasks.process = [task, ...state.tasks.process]
    },
    editTask (state, task) {
      if (task.type) state.tasks.completed.splice(task.id, 1, task)
      else state.tasks.process.splice(task.id, 1, task)
    },
    deleteTask (state, task) {
      if (task.type) state.tasks.completed.splice(task.id, 1)
      else state.tasks.process.splice(task.id, 1)
    }
  },
  actions: {
    addNew ({ commit }, item) {
      commit('addNew', item)
    },
    changeType ({ commit }, item) {
      commit('changeType', item)
    },
    editTask ({ commit }, item) {
      commit('editTask', item)
    },
    deleteTask ({ commit }, item) {
      commit('deleteTask', item)
    }
  },
  modules: {
  }
})
