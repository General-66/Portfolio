# Lesedi Manganyi - Personal Portfolio Website

![License](https://img.shields.io/badge/license-MIT-blue) ![Status](https://img.shields.io/badge/status-live-success)

A modern, responsive single-page portfolio website built with vanilla HTML, CSS, and JavaScript. It features a sophisticated morphing navigation system, a dark mode aesthetic with gold accents, and seamless user interactions without the need for heavy frameworks.

**[🔴 View Live Demo](https://lesedimanganyi.co.za)**

## 📸 Screenshots

![Hero Section](resources/images/personal_images.png)
*The Hero section featuring real-time availability status.*

## ✨ Key Features

### 🎨 Design & UI
- **Premium Aesthetic:** Dark charcoal background (`#1a1a1a`) with Gold (`#d4af37`) accents.
- **Responsive Layout:** Mobile-first approach using CSS Grid and Flexbox.

### ⚡ Interactivity
- **Real-Time Data:** Displays the current time in Johannesburg using the JavaScript `Intl.DateTimeFormat` API.
- **Toast Notifications:** Custom-built success/error popups for form submissions (no external alert libraries).
- **Clipboard Actions:** One-click copy functionality for email and phone numbers.
- **Smart Contact Form:** AJAX-based submission using Web3Forms (no page reloads) with retry logic and failure counting.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Variables, Keyframes, Backdrop Filters), Vanilla JavaScript (ES6+)
- **Icons:** FontAwesome
- **API:** Web3Forms (Contact Form handling)

## 💻 Installation & Setup

Since this project uses vanilla web technologies, no build steps (like `npm install`) are required.

1. **Clone the repository**
   ```bash
   git clone [https://github.com/General-66/Portfolio.git](https://github.com/General-66/Portfolio.git)
Run the project

Open index.html directly in your browser.

OR use the Live Server extension in VS Code for hot-reloading.

Configure Contact Form

The project uses Web3Forms for emails.

If you fork this project, replace the access_key in index.html (Line 418) with your own API key.

📂 File Structure
Plaintext

portfolio/
├── index.html       # Main structure
├── index.css        # Styles, animations, and variables
├── index.js         # Logic for nav, time, and form handling
├── resources/       # Images, Icons, and CV PDF
└── README.md        # Documentation
🎨 Customization
To adapt this portfolio for your own use, change the CSS variables in index.css:

CSS

/* Primary accent color */
nav a { color: #d4af37; } 

/* Background colors */
body { background-color: #1a1a1a; }
📄 License
Distributed under the MIT License. See LICENSE for more information.

📧 Contact
Lesedi Manganyi Johannesburg, South Africa

Email: lesedimanganyi2006@gmail.com

LinkedIn: https://www.linkedin.com/in/lesedi-manganyi-5822802ab/

Acknowledgments
Web3Forms for the email API.

FontAwesome for the icon set.
