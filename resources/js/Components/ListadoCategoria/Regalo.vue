<template>
    <div class="container-fluid p-0 p-md-3">
        <div class="card mb-4 shadow-lg border-0 rounded-4 product-card">
            
            <div class="card-body d-flex flex-row flex-sm-row align-items-center">
                
                <div class="rounded-3 gap-3 d-flex align-items-center justify-content-center product-image-container me-3 mb-3 mb-sm-0">
                    <img src="/public/images/logo-sonido.png" alt="Icono de Producto" class="rounded-3 product-icon " />
                </div>
                
                <div class="flex-grow-1 text-center text-sm-start">
                    <h5 class="card-title fw-bold text-primary mb-1">Regalo</h5>
                    <div class="row">
                        <div class="col-4">
                            <p class="card-text text-muted mb-0">Cat</p>
                        </div>
                        <div class="col-4">
                            <p class="card-text text-muted mb-0">Pre</p>
                        </div>
                        <div class="col-4">
                            <p class="card-text text-muted mb-0">Est</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="card-footer d-flex justify-content-center bg-white gap-1">
                <span class="btn bg-warning status-badge text-white rounded-circle"> --- </span>
                <a href="" class="btn btn-success ">Registrar</a>
            </div>
            
            </div>
    </div>
</template>

<script setup>
// Lógica de Vue (vacía para este ejemplo)
</script>

<style scoped>
/* Estilos Específicos para la Tarjeta */

/* Estilo para la Tarjeta base */
.product-card {
    transition: transform 0.2s;
}
.product-card:hover {
    transform: translateY(-3px); /* Efecto sutil de elevación al pasar el mouse */
}

/* Estilo del Contenedor de Imagen (para dar espacio alrededor del ícono) */
.product-image-container {
    padding: 5px; /* Pequeño espacio para el ícono */
    background-color: #f8f9fa; /* Fondo claro para destacar el ícono */
    border-radius: 8px;
}

/* Estilo del Ícono/Imagen */
.product-icon {
    width: 60px; /* Mayor tamaño para íconos/logos */
    height: 60px; 
    object-fit: contain;
}

/* Estilo del Badge (para que parezca más un componente de estado que un badge de texto) */
.status-badge {
    /* Ajustes mínimos para modernizar el aspecto del badge */
    font-size: 0.9rem;
}

/* Responsividad: Opcionalmente, puedes ajustar el tamaño de fuente para móvil */
/*
@media (max-width: 576px) {
    .card-title {
        font-size: 1.1rem;
    }
}
*/
</style>