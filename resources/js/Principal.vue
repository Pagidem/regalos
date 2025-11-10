<template>
  <div class="container-fluid py-5">
    <header class="text-center mb-4">
      <h1 class="titulo"><strong>Bienvenidos</strong></h1>
      <h4 class="subtitulo"><strong>Elige una categoría</strong></h4>
    </header>

    <div class="container-fluid text-center">
      <div id="carouselCategorias" class="carousel slide">

      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselCategorias" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselCategorias" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row g-3 justify-content-center g-1">
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-cocina.png" 
                altText="Cocina" 
                captionText="Cocina" 
                url="/categorias/cocina"
              />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-estanteria.png" 
                alText="Ordenadores" 
                captionText="Ordenadores" 
                url="/categorias/ordenadores"
              />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-mueble.png" 
                altText="Muebles" 
                captionText="Muebleria" 
                url="/categorias/electronica"
              />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-sonido.png" 
                altText="Sonido" 
                captionText="Sonido" 
                url="/categorias/electronica"
              />
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row g-3 justify-content-center g-1">
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-cocina.png" 
                altText="Cocina" 
                captionText="Cocina" 
                url="/categorias/cocina"
              />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-estanteria.png" 
                alText="Ordenadores" 
                captionText="Ordenadores" 
                url="/categorias/ordenadores"
              />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-mueble.png" 
                altText="Muebles" 
                captionText="Muebleria" 
                url="/categorias/electronica"
              />
            </div>
            <div class="col-6 col-md-4 col-lg-3">
              <Tarjeta 
                imgSrc="/images/logo-sonido.png" 
                altText="Sonido" 
                captionText="Sonido" 
                url="/categorias/electronica"
              />
            </div>
          </div>
        </div>


      </div>

      <!-- Controles -->
      <button class="carousel-control-prev custom-control" type="button" data-bs-target="#carouselCategorias" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next custom-control" type="button" data-bs-target="#carouselCategorias" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>

    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Tarjeta from './Components/Principal/Tarjeta.vue';

</script>



<style>
.titulo {
  font-size: 4rem;
  color: white;
  font-family: 'Poppins', sans-serif;
}

.subtitulo {
  font-size: 1.2rem;
  color: #41a641;
  font-family: 'Poppins', sans-serif;
}

.carousel-inner {
  padding: 1rem 0;
}

/* Asegura que los controles estén fuera del grid visualmente */
.custom-control {
  width: 2%;
}

/* Evita que los botones se encimen con las tarjetas */
.carousel-control-prev,
.carousel-control-next {
  filter: invert(50%);
  top: 45%;
  transform: translateY(-50%);
  
}



@media (max-width: 768px) {
  .titulo {
    font-size: 2.8rem;
  }
  .subtitulo {
    font-size: 1rem;
  }
}
</style>
