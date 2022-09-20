<template>
  <div>
    <h2>Jobs</h2>
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <RouterLink :to="{ name: 'jobDetails', params: { id: job.id } }">
          {{ job.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
const jobs = [
  {
    title: "Ninja UX Designer",
    id: 1,
    details: "lorem",
  },
  {
    title: "Ninja Web Developer",
    id: 2,
    details: "lorem",
  },
  {
    title: "Ninja Vue Developer",
    id: 3,
    details: "lorem",
  },
];
</script>

<style scoped>
ul {
  list-style: none;
  text-align: center;
}
a {
  text-decoration: none;
  color: #444;
  width: 100%;
}
ul li {
  display: block;
  background: #f4f4f4;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 600px;
  font-weight: bold;
}

li:hover {
  background: #ddd;
}
</style>
