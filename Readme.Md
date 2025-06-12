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
├── app.js                 
├── cloudConfig.js         
├── schema.js             
├── public/
│   ├── style.css          
│   ├── rating.css         
│   ├── script.js       
│   ├── map.js             
├── views/
│   ├── index.html         
│   ├── add.html           
│   ├── view.html          
├── uploads/              
├── .env                   
├── package.json          
└── README.md             

## 🧪 How to Run the Project Locally
Step 1: Clone the repository
git clone https://github.com/your-username/rental-booking-system.git
cd rental-booking-system

Step 2: Install dependencies
npm install

 Step 3: Add environment variables
touch .env
Add the following:
PORT=3000
MONGODB_URI=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Step 4: Start the server
node app.js


## 📸 UI Screenshots
Home Page

![image alt](https://github.com/mayanksharmagu/Rental-Booking-Platform/blob/af8c238cb3e7901509ee7cd4af2901955b5294e7/Homepage.png)

Card Info

![image alt](https://github.com/mayanksharmagu/Rental-Booking-Platform/blob/07dff2abe1f1a057172928aa6833c81869dfc5c2/card%20info.png)


## 📌 Future Enhancements
🔐 User Authentication with JWT

📅 Booking availability calendar

💬 User reviews and feedback

📊 Admin dashboard for property management

🧾 Email confirmation on booking
