<template>
  <div id="app">
    <Navbar />
    <!-- <GMap /> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
// import GMap from "@/components/home/GMap";
export default {
  name: "App",
  components: {
    Navbar
    // GMap
  }
};
</script>

<style>
body {
  background: rgb(166, 213, 251);
}
</style>
