<script setup>
import { ref, computed } from 'vue'
import GalaxyGlobe from '~/components/GalaxyGlobe.vue'

const search = ref('')
const { data: planets } = await useAsyncData('planets', () =>
  $fetch('/api/planets')
)

const filtered = computed(() =>
  planets.value?.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>

<template>
  <div class="bg-black min-h-screen text-white">
    <!-- 🌌 Carte Galactique 3D -->
    <GalaxyGlobe />

    <!-- 🔍 Barre de recherche + liste -->
    <div class="p-6 bg-white text-black">
      <input
        v-model="search"
        type="text"
        placeholder="Search planet..."
        class="mb-4 w-full px-4 py-2 rounded border border-gray-300"
      />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="planet in filtered"
          :key="planet.name"
          class="p-4 bg-white shadow rounded"
        >
          <h2 class="font-bold text-xl mb-1">{{ planet.name }}</h2>
          <p class="text-sm text-gray-500">{{ planet.region }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
