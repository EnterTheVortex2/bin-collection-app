# 🗑️ Bin Collection App

A Progressive Web App (PWA) for tracking bin collection dates at **19 Rotherley Gardens, Winchester, SO22 6TN**.

## Features

- 📅 Dashboard showing upcoming collections per bin type
- ✅ Mark bins as collected — auto-advances to next date
- 🔔 Push notification reminders (evening before collection)
- 📴 Offline support via Service Worker
- 📱 Installable on iOS via Safari "Add to Home Screen"
- 📆 Full schedule view grouped by month
- ⚙️ Settings with notification toggle

## Bin Types

| Bin | Colour | Frequency |
|-----|--------|-----------|
| 🗑️ Food Waste | Purple | Weekly |
| 🌿 Garden Waste | Brown | Fortnightly |
| 🗑️ General Waste | Dark Grey | Fortnightly |
| 🍾 Glass Collection | Blue/Grey | ~Monthly |
| ♻️ Recycling | Green | Fortnightly |

## How to Install on iOS

1. Open the app in **Safari** on your iPhone
2. Tap the **Share** button (□↑) at the bottom of Safari
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"** in the top-right corner
5. The app will appear on your Home Screen like a native app

## How to Enable Notifications

> **Note:** iOS requires the app to be installed (Add to Home Screen) before notifications work.

1. Install the app on your Home Screen (see above)
2. Open the app from the Home Screen
3. Tap the **Settings** tab (⚙️)
4. Tap **"Enable Notifications"**
5. Allow notifications when prompted

Reminders are sent at **7pm the evening before** each collection day.

## Tech Stack

- **React 19** + **TypeScript** — UI framework
- **Vite** — Build tool
- **vite-plugin-pwa** — PWA generation (manifest + service worker)
- **date-fns** — Date manipulation
- **Web Notifications API** — Push reminders
- **localStorage** — Persisting collected state

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Schedule Coverage

The app covers the Winchester City Council collection schedule from **March 2026 to February 2027**.

---

*Winchester City Council collection data for SO22 6TN*

PWA bin collection reminder app for 19 Rotherley Gardens Winchester
