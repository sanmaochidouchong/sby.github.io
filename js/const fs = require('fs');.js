const fs = require('fs');
const https = require('https');
const path = require('path');

// 确保images文件夹存在
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 图片URL和文件名的映射
const imagesToDownload = [
  // 首页图片
  { url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&auto=format&fit=crop&q=60', filename: 'hero-background.jpg' },
  { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60', filename: 'photography-cover.jpg' },
  { url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=60', filename: 'travel-cover.jpg' },
  { url: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=60', filename: 'cooking-cover.jpg' },
  
  // 摄影页面图片
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60', filename: 'photo-mountains.jpg' },
  { url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop&q=60', filename: 'photo-city.jpg' },
  { url: 'https://images.unsplash.com/photo-1518495973542-ca3b19f8e85f?w=800&auto=format&fit=crop&q=60', filename: 'photo-wildlife.jpg' },
  { url: 'https://images.unsplash.com/photo-1504198266670-5d2b501de2a4?w=800&auto=format&fit=crop&q=60', filename: 'photo-portrait.jpg' },
  { url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60', filename: 'photo-abstract.jpg' },
  { url: 'https://images.unsplash.com/photo-1465572089651-8fde36c892dd?w=800&auto=format&fit=crop&q=60', filename: 'photo-macro.jpg' },
  
  // 旅行页面图片
  { url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&auto=format&fit=crop&q=60', filename: 'travel-beach.jpg' },
  { url: 'https://images.unsplash.com/photo-1486982182703-cf394cc4b9a0?w=800&auto=format&fit=crop&q=60', filename: 'travel-mountain.jpg' },
  { url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&auto=format&fit=crop&q=60', filename: 'travel-forest.jpg' },
  { url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&auto=format&fit=crop&q=60', filename: 'travel-city.jpg' },
  { url: 'https://images.unsplash.com/photo-1535127026000-80022131f5a1?w=800&auto=format&fit=crop&q=60', filename: 'travel-desert.jpg' },
  { url: 'https://images.unsplash.com/photo-1515443864244-16f82dc1391e?w=800&auto=format&fit=crop&q=60', filename: 'travel-lake.jpg' },
  
  // 烹饪页面图片
  { url: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60', filename: 'cooking-steak.jpg' },
  { url: 'https://images.unsplash.com/photo-1589872543440-b2026e3b515a?w=800&auto=format&fit=crop&q=60', filename: 'cooking-chicken.jpg' },
  { url: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60', filename: 'cooking-pasta.jpg' },
  { url: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=60', filename: 'cooking-sushi.jpg' },
  { url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60', filename: 'cooking-dessert.jpg' },
  { url: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&auto=format&fit=crop&q=60', filename: 'cooking-vegetarian.jpg' }
];

// 下载图片函数
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imagesDir, filename));
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlinkSync(path.join(imagesDir, filename));
      reject(err);
    });
  });
}

// 下载所有图片
async function downloadAllImages() {
  try {
    for (const img of imagesToDownload) {
      await downloadImage(img.url, img.filename);
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
}

downloadAllImages();