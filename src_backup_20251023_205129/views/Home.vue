<script setup>
import Hero from '../components/Hero.vue'
import Hobbies from '../components/Hobbies.vue'
import Features from '../components/Features.vue'
import Forum from '../components/Forum.vue'
</script>

<template>
  <div>
    <Hero />

    <Hobbies>
      <div class="hobby-card">
        <img data-src="/images/微信图片_20251022184727.jpg" alt="摄影">
        <h3>
          <span class="lang-zh">摄影</span>
          <span class="lang-en">Photography</span>
        </h3>
        <p>
          <span class="lang-zh">捕捉美好瞬间，分享摄影技巧和作品</span>
          <span class="lang-en">Capture beautiful moments, share photography tips and works</span>
        </p>
        <button class="btn" @click="$router.push('/photography')">
          <span class="lang-zh">进入社区</span>
          <span class="lang-en">Enter Community</span>
        </button>
      </div>

      <div class="hobby-card">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60" alt="旅行">
        <h3>
          <span class="lang-zh">旅行</span>
          <span class="lang-en">Travel</span>
        </h3>
        <p>
          <span class="lang-zh">探索世界各地，分享旅行经历和攻略</span>
          <span class="lang-en">Explore the world, share travel experiences and guides</span>
        </p>
        <button class="btn" @click="$router.push('/travel')">
          <span class="lang-zh">进入社区</span>
          <span class="lang-en">Enter Community</span>
        </button>
      </div>

      <div class="hobby-card">
        <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60" alt="烹饪">
        <h3>
          <span class="lang-zh">烹饪</span>
          <span class="lang-en">Cooking</span>
        </h3>
        <p>
          <span class="lang-zh">学习美食制作，分享食谱和烹饪心得</span>
          <span class="lang-en">Learn food preparation, share recipes and cooking experiences</span>
        </p>
        <button class="btn" @click="$router.push('/cooking')">
          <span class="lang-zh">进入社区</span>
          <span class="lang-en">Enter Community</span>
        </button>
      </div>
    </Hobbies>

    <Features>
      <div class="feature-item">
        <h3>
          <span class="lang-zh">分享作品</span>
          <span class="lang-en">Share Works</span>
        </h3>
        <p>
          <span class="lang-zh">上传你的摄影作品、旅行照片或美食成品</span>
          <span class="lang-en">Upload your photography, travel photos or food creations</span>
        </p>
      </div>
      <div class="feature-item">
        <h3>
          <span class="lang-zh">交流讨论</span>
          <span class="lang-en">Exchange and Discuss</span>
        </h3>
        <p>
          <span class="lang-zh">参与各种话题讨论，结交志同道合的朋友</span>
          <span class="lang-en">Participate in discussions, make like-minded friends</span>
        </p>
      </div>
      <div class="feature-item">
        <h3>
          <span class="lang-zh">学习技巧</span>
          <span class="lang-en">Learn Skills</span>
        </h3>
        <p>
          <span class="lang-zh">从他人经验中学习，提升自己的技能水平</span>
          <span class="lang-en">Learn from others' experiences, improve your skills</span>
        </p>
      </div>
    </Features>

    <Forum />
  </div>
</template>

<style scoped>
</style>

