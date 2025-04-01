<template>
  <div class="text-center">
    <h1 class="text-4xl sm:text-5xl font-bold tracking-tighter">Bienvenido a nuestro sitio web</h1>

    <p class="md:text-xl text-gray-500 mx-auto w-[600px]">
      Donum mox recipies pro dielitate erga fructus nostros
    </p>

    <p>Contador: {{ numerator }}</p>

    <button @click="numerator++">+1</button>
  </div>
</template>

<script lang="ts" src="./DomusPagina.ts"></script>
