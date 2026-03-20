# 🤖 AI Learning Digital Twin

A futuristic, sci-fi themed AI-powered learning tracker that acts as your personal digital twin. It tracks your AI/ML learning progress, adapts to your level, and gives personalized guidance using Groq's Llama 3.3 70B model.

---

## ✨ Features

- **🧠 Topic Picker** — Choose your own learning topics on startup, AI builds your personalized roadmap
- **📊 Progress Tracker** — Visual mastery bars for every topic you're learning
- **📝 Log Sessions** — Log your study sessions, earn XP and level up
- **💡 Explain Any Topic** — Get instant AI explanations for any topic right inside the app
- **✦ AI Advisor** — 10 personalized quick prompts based on your progress
- **💬 AI Chat** — Full back-and-forth conversation with an AI that knows your learning profile
- **📅 Activity Log** — Full history of every session you've logged
- **🔥 Streak & XP System** — Gamified learning to keep you consistent

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML, CSS, JavaScript (single file) |
| Backend | Node.js (no frameworks) |
| AI Model | Llama 3.3 70B via Groq API |
| Deployment | Replit / Render / Local |

---

## 🚀 Getting Started (Local)

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher

### Setup

1. Clone or download the project
2. Make sure both files are in the same folder:
   ```
   your-folder/
     ├── server.js
     └── twin_ai.html
   ```

3. Run the server:
   ```bash
   node server.js
   ```

4. Open your browser and go to:
   ```
   http://localhost:4000
   ```

---

## 🔑 API Key

This project uses the [Groq API](https://console.groq.com) (free tier available).

1. Go to [console.groq.com](https://console.groq.com)
2. Create a free account
3. Generate an API key
4. Paste it in server.js at line 6:
   ```js
   const GROQ_API_KEY = 'your-key-here';
   ```

---

## 📱 How to Use

1. **Initialize your Twin** — Pick your goal and select topics you want to learn
2. **Log Sessions** — After studying, log your session with topic, duration and self-assessed mastery
3. **Explain Topics** — Click Explain This Topic to get an instant AI explanation
4. **Ask the AI Advisor** — Use quick prompts or type your own questions
5. **Chat** — Have a full conversation with the AI about anything you're learning

---

## 📁 Project Structure

```
ai-learning-twin/
├── server.js       # Node.js server + Groq API proxy
├── twin_ai.html    # Full frontend (single file app)
└── README.md       # This file
```

---

## 🎓 Built By

**Shrestha** — 2nd Year CS Student
Built as a personal AI learning companion project.

---

## 📄 License

MIT License — free to use, modify and share.
