<template>
    <div>
        <h2>Tasks to do:</h2>
        <hr>
        <div class="card card-body mb-2" v-for="todo in todos" v-bind:key="todo.id">
            <h4>Title: {{ todo.title }}</h4>
            <p>Description: {{ todo.description }}</p>
            <p>Priotity: {{ todo.priority }}</p>
            <h5 v-if="todo.is_done==0">Not finished yet</h5>
            <h5 v-else>Finished</h5>
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>
</template>

<script>
    import { task } from "../services/taskService";
    
    export default {
        data() {
            return {
                todos: [],

                todo: {
                    title: "",
                    description: "",
                    prority: "",
                    is_done: ""
                }
            }
        },

        created() {
            this.onSubmit();
        },

        methods: {
            onSubmit() {
                task.getTasks()
                    .then((response) => {
                        this.todos = response.data;
                    });
            }
        }

    }
</script>