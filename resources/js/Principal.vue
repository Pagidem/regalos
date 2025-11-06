<template>
   <div class="container">
    <h1 class="titulo"><strong>Bienvenidos</strong></h1>
    <h4 class="subtitulo"><strong>Elige una categoria</strong></h4>
    
    <div class="row">

        <div class="col-6">
            <Tarjeta />
        </div>
        <div class="col-6">
            <Tarjeta />
        </div>

    </div>
    <div class="row">

        <div class="col-6">
            <Tarjeta />
        </div>
        <div class="col-6">
            <Tarjeta />
        </div>

    </div>

   </div> 
</template>

<script setup>
import { ref } from 'vue';
import Tarjeta from './Components/Principal/Tarjeta.vue';


</script>


<style>
/*Colores, tamaño y tipo de letra del titulo*/
.titulo {
    font-size: 6rem;
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
}

.subtitulo {
    font-size: 1rem;
    text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
}

.col{
    padding: 10px;
}
/* Tablets */
@media (max-width: 1024px) {
  .titulo {
    font-size: 4rem;
  }
}

/* Celulares grandes */
@media (max-width: 768px) {
  .titulo {
    font-size: 3rem;
  }
}

/* Celulares pequeños */
@media (max-width: 480px) {
  .titulo {
    font-size: 2.2rem;
  }
}

</style>
