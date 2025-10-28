<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue'

function lazyLoadImages() {
  const lazyImages = document.querySelectorAll('img[data-src]')
  lazyImages.forEach(img => {
    const rect = img.getBoundingClientRect()
    const screenPos = window.innerHeight / 1.3
    if (rect.top < screenPos) {
      img.src = img.dataset.src
      img.removeAttribute('data-src')
    }
  })
}

onMounted(() => {
  window.addEventListener('load', lazyLoadImages)
  window.addEventListener('scroll', lazyLoadImages)
})
</script>

<template>
  <div :class="{ en: lang === 'en' }">
    <template>
      <div id="app">
        <h1>Welcome</h1>
        <p>This project was reverted to a minimal state (images preserved in /public/images).</p>
        <div>
          <h3>Example image from public/images:</h3>
          <img src="/images/" alt="images folder" style="max-width:300px;" />
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'App'
    }
    </script>

    <style>
    body { font-family: Arial, sans-serif; }
    #app { padding: 2rem; }
    </style>
.logo h1 {
  margin: 0;
}

.nav-links a {
  cursor: pointer;
}
</style>
