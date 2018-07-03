<template>
    <div>
        <div v-if="editMode">
            <h2>Edit task</h2>
            <hr>
            <form @submit.prevent="saveChanges">
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
        </div>

        <div v-else>
            <h2>Tasks to do:</h2>
            <hr>
            <div class="card card-body mb-2" v-for="todo in todos" :key="todo.id">
                <h4>Title: {{ todo.title }}</h4>
                <p>Description: {{ todo.description }}</p>
                <p>Priotity: {{ todo.priority }}</p>
                <h5 v-if="!todo.is_done">Not finished yet</h5>
                <h5 v-else>Finished</h5>
                <button @click="editTodo(todo)" type="button" class="btn btn-warning mb-1">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { taskService } from "../services/taskService";
    
    export default {
        data() {
            return {
                todos: [],

                todo: {
                    title: "",
                    description: "",
                    priority: "",
                    is_done: ""
                },

                editMode: false,
            }
        },

        created() {
            this.getTodos();
        },

        methods: {
            getTodos() {
                taskService.getTasks()
                    .then((response) => {
                        this.todos = response.data;
                    });
            },

            editTodo(todo) {
                this.toggleMode();
                this.todo = todo;
            },

            toggleMode() {
                this.editMode = !this.editMode;
            },

            saveChanges() {
                this.toggleMode();
                taskService.editTask(this.todo)
                    .then((response) => {
                        this.$router.push({name: "tasks"});
                    });
            }
        }
    }
</script>