<template>
    <div>
        <button class="btn btn-primary" @click="onGetTasks">Get Tasks</button>
        <hr>
        <app-task v-for="task in tasks" :tsk="task"></app-task>
    </div>
</template>

<script>
    import Task from './task.vue';
    
    export default {
        data() {
            return {
                tasks: []
            }
        },
        methods: {
            onGetTasks() {
                axios.get('http://localhost:8000/api/tasks')
                    .then(
                        response => {
                            this.tasks = response.data.tasks;
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            },
            onTaskDeleted(id) {
                const position = this.tasks.findIndex((element) => {
                    return element.id == id;
                });
                this.tasks.splice(position, 1);
            }
        },
        components: {
            'app-task': Task
        }
    }
</script>