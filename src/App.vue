<template>
  <div>
    <button @click="count++">++</button>
    <span>{{count}}</span>
  </div>
</template>
<script setup >
import { ref } from 'vue';
const count = ref(0);
</script>