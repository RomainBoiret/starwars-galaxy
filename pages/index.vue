<script setup>
const planets = await useFetch('/data/planets.json')
</script>

<template>
  <main class="p-6">
    <h1 class="text-3xl font-bold mb-4">Star Wars Galaxy - Canon Planets</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PlanetCard v-for="planet in planets.data" :key="planet.name" :planet="planet" />
    </div>
  </main>
</template>
