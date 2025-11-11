<template>
    <div class="container-fluid">
        <div class="card mb-3 shadow-sm rounded-3">
            <div class="card-body d-flexjustify-content-between">
                
                <div class="d-flex align-items-center">
                    <img src="/public/images/logo-sonido.png" alt="" class="img-fluid rounded-circle imagen-fila" />
                    <div>
                        <h5 class="card-title"><strong>Nombre del Regalo</strong></h5>
                        <p class="card-text">Descripción breve del regalo.</p>
                    </div>
                </div>

                <div class="d-flex align-items-center gap-2">
                <span class="badge bg-success px-2 py-2 fw-semibold">Disponible</span>
                <a href="#" class="btn btn-warning btn-sm fw-semibold text-white">Seleccionar</a>
                </div>


            </div>
        </div>
    </div>
</template>


<script setup>
</script>


<style>
.imagen-fila {
    width: 50px;
    height: auto;
    max-height: 50px;
    object-fit: contain;
    object-position: center;
    padding: 5px;
}

.badge {
  font-size: 0.8rem;       /* iguala tamaño del texto */
  padding: 0.2rem 0.50rem; /* aumenta el grosor */
  line-height: 1.2;
}


</style>