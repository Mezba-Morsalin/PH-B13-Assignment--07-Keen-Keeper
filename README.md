# 📌 Keen Keeper

**Keen Keeper** is a simple and clean React-based web application to help you manage and track your personal relationships. You can store friends, monitor interactions, and stay connected through calls, texts, and video interactions.

---

## 🌐 Live Demo

🚀 **Live Site:** https://mezba-keen-keeper.netlify.app/

---

## 🚀 Features

* 👥 View and manage friends list
* 📊 Track interactions (Call, Text, Video)
* 📈 Visual stats using charts
* 🕒 Timeline of interactions
* 🔍 Filter interactions easily
* 🔔 Toast notifications for actions
* ⚡ Fast performance using Vite

---

## 🛠️ Tech Stack

* React
* React Router
* Tailwind CSS
* DaisyUI
* Recharts
* React Hot Toast

---

## 📂 Project Structure

```
keen-keeper/
│
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   ├── friends.json
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── call.png
│   │   ├── text.png
│   │   ├── video.png
│   │   └── logos...
│   │
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Layout.jsx
│   │   └── Shared/
│   │       ├── Banner/
│   │       ├── Footer/
│   │       ├── Navbar/
│   │       └── Friends/
│   │
│   ├── Pages/
│   │   ├── Home/
│   │   ├── Timeline/
│   │   ├── Stats/
│   │   └── FriendDetails/
│   │
│   ├── FriendsProvider/
│   │   └── FriendsProvider.jsx
│   │
│   ├── Err/
│   │   └── Error.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/Mezba-Morsalin/PH-B13-Assignment--07-Keen-Keeper

# Go to project folder
cd keen-keeper

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 🌐 Routing

* `/` → Home
* `/timeline` → Timeline
* `/stats` → Stats
* `/friends` → Friends List
* `/friends/:id` → Friend Details

---

## 📊 Stats System

* Calls, Texts, Videos are tracked using Context API
* Data is visualized with Pie Chart
* Shows "No Interaction Found" if empty

---

## 🧠 State Management

* React Context API
* Global state for:

  * Calls
  * Texts
  * Videos

---

## 🎯 Future Improvements

* 🔄 Sort by date
* 📅 Add interaction history timeline animation
* 🔐 Authentication system
* ☁️ Backend integration

---

## 👨‍💻 Author

**Mezba Morsalin**
Frontend Developer (React Learner 🚀)

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
