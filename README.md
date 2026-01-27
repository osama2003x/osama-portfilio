# Software Engineering Portfolio

A modern, responsive portfolio website showcasing your software engineering projects across Flutter, Backend (Node.js), and SQL technologies.

## 🎨 Features

- **Tab Navigation**: Smooth switching between About, Skills, and Portfolio sections
- **Categorized Skills**: Organized skill bars for Flutter, Backend, and SQL
- **Project Filtering**: Filter projects by technology category
- **Purple Gradient Theme**: Beautiful dark theme with animated blob backgrounds
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Light/Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Professional fade-in effects and transitions

## 📂 Project Structure

```
PORTIFLIO/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
└── README.md           # This file
```

## 🚀 Getting Started

1. **Open the portfolio**: Simply open `index.html` in your web browser
2. **No build process needed**: It's a static website, no installation required!

## ✏️ Customization Guide

### 1. Personal Information

In `index.html`, update:
- **Name**: Find "Osama Riyad" and replace with your name
- **Title**: Change "Flutter Developer" to your preferred title
- **Bio**: Update the bio paragraph in the About section
- **Email**: Update the email in the "Hire Me" button functionality in `script.js`

### 2. Profile Picture

Replace the placeholder images:
- Find all instances of `https://via.placeholder.com/400` and `https://via.placeholder.com/300`
- Replace with your actual profile picture path: `assets/profile.jpg`

### 3. Skills Section

In `index.html`, modify the skill items:
- Add/remove skills in each category (Flutter, Backend, SQL)
- Update the `data-progress` attribute (0-100) for each skill
- The percentage will animate when the Skills tab is opened

Example:
```html
<div class="skill-item" data-progress="90">
    <div class="flex justify-between mb-2">
        <span class="text-white font-medium">Your Skill Name</span>
        <span class="text-gray-400 skill-percentage">90%</span>
    </div>
    <div class="skill-bar-container">
        <div class="skill-bar" style="width: 0%"></div>
    </div>
</div>
```

### 4. Projects

Update each project card in the Portfolio section:
- **Image**: Replace `https://via.placeholder.com/400x300` with your project screenshot
- **Title**: Update the project name
- **Description**: Add your project description
- **Tech Tags**: Modify the technology tags
- **Links**: Update the GitHub and live demo links
- **Category**: Set `data-category` to: `flutter`, `backend`, `sql`, or `web`

Example:
```html
<div class="project-card" data-category="sql">
    <div class="project-image-container">
        <img src="assets/project-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="https://demo-link.com" class="overlay-btn"><i class="fas fa-eye"></i></a>
            <a href="https://github.com/yourusername/repo" class="overlay-btn"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Project Name</h3>
        <p class="text-gray-400 mb-4">Project description</p>
        <div class="flex flex-wrap gap-2">
            <span class="tech-tag">Tech 1</span>
            <span class="tech-tag">Tech 2</span>
        </div>
    </div>
</div>
```

### 5. Social Links

In the footer section, update social media links:
```html
<a href="https://github.com/yourusername" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

### 6. Download CV

In `script.js`, update the CV download path:
```javascript
window.open('assets/your-cv.pdf', '_blank');
```

### 7. Color Theme (Optional)

In `styles.css`, modify the color variables:
```css
:root {
    --primary: #7c3aed;    /* Purple */
    --secondary: #a855f7;  /* Light Purple */
    --accent: #ec4899;     /* Pink */
}
```

## 🎯 Tips

- **Images**: Store all images in the `assets/` folder
- **Optimization**: Compress images before adding them (use TinyPNG or similar)
- **Testing**: Test on different browsers (Chrome, Firefox, Safari, Edge)
- **Mobile**: Always check mobile responsiveness
- **SEO**: Update meta tags in `<head>` section for better search engine visibility

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

You can deploy this portfolio to:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: Simple deployment with custom domain
- **Any web host**: Upload files via FTP

## 📄 License

Feel free to use this template for your personal portfolio!

## 🤝 Support

If you need help customizing your portfolio, feel free to reach out!

---

Made with ❤️ and lots of ☕
