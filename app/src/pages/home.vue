<template>
  <div class="grid grid-cols-12 gap-3">
    <div class="col-span-6 md:col-span-2">
      <h2 class="block mb-2 font-bold">Typ</h2>
      <select v-model="typ" class="w-full h-10 px-2 py-2 bg-gray-400">
        <option value="benzin">Benzin</option>
        <option value="e10">e10</option>
        <option value="diesel">Diesel</option>
      </select>
    </div>
    <div class="col-span-6 mt-8 md:col-span-1">
      <button
        @click="getLocation()"
        class="flex items-center justify-center w-full h-10 px-2 py-2 bg-gray-400"
      >
        <fa icon="location-crosshairs" />
      </button>
    </div>
    <div class="col-span-6 md:col-span-3">
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
        placeholder="Stadt oder PLZ"
        class="w-full h-10 px-2 py-2 bg-gray-400"
      />
    </div>
    <div class="col-span-12 map">
      Placeholder for Map
      <button @click="requestPermissions()">req</button>
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
import { ref } from "vue";
import { useVibrate } from "@vueuse/core";

const { vibrate } = useVibrate({ pattern: [300, 100, 300] });
let search = ref("");
let typ = ref("benzin");
let radius = ref(5);
let errorStr = ref("");
let gettingLocation = ref(false);
let location = ref(null);

let getLocation = function () {
  if (!("geolocation" in navigator)) {
    errorStr.value = "Geolocation is not available.";
    return;
  }

  gettingLocation.value = true;
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
};
</script>
