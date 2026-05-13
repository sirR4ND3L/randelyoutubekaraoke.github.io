# 🎤 Karaoke Pro - Next-Gen Glass Experience

A premium, modern web-based Karaoke player designed with a sleek **Glassmorphism** aesthetic and an **Apple-style Dynamic Island** interface. Built for a seamless "Karaoke Box" experience directly in your browser.

![Version](https://img.shields.io/badge/version-2.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **💎 Premium Glass UI:** Sophisticated glassmorphism design with blur effects, interactive shimmers, and smooth floating animations.
- **🏝️ Dynamic Island Header:** A smart, sticky header that reacts to playback states and displays "Now Playing" information.
- **🎙️ Hybrid Visualizer:** Real-time microphone audio visualization for singers, with an automatic "Simulation Mode" to keep the UI dynamic even when the mic is off.
- **💯 Performance Scoring System:** Evaluates vocal energy and rhythm matching. Includes a live floating score badge and a final overlay showing your rank (Legendary, Rockstar, etc.).
- **🎉 Custom Score Sounds:** Plays celebration or feedback sounds (`scoreSound.mp3`) when a song ends.
- **📋 Smart Queue System:** Add and manage songs with a beautiful "Up Next" card interface. The queue seamlessly auto-plays the next song the moment your score sound finishes.
- **🔍 Robust Search:** Integrated YouTube search with multiple fallback proxies (Invidious, AllOrigins) to ensure reliability and bypass CORS restrictions.
- **⌨️ Power-User Shortcuts:** 
  - `Z` - Play
  - `X` - Pause
  - `C` - Restart
  - `B` - Cancel (Skip to Next)
  - `F` - Fullscreen
  - `Enter` - Search & Play
  - `Shift + Enter` - Search & Reserve

## 🚀 Getting Started

### Prerequisites
To use the search functionality reliably, it is recommended to add your own **YouTube Data API v3 Key** in the code:
1. Open `index.html`.
2. Find the constant `YOUTUBE_API_KEY` (around line 850).
3. Replace the placeholder with your key.

### Installation
Since this is a portable, single-file application, there is no installation required!
1. Download `index.html`.
2. Open it in any modern web browser.
3. Start singing!

## 🛠️ Tech Stack
- **HTML5:** Semantic structure.
- **CSS3:** Custom variables, Glassmorphism, and hardware-accelerated animations.
- **Vanilla JavaScript:** Core logic, YouTube IFrame API integration, and Web Audio API.
- **Canvas API:** High-performance real-time audio visualization.

## 🔐 Security & Protection
The application is designed to be hosted on static platforms like **GitHub Pages**. To protect your API key:
- Use **HTTP Referrer restrictions** in the Google Cloud Console.
- Restrict the key to only work on your specific `*.github.io` domain.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
*Created with ❤️ by Randel*
