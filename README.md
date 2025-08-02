# 🏥 Healthcare Appointment Booking Interface

A simple React-based web application that allows users to browse doctors, view availability, and book appointments.

---

## 🔧 Tools and Libraries Used

- **React.js** – Core frontend framework.
- **React Router DOM** – For routing between pages.
- **React Icons** – For profile icon representation.
- **Basic CSS** – Custom styles using pure CSS.
- **Static JSON** – For doctor and availability data (mocked).

---

## ✨ Features

- 👨‍⚕️ Landing page listing multiple doctors with search functionality.
- 🧑‍⚕️ Doctor profile page showing specialization and available slots.
- 📝 Appointment form with validation and feedback.
- 🚫 Prevents booking at unavailable times.
- 🔍 Handles empty search results with friendly UI.
- 📱 Responsive design with flex layout.
---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/healthcare-appointment-interface.git
   cd healthcare-appointment-interface
2.Install dependencies:
    ```bash
     npm install
3. Run the app:
    ```bash
     npm start
🚧 Improvements With More Time:
🗂 Backend integration using Node.js and Express.

🔐 User authentication (login/signup for patients and doctors).

📅 Real-time availability calendar or time slot picker.

📊 Admin dashboard for managing appointments.

📩 Email confirmation for appointments.

😅 Challenges Faced & Solutions:
1. Booking Validation
Challenge: Preventing users from booking appointments outside of available times.
Solution: Normalized datetime format and checked availability before confirming the booking.

2. No Search Results
Challenge: Handling empty state elegantly when search filters return no doctors.
Solution: Added a fallback image and a friendly message to inform users.

3. Icon vs. Image Profiles
Challenge: Not all doctors had real images.
Solution: Switched to using React Icons (FaUserMd) to visually represent doctors without the need for images.

