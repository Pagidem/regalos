<template>
    <div class="container-fluid py-5">
        <header class="text-center mb-4">
            <h1 class="titulo"><strong>Listado de Regalos</strong></h1>
        </header>
        <Regalo />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Regalo
 from './Components/ListadoCategoria/Regalo.vue';
</script>

<style>
</style>