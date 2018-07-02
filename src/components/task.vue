<template>
     
        <div class="panel panel-deafault">
         	<div class="panel-body">
         		{{tsk.title}}
         		{{tsk.description}}
         		{{tsk.priority}}
        	</div>
          	<div class="panel-footer">
                <div v-if="editing">
                    <label for="title">Change title</label>
                    <input type="text" v-model="editTitle" name="title">
                    <label for="descript">Change description</label>
                    <input type="text" v-model="editDescription" name="descript">
                    <label for="priority">Change priority</label>
                    <input type="text" v-model="editPriority" name="priority">
                    
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="check1" value="true" v-model="editIsDone">
                        <label for="check1">Done</label>
                        <input class="form-check-input" type="checkbox" id="check2" value="false" v-model="editIsDone">
                        <label for="check2">Not done</label>
                    </div>

                    <a @click="onUpdate">Save</a>
                    <a @click="onCancel">Cancel</a>
                </div>
                <div v-if="!editing">
                    <a @click="onEdit">Edit</a>
                    <a @click="onDelete">Delete</a>
                </div>
        </div>
        </div>
</template

<script>
    
    export default {
        props: ['tsk'],

        data() {
            return {
                editing: false,
                editTitle: this.tsk.title,
                editDescription: this.tsk.description,
                editPriority: this.tsk.priority,
                editIsDone: this.tsk.is_done,
            }
        },
        methods: {
            onEdit() {
                this.editing = true;
                this.editValue = this.tsk.content
            },
            onCancel() {
                this.editing = false;
            },
            onDelete() {
                this.$emit('taskDeleted', this.tsk.id);
                axios.delete('http://laravel-ng2-vue.dev/api/task/' + this.tsk.id)
                    .then(
                        response => console.log(response)
                    )
                    .catch(
                        error => console.log(error)
                    )
            },
            onUpdate() {
                this.editing = false;
                this.tsk.content = this.editValue;
                axios.put('http://laravel-ng2-vue.dev/api/tsk/' + this.tsk.id,
                    {content: this.editValue})
                    .then(
                        response => console.log(response)
                    )
                    .catch(
                        error => console.log(error)
                    );
            }
        }
    }
</script>

 