<template>
  <div>
    <div class="bg-red-700 rounded-lg flex items-center justify-between px-6 py-4 text-white font-bold">
      <h1>Project Settings</h1>
      <div class="border-2 border-black" @click="toggleForm">
        <button v-if="!show" class="bg-red-700 text-white px-2 py-1 rounded-lg">
          <i class="fa-solid fa-plus"></i>
        </button>
        <button v-else class="bg-red-700 text-white px-2 py-1 rounded-lg">
          <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
    <ProjectForm v-if="show"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectForm from "../components/ProjectForm.vue"

const show = ref(false);
const toggleForm = () => {
  show.value = !show.value;
};
</script>

<style lang="scss" scoped></style>
