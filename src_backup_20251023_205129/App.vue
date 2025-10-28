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
    <header>
      <Header />
    </header>

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style>
/* Scoped styles are in assets/style.css */
:root {
  --transition: 0.3s;
}

.logo h1 {
  margin: 0;
}

.nav-links a {
  cursor: pointer;
}
</style>
