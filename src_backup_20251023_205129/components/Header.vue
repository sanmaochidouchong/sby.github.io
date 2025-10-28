<template>
  <nav class="navbar">
    <div class="logo">
      <h1>
        <span class="lang-zh">兴趣爱好社区</span>
        <span class="lang-en">Hobby Community</span>
      </h1>
    </div>
    <ul class="nav-links">
      <li><router-link to="/"> <span class="lang-zh">首页</span><span class="lang-en">Home</span></router-link></li>
      <li><router-link to="/photography"> <span class="lang-zh">摄影</span><span class="lang-en">Photography</span></router-link></li>
      <li><router-link to="/travel"> <span class="lang-zh">旅行</span><span class="lang-en">Travel</span></router-link></li>
      <li><router-link to="/cooking"> <span class="lang-zh">烹饪</span><span class="lang-en">Cooking</span></router-link></li>
    </ul>

    <div class="lang-toggle">
      <button class="lang-btn" @click="switchLanguage('zh')"><span class="lang-zh">中文</span><span class="lang-en">Chinese</span></button>
      <button class="lang-btn" @click="switchLanguage('en')"><span class="lang-zh">英文</span><span class="lang-en">English</span></button>
    </div>

    <div class="hamburger" @click="toggleNav">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const navActive = ref(false)

function toggleNav() {
  navActive.value = !navActive.value
  const links = document.querySelector('.nav-links')
  if (links) links.classList.toggle('active')
}

function switchLanguage(selected) {
  document.documentElement.classList.toggle('en', selected === 'en')
  localStorage.setItem('preferredLanguage', selected)
  // update active state on buttons
  const buttons = document.querySelectorAll('.lang-btn')
  buttons.forEach(btn => btn.classList.remove('active'))
  const active = selected === 'zh' ? buttons[0] : buttons[1]
  if (active) active.classList.add('active')
}

onMounted(() => {
  const saved = localStorage.getItem('preferredLanguage')
  if (saved) switchLanguage(saved)
})
</script>

<style scoped>
/* small spacing to integrate with global CSS */
.nav-links { display:flex; gap:1rem }
.lang-toggle { display:flex; gap:0.5rem }
.hamburger { display:none }
@media (max-width:768px) { .hamburger { display:block } }
</style>
