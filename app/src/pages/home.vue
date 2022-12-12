<template>
  <div class="grid grid-cols-12 gap-3">
    <div class="col-span-2">
      <h2 class="block mb-2 font-bold">Typ</h2>
      <select v-model="typ" class="w-full h-10 px-2 py-2 bg-gray-400">
        <option value="benzin">Benzin</option>
        <option value="e10">e10</option>
        <option value="diesel">Diesel</option>
      </select>
    </div>
    <div class="col-span-1 md:mt-8">
      <button
        class="flex items-center justify-center w-full h-10 px-2 py-2 bg-gray-400"
      >
        <fa icon="location-crosshairs" />
      </button>
    </div>
    <div class="col-span-3">
      <h2 class="block mb-2 font-bold">Radius</h2>
      <select v-model="typ" class="w-full h-10 px-2 py-2 bg-gray-400">
        <option value="5">5km</option>
        <option value="10">10km</option>
        <option value="25">25km</option>
      </select>
    </div>
    <div class="col-span-6">
      <h2 class="block mb-2 font-bold">Suche</h2>
      <input
        type="text"
        v-model="search"
        class="w-full h-10 px-2 py-2 bg-gray-400"
      />
    </div>
    <div class="col-span-12 map">
      Placeholder for Map
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MglMap, MglNavigationControl } from "vue-maplibre-gl";

let search = ref("");
let coordinates = ref([7.6232, 51.0066]);
let typ = ref("benzin");
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.map {
  width: 100%;
  height: 100vh;
}
</style>
