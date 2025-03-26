<template>
  <main class="bg-slate-100">
    <nav>
      <RouterLink to="#/">Home</RouterLink>
      <RouterLink to="#/features">Features</RouterLink>
      <RouterLink to="#/pricing">Pricing</RouterLink>
      <RouterLink to="#/contact">Contact</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style scoped></style>
