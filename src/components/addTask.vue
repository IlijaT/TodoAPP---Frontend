<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" class="form-control" v-model="todo.title">
            <label for="description">Description</label>
            <input type="text" name="description" class="form-control" v-model="todo.description">
            <label for="priority">Priority</label>
            <input type="text" name="priority" class="form-control" v-model="todo.priority">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import { task } from "../services/taskService";

export default {
  
  data () {
    return {
      todo: {
        title: "",
        description: "",
        priority: ""
      }
    }
  },

  methods: {
    onSubmit(){
      task.addTask(this.todo);
    }
  }
}
</script>