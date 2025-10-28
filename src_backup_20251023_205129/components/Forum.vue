<script setup>
import { ref } from 'vue'

const posts = ref([
  { id: 1, title: 'Welcome!', content: 'This is a sample post.', likes: 2 },
  { id: 2, title: 'Share your photos', content: 'Post your best shots here.', likes: 5 }
])

function toggleLike(post) {
  post.liked = !post.liked
  post.likes += post.liked ? 1 : -1
}

function createPost(e) {
  e.preventDefault()
  const form = e.target
  const title = form.title.value.trim()
  const content = form.content.value.trim()
  if (!title || !content) return
  posts.value.unshift({ id: Date.now(), title, content, likes: 0 })
  form.reset()
  alert('Post created! (local demo)')
}
</script>

<template>
  <section class="forum-section">
    <h2>
      <span class="lang-zh">讨论区</span>
      <span class="lang-en">Forum</span>
    </h2>

    <form class="create-post-form" @submit="createPost">
      <input name="title" placeholder="Title / 标题" />
      <textarea name="content" placeholder="Content / 内容"></textarea>
      <button class="btn" type="submit">Submit</button>
    </form>

    <div class="forum-posts">
      <div class="forum-post" v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p class="post-content">{{ post.content }}</p>
        <div class="post-meta">
          <div>
            <a href="#" class="like-btn" @click.prevent="toggleLike(post)" :class="{ liked: post.liked }">Like</a>
            <span class="like-count">{{ post.likes }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.create-post-form { display:flex; flex-direction:column; gap:8px; margin-bottom:16px }
.create-post-form input, .create-post-form textarea { padding:8px; border:1px solid #ddd; border-radius:6px }
.forum-post { padding:16px }
.like-btn.liked { color: #e74c3c }
</style>
