<template>
    <div>
        <Navbar />
        <div class="flex">
            <Sidebar />
            <div class="bg-red-100 w-full py-3 px-4">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';


</script>

<style lang="scss" scoped>

</style>