<!-- components/GalaxyGlobe.vue -->
<template>
  <div ref="globeEl" class="h-[600px] w-full" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Globe from 'globe.gl'

const globeEl = ref(null)

onMounted(async () => {
  const planets = await $fetch('/api/planets')

  const g = Globe()(globeEl.value)
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .pointsData(planets)
    .pointLat('lat')
    .pointLng('lng')
    .pointAltitude(0.02)
    .pointColor(() => 'orange')
    .pointLabel(p => p.name)

  g.controls().autoRotate = true
  g.controls().autoRotateSpeed = 1.2
})
</script>

<style scoped>
div {
  background-color: black;
}
</style>
