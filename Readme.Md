# Rental Booking System 🏠

A full-stack web application for booking rental properties, developed using Node.js, Express, MongoDB, and Cloudinary for image storage. This system allows users to list, view, and book properties with ratings, map integration, and responsive UI styling.

## 🚀 Features

- 📍 Google Maps integration for property locations
- 🌄 Cloudinary image uploads for rental listings
- 📋 MongoDB schema for property data
- ⭐ Property rating system
- 🎨 Styled with custom CSS and rating effects
- 📱 Responsive frontend design

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Image Hosting**: Cloudinary
- **APIs**: Google Maps API

---

## 📂 Project Structure

rental-booking-system/
├── app.js                 # Main Express server file – handles routes, middleware, and server logic
├── cloudConfig.js         # Cloudinary configuration for handling image uploads securely
├── schema.js              # Mongoose schema defining rental property fields (title, price, image URL, location, etc.)
├── public/
│   ├── style.css          # General styling for layout, colors, and fonts
│   ├── rating.css         # Custom CSS for star rating UI component
│   ├── script.js          # Client-side JavaScript for interactive UI actions
│   ├── map.js             # Google Maps setup with markers for rental locations
├── views/
│   ├── index.html         # (Expected) Homepage or rental listings view
│   ├── add.html           # (Expected) Page for adding new property listings
│   ├── view.html          # (Expected) Page to view individual property details
├── uploads/               # (If used) Temporary directory for image uploads
├── .env                   # Environment variables (MongoDB URI, Cloudinary credentials, API keys)
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation

## 📸 UI Screenshots





## 📌 Future Enhancements
🔐 User Authentication with JWT

📅 Booking availability calendar

💬 User reviews and feedback

📊 Admin dashboard for property management

🧾 Email confirmation on booking