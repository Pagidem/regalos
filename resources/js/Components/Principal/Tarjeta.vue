<template>
  <a :href="url" class="figure-link-wrapper">
    <img 
    :src="imgSrc"
    :alt="altText"
    class="figure-img img-fluid rounded">
  </a>

  <figcaption class="figure-caption text-center">
    {{ captionText }}
  </figcaption>
</template>

<script setup>

const props = defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  altText: {
    type: String,
    default: 'imagen',
  },
    captionText: {
        type: String,
        required: true,
        default: 'Descripción de la imagen',
    },
    url: {
        type: String,
        required: true,
        default: '#',
    },
});
</script>

<style >
/* 🎨 Estilos CSS para el efecto de botón interactivo (sin cambios) */

.figure-link-wrapper {
  text-decoration: none; 
  color: inherit; 
  display: block;
}

/* Efectos al pasar el cursor (hover) */
.figure-btn {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    overflow: hidden; 
}

.figure-btn:hover {
    transform: translateY(-5px); /* Desplazar hacia arriba */
    box-shadow: 0 .75rem 1.5rem rgba(0,0,0,.1)!important; 
}

/* Efecto de zoom en la imagen */
.figure-img {
    transition: transform 0.3s ease;
}

.figure-btn:hover .figure-img {
    transform: scale(1.05); 
}
</style>