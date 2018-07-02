<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" name="title" class="form-control" v-model="title">
            <label for="description">Description</label>
            <input type="text" name="description" class="form-control" v-model="description">
            <label for="priority">Priority</label>
            <input type="text" name="priority" class="form-control" v-model="priority">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
import { task } from "../services/authService";

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