📸 Pixabay Clone React App
A responsive React-based web application that fetches and displays high-quality, royalty-free images using the Pixabay API. Built with a modern UI, filter buttons, dynamic category selection, and interactive user experience — this project replicates key features of the popular Pixabay image platform.

🚀 Features
🔍 Explore Images by Type – Photos, Illustrations, Vectors

📂 Browse by Categories – Nature, Fashion, Office, Travel, etc.

🖼️ Responsive Masonry Grid – Fully adaptive layout for all screen sizes

🎯 Tooltips & Hover Effects – Smooth interactions and transitions

🌈 Blurry Background Overlay – Aesthetic hero section with layered visuals

⚡ Fast API Fetching – Real-time image updates via Pixabay API

🧠 Context API – Centralized state management for clean code

🛠️ Tech Stack
React JS

JavaScript (ES6+)

Pixabay API

Context API for state

CSS3 & Media Queries

Font Awesome for icons

📦 Setup Instructions
Clone the Repository

### bash
git clone https://github.com/your-username/pixabay-clone.git
cd pixabay-clone


Install Dependencies
#### bash

npm install
Start the App

### bash

npm run dev
or if you're using Create React App:

#### bash

npm start
API Key Setup
Replace api_key inside PixabayState.jsx with your Pixabay API key.

🖼️ Demo
![Homepage Screenshot](./assets/homepage_ui.png)
![Pixabay Clone ](./assets/image.png)

📁 Folder Structure
src/
├── assets/               # Background images
├── components/           # UI Components (Images, Main, LowerMain)
├── context/
│   ├── PixabayContext.jsx
│   └── PixabayState.jsx
├── App.jsx
└── main.jsx
🔐 Pixabay API
Pixabay offers free access to thousands of stock photos, illustrations, and vector graphics.

This app uses endpoints like:

https://pixabay.com/api/?key=YOUR_API_KEY&category=nature

image_type=photo, illustration, vector, etc.

📱 Responsive Design
Designed to look great on all screen sizes:

✅ Mobile-friendly

✅ Tablet-compatible

✅ Desktop-optimized


👨‍💻 Author
Developed by Diksha Raj
UI inspired by Pixabay.com

⭐️ Give it a Star!
If you found this project helpful or interesting, please consider giving it a ⭐️ on GitHub!
