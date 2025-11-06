<template>
  <div class="container-fluid p-4">
    <header class="text-center mb-4">
      <h1 class="titulo"><strong>Bienvenidos</strong></h1>
      <h4 class="subtitulo"><strong>Elige una categoría</strong></h4>
    </header>

    <div id="carouselCategorias" class="carousel slide position-relative">

      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselCategorias" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselCategorias" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">

        <div class="carousel-item active">
          <div class="container">
            <div class="row g-3 justify-content-center">
              <div class="col-6 col-md-3">
                <Tarjeta categoria="anime" />
              </div>
              <div class="col-6 col-md-3">
                <Tarjeta categoria="manga" />
              </div>
              <div class="col-6 col-md-3">
                <Tarjeta categoria="futbol" />
              </div>
              <div class="col-6 col-md-3">
                <Tarjeta categoria="musica" />
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="container">
            <div class="row g-3 justify-content-center">
              <div class="col-6 col-md-3">
                <h1>Probando</h1>
              </div>
              <div class="col-6 col-md-3">
                <Tarjeta categoria="tecnologia" />
              </div>
              <div class="col-6 col-md-3">
                <Tarjeta categoria="moda" />
              </div>
              <div class="col-6 col-md-3">
                <h1>Probando</h1>
              </div>
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
</template>

<script setup>
import Tarjeta from './Components/Principal/Tarjeta.vue'
</script>

<style scoped>
.titulo {
  font-size: 4rem;
  color: white;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 0.5rem;
}

.subtitulo {
  font-size: 1.2rem;
  color: #ccc;
  font-family: 'Poppins', sans-serif;
}

.carousel-inner {
  padding: 2rem 0;
}

/* Asegura que los controles estén fuera del grid visualmente */
.custom-control {
  width: 5%;
}

/* Evita que los botones se encimen con las tarjetas */
.carousel-control-prev,
.carousel-control-next {
  filter: invert(100%);
  top: 45%;
  transform: translateY(-50%);
}

/* Márgenes entre tarjetas */
.col {
  padding: 10px;
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
