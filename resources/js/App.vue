<template>
      <Principal />
</template>

<script setup>
 import { ref } from 'vue';
 import Principal from './Principal.vue';

</script>

<style>
html, body {
 
  background: radial-gradient(circle at 20% 30%, rgba(107, 190, 132, 0.644), transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(202, 247, 201, 0.774), transparent 40%),
              linear-gradient(135deg, #aadda3, #ffffffe1);
  background-attachment: fixed;
  font-family: 'Poppins', sans-serif;
  color: #4a4a4a;
}

</style>