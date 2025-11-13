<template>
    <div class="container-fluid py-5">
        <header class="text-center mb-4">
            <h1 class="titulo"><strong>Regalos registrados</strong></h1>
        </header>

        <div class="card">
            <div class="card-body">
                <vue-good-table
                    :columns="[
                        { label: 'Regalo', field: 'nombre', sortable: true },
                        { label: 'Categoría', field: 'categoria', sortable: true },
                        { label: 'Donante', field: 'donante', sortable: true },
                       
                    ]"
                    :rows="[
                        { nombre: 'Regalo 1', categoria: 'Categoría A', donante: 'Donante X' },
                        { nombre: 'Regalo 2', categoria: 'Categoría B', donante: 'Donante Y' },
                        { nombre: 'Regalo 3', categoria: 'Categoría A', donante: 'Donante Z' },
                        { nombre: 'Regalo 4', categoria: 'Categoría C', donante: 'Donante X' },
                        { nombre: 'Regalo 5', categoria: 'Categoría B', donante: 'Donante Y' },
                        { nombre: 'Regalo 6', categoria: 'Categoría C', donante: 'Donante Z' },
                        { nombre: 'Regalo 7', categoria: 'Categoría A', donante: 'Donante X' },
                        { nombre: 'Regalo 8', categoria: 'Categoría B', donante: 'Donante Y' },
                        { nombre: 'Regalo 9', categoria: 'Categoría A', donante: 'Donante Z' },
                        { nombre: 'Regalo 20', categoria: 'Categoría C', donante: 'Donante X' },
                        { nombre: 'Regalo 11', categoria: 'Categoría B', donante: 'Donante Y' },
                        { nombre: 'Regalo 12', categoria: 'Categoría C', donante: 'Donante Z' },
                    ]"
                    :pagination-options="{ enabled: true, perPage: 5 }"
                    :search-options="{ enabled: true }"
                /> 
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
</script>

<style>
.container-fluid {
    height: 100vh;
    display: flex;
    flex-direction: column;
}


.card {
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
}

.card-body {
    flex: 1;
    overflow-y: auto;
    max-height: calc(100vh - 180px);
}
</style>