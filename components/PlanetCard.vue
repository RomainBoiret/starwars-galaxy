<template>
  <div class="rounded-xl shadow bg-white p-4 hover:scale-105 transition">
    <h2 class="text-xl font-semibold">{{ planet.name }}</h2>
    <p><strong>Region:</strong> {{ planet.region }}</p>
    <p><strong>Climate:</strong> {{ planet.climate }}</p>
    <NuxtLink :to="`/planet/${planet.name}`" class="text-blue-500 underline mt-2 block">
      View Details
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  planet: Object
})
</script>
