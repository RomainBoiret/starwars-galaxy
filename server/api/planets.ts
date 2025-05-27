// server/api/planets.ts
export default defineEventHandler(() => {
  const planets = require('../../data/planets.json')
  return planets
})
