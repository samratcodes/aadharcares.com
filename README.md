# 🩺 AadharCares – Smart Health Monitoring & Activity Booking Platform

**AadharCares** is a modern web app that empowers users to track and understand their health in a smarter way. Built with **Next.js** and **Tailwind CSS**, it integrates **LLM-powered AI** and **interactive data visualization** to deliver insights, not just stats.

---

## 🚀 Features

- 🧍‍♂️ **Personalized User Profiles**
  - Profile image, address, and contact info
    
- 📊 **Real-time Health Metrics**
  - Body temperature, blood pressure, heart rate, respiratory rate, oxygen saturation, and blood glucose
    
- 🤖 **AI-Powered Health Insights**
  - Integrated with **Gemini 1.5 Flash (LLM)**
  - Generates contextual health condition summaries from user data
  - Flags abnormalities & provides actionable suggestions
    
- 📈 **Visual Analytics**
  - Uses **Plotly.js** to render clean, responsive health trend charts
  - Gives users a visual overview of their wellness over time
    
- 📅 **Activity Booking Management**
  - Displays booked activities with image, date, and description
  - Cancel functionality to manage participation
    
- 🔐 **Secure Authentication**
  - JWT token-based login with cookie storage


---

## 🧠 How AI Enhances the Platform

We use **Gemini 1.5 Flash**, a powerful LLM, to interpret users’ latest health reports and generate human-readable health summaries like:

> _“Your heart rate is slightly elevated compared to the normal range. Consider managing stress and staying hydrated.”_

This turns raw numbers into **insightful narratives** for proactive health decisions.

---

## 📊 Data Visualization with Plotly

Health stats over time can be hard to interpret — that’s why we use **Plotly**:

- Interactive graphs of key vitals (like BP, glucose, heart rate)
- Intuitive zoom/pan for long-term tracking
- Future-ready for multi-metric comparisons

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS  
- **Icons:** React Icons  
- **Auth:** JWT with js-cookie  
- **Data Viz:** Plotly.js  
- **AI Insight Engine:** Gemini 1.5 Flash (LLM API)  
- **API Communication:** Axios  
- **Deployment:** Vercel  

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/aadharcares.com.git
cd aadharcares.com
