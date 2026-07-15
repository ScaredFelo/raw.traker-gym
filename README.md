# RAW TRACKER PRO 🏋️‍♂️💻

A minimalist, high-performance, **Offline-First** Progressive Web App (PWA) designed for tracking hypertrophy and strength training. Built with an industrial, distraction-free aesthetic, this application prioritizes immediate utility, seamless interaction, and offline reliability on mobile devices (optimized for iOS/iPhone).

---

## 🚀 Key Features

*   **Offline-First Architecture**: Powered by a local Service Worker and `localStorage`. The app works 100% offline in the gym—no internet connection required after the initial load.
*   **PPL / UL Hybrid Routine Built-in**: Pre-loaded with a highly optimized 5-day training split: **Push / Pull / Legs / Upper / Lower**[span_0](start_span)[span_0](end_span).
*   **Dynamic Target Rep Ranges**: Every exercise displays its specific hypertrophy target range (e.g., `6-8` or `8-10` reps) right below its title to guide your progressive overload[span_1](start_span)[span_1](end_span).
*   **Persistent Exercise Notes**: Write specific setup notes (e.g., *"Incline bench angle: 3rd notch"*) directly under any exercise. Notes persist automatically across future sessions.
*   **Interactive Set Tagging**: Easily categorize your sets by tapping the set number:
    *   **N** (Normal / Working Set)
    *   **C** (Warm-up / Calentamiento)
    *   **F** (Failure Set)
    *   **D** (Dropset)
*   **Individual Set Deletion**: Instantly remove any specific set in real-time with a single tap on the trash (`🗑️`) icon.
*   **Built-in Rest Timer & Custom Charts**: Keep track of your rest intervals and visualize your monthly and yearly strength progression curves directly from your local session history.

---

## 🛠️ Tech Stack & Architecture

This is a pure vanilla project engineered for speed, low overhead, and Zero-Dependency operation:

*   **Frontend**: HTML5, CSS3 (using dynamic CSS variables and native safe-area insets for iOS), and Modern ES6+ JavaScript.
*   **Caching & PWA**: Custom Service Worker (`sw.js`) utilizing Cache Storage API for instant offline boots.
*   **Storage**: Native `localStorage` for high-speed, client-side data persistence.
*   **Graphics**: Dynamic SVG generation for lightweight, mathematically accurate performance charts.

---

## 📲 Installation on iOS (Safari)

1. Navigate to your deployed GitHub Pages URL:
   `https://ScaredFelo.github.io/raw.traker-gym/gym.trk-v5.html`
2. Tap the **Share** button in Safari.
3. Select **"Add to Home Screen"**.
4. Open the app from your home screen. You can now disable Wi-Fi/Cellular data and track your workouts completely offline.

---

## 🔄 How to Force Updates & Clear Cache

Since the app runs on a strict Service Worker cache, when you push code updates to GitHub:

1. Update the cache version in your `sw.js` file (e.g., change `const CACHE_NAME = 'raw-tracker-v18'` to `v19`).
2. Open the app on your phone, navigate to the **Routines** (Plantillas) tab.
3. Tap the red **"Restablecer Datos de Fábrica"** button to instantly clear the local storage and load the newest templates from the updated code[span_2](start_span)[span_2](end_span).

---

*Engineered for maximum intensity. Code clean, lift heavy.* 🦾
