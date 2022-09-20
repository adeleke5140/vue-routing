<template>
  <div>
    <h1>Job Details Page</h1>
    <p>The job id is {{ props.id }}</p>
    <span>
      <RouterLink to="/jobs"> Go back </RouterLink>
    </span>
  </div>
</template>

<script setup>
// import { useRoute } from "vue-router";
// import { ref } from "vue";

// const id = ref(null);

// const { params } = useRoute();
// id.value = params.id;

const props = defineProps(["id"]);
console.log(props);
</script>

<style scoped>
a {
  background: hotpink;
  padding: 10px;
  color: white;
  font-size: 14px;
}
</style>
