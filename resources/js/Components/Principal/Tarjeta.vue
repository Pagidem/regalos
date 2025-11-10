<template>
  <div class="tarjeta">
    <a :href="url" class="figure-link-wrapper">
      <img 
        :src="imgSrc"
        :alt="altText"
        class="figure-img img-fluid rounded"
      >
    </a>
    <figcaption class="figure-caption text-center">
      {{ captionText }}
    </figcaption>
  </div>
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
    default: 'Descripción de la imagen',
  },
  url: {
    type: String,
    default: '#',
  },
});
</script>

<style scoped>
.tarjeta {
  border-radius: 1rem;
  overflow: hidden;
  background: #ffffff2c; /* leve fondo translúcido */
  backdrop-filter: blur(5px);
  text-align: center;
  padding: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.tarjeta:hover {
  transform: translateY(-5px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Imagen */
.figure-img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  transition: transform 0.3s ease;
}

.tarjeta:hover .figure-img {
  transform: scale(1.08);
}

/* Texto debajo */
.figure-caption {
  margin-top: 0.6rem;
  color: #3a7435;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}
</style>
