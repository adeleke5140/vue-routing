<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";

const router = useRouter();

function redirect() {
  router.push({ name: "home" });
}

function back() {
  router.go(-1);
}

function forward() {
  router.go(1);
}
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/jobs">Jobs</RouterLink>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <RouterView />
</template>

<style scoped>
nav {
  margin-top: 20px;
  margin-bottom: 40px;
}

nav a {
  text-decoration: none;
  color: black;
  margin-right: 20px;
  font-size: 16px;
}
nav a.router-link-exact-active {
  background-color: hsla(160, 100%, 37%, 1);
  padding: 10px;
  /* border-radius: 10px; */
  font-weight: bold;
  color: white;
  transition: background 200ms ease-in;
}

button {
  margin: 0 10px;
  padding: 10px;

  border: none;
  border-radius: 4px;
}
</style>
