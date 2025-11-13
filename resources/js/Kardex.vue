<template>
    <div class="container-fluid py-5">
        <header class="text-center mb-4">
            <h1 class="titulo"><strong>Registro de regalo</strong></h1>
        </header>
        <div class="card">
            <div class="card-body">
                <form>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="nombre" class="form-label">Regalo:</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Detalle">
                        </div>
                        <div class="col">
                            <label for="categoria" class="form-label">Categoría:</label>
                            <select class="form-select" id="categoria">
                                <option selected>Seleccione una categoría</option>
                                <option value="1">Electrónica</option>
                                <option value="2">Ropa</option>
                                <option value="3">Juguetes</option>
                                <option value="4">Hogar</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col">
                            <label for="precio" class="form-label">Donante :</label>
                            <input type="number" class="form-control" id="precio" placeholder="Nombre">
                        </div>
                        <div class="col">
                            <label for="cantidad" class="form-label">Observaciones :</label>
                            <input type="number" class="form-control" id="cantidad" placeholder="A nombre de">
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Registrar regalo</button>
                </form>
            </div>
        </div>
        <Regalo />
    </div>
</template>

<script setup>  

</script>

<style> 

</style>