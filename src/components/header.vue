<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link :to="{ name: 'home' }" >To-Do-App</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'add-task' }" class="nav-link">Add Task</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'login' }" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'register' }" class="nav-link">Register</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
