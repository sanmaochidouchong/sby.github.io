// 汉堡菜单交互
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// 导航链接点击后关闭菜单
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 图片懒加载
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(img => {
        const imgPosition = img.getBoundingClientRect();
        const screenPosition = window.innerHeight / 1.3;
        
        if (imgPosition.top < screenPosition) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    });
}

// 初始加载和滚动时懒加载
window.addEventListener('load', lazyLoadImages);
window.addEventListener('scroll', lazyLoadImages);

// 模拟论坛帖子交互
function setupForumInteractions() {
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const likeCount = this.nextElementSibling;
            let count = parseInt(likeCount.textContent);
            
            if (this.classList.contains('liked')) {
                this.classList.remove('liked');
                likeCount.textContent = count - 1;
            } else {
                this.classList.add('liked');
                likeCount.textContent = count + 1;
            }
        });
    });
}

// 创建帖子表单提交处理
function setupCreatePostForm() {
    const postForm = document.querySelector('.create-post-form');
    if (postForm) {
        postForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // 根据页面语言设置显示对应语言的提示
            const isEnglish = document.documentElement.classList.contains('en');
            alert(isEnglish ? 'Post created! In a real application, this would be sent to the server.' : '帖子已创建！在实际应用中，这里会发送到服务器。');
            this.reset();
        });
    }
}

// 页面加载完成后初始化功能
window.addEventListener('DOMContentLoaded', () => {
    setupForumInteractions();
    setupCreatePostForm();
    
    // 添加页面进入动画
    const fadeElements = document.querySelectorAll('.hobby-card, .feature-item, .forum-post, .gallery-item');
    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});