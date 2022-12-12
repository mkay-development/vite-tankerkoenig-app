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
        <fa icon="location-crosshairs" @click="getLocation()" />
      </button>
    </div>
    <div class="col-span-3">
      <h2 class="block mb-2 font-bold">Radius</h2>
      <select v-model="radius" class="w-full h-10 px-2 py-2 bg-gray-400">
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
      <div v-if="errorStr">
        Sorry, but the following error occurred: {{ errorStr }}
      </div>

      <div v-if="gettingLocation">
        <i>Getting your location...</i>
      </div>

      <div v-if="location">
        Your location data is {{ location.coords.latitude }},
        {{ location.coords.longitude }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBrowserLocation } from "@vueuse/core";

let search = ref("");
let coordinates = ref([7.6232, 51.0066]);
let typ = ref("benzin");
let radius = ref(5);
let errorStr = ref("");
let gettingLocation = ref(false);
let location = ref(null);

let getLocation = function(){
  if (!("geolocation" in navigator)) {
    errorStr.value = "Geolocation is not available.";
    return;
  }

  gettingLocation.value = true;
  // get position
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      gettingLocation.value = false;
      location.value = pos;
    },
    (err) => {
      gettingLocation.value = false;
      errorStr.value = err.message;
    }
  );
}

onMounted(function () {
});
</script>
