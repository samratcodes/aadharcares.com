# AadharCares – Because Every Parent Deserves Care, No Matter the Distance 👵👴

**AadharCares** is a heartfelt health companion that empowers families to care from afar.  
Built with **Next.js** and **Tailwind CSS**, it combines **LLM-powered AI** and **interactive data visualizations** to turn raw health data into meaningful insights—helping users not just track numbers, but truly understand their well-being.

---

## 🧩 Problem Statement

With millions of families living apart across borders, ensuring consistent healthcare and emotional connection for elderly parents becomes a challenge. AadharCares bridges that gap by allowing children to monitor health, book caregivers, and engage parents in recreational activities—no matter where they are in the world.

---

## 🏗️ System Architecture


---

## 🚀 Features

- 🌍 **Remote Caregiver Booking**  
  - Designed with love for families living afar — children or relatives abroad can book **doctors, nurses, or caretakers** for their loved ones with just a few clicks  
  - Brings peace of mind and closeness from miles away, ensuring parents and elders feel cared for, even when family can't be physically present  
  - Enables seamless coordination of elderly care from anywhere in the world  

- 📝 **Detailed Health Reports & AI-Generated Insights**  
  - Comprehensive reports generated from real-time health data  
  - Integrated with **Gemini 1.5 Flash (LLM)** to provide contextual insights and suggestions  
  - Automatically detects abnormalities and generates a concise health condition summary  

- 🧘‍♂️ **Recreational Activity Booking**  
  - Thoughtfully curated activities users can browse and pick freely based on their comfort and interests  
  - Displays **booked activities** with image, title, date, description, and price  
  - Includes an option to cancel activities if needed  

- 📊 **Real-time Health Metrics**  
  - Tracks vitals such as body temperature, blood pressure, heart rate, respiratory rate, oxygen saturation, and blood glucose  

- 📈 **Visual Health Analytics**  
  - Uses **Plotly.js** to display interactive health charts  
  - Allows users to monitor wellness trends over time  

- 🧍‍♂️ **Personalized User Profiles**  
  - Beautifully designed profile cards that showcase your loved one's image, full name, address, and key health details  
  - Helps families feel connected, making digital care feel more human and personal  

- 🔐 **Secure Authentication**  
  - JWT token-based login with cookie storage for secure access  
  - Ensures user privacy and session safety  

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
- **Backend:** Express.js, PostgreSQL  
- **Payments:** Stripe Integration  
- **Deployment:** Vercel  
---
## 👨‍👩‍👧‍👦 Team Members & Contributions

| Name             | Role & Contributions                                                                 |
|------------------|----------------------------------------------------------------------------------------|
| **Samrat Sapkota**  | 🔹 Frontend developer (Next.js + Tailwind CSS) <br> 🔹 Admin & user UI, integrated Plotly.js |
| **Pranish Karki**   | 🔹 Frontend developer (Next.js + Tailwind CSS) <br> 🔹 Built Doctor, Nurse, Caretaker portals |
| **Santosh Gaire**   | 🔹 Integrated Gemini LLM API for health report insights <br> 🔹 Developed user profile section |
| **Prithak Adhikari**| 🔹 Backend developer (Express.js) <br> 🔹 PostgreSQL, REST APIs, Stripe integration   |
---
## 🧑‍💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/aadharcares.com.git
cd aadharcares.com
```
### 2. Install dependencies
```bash
npm install
# or
yarn
```
### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

### ❤ Final Note
**AadharCares isn't just a project—it's a mission to help families feel closer and more connected, no matter the distance. Because every heartbeat matters, and every parent deserves care.**


