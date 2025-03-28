<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px]"
    />

    <RouterLink
      :to="{ name: 'pokemon', params: { id: id + 1 } }"
      class="bg-blue-500 text-white p-2 mt-5 rounded text-center hover:bg-blue-700"
    >
      Siguiente
    </RouterLink>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  id: number;
}

const props = defineProps<Props>();
</script>
