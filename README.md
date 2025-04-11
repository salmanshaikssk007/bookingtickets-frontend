# 🎟️ BookingTickets Frontend

A modern frontend for an Event Ticket Booking Platform, built using **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This UI enables users to browse events, book tickets, and manage their bookings securely and efficiently.

---

## 🚀 Features

- 🔐 User Authentication (Signup/Login)
- 📅 Browse & search for available events
- 🧾 Book tickets with secure flow
- 💡 Responsive UI for all devices
- ⚙️ API integration with Spring Boot backend
- 🌐 Deployed on AWS

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Material UI (as needed)
- **State Management**: Redux Toolkit (planned)
- **Auth**: JWT-based Auth via backend API
- **Deployment**: AWS EC2 (planned)

---

## 📁 Project Structure
bookingtickets-frontend/
├── public/               # Static assets
├── src/
│   ├── app/              # App router structure
│   ├── components/       # Reusable components
│   ├── pages/            # Page routes (if applicable)
│   ├── styles/           # Global styles
│   └── utils/            # Helper functions
├── .gitignore
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md

---

## 🧪 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
git clone https://github.com/salmanshaikssk007/bookingtickets-frontend.git
cd bookingtickets-frontend
npm install

##  run in development
npm run dev
```
## 📬 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/auth/signup` | User Registration       |
| POST   | `/api/auth/login`  | Login & Token Generation |
| GET    | `/api/events`      | List all events          |
| POST   | `/api/events`      | Create new event         |
| POST   | `/api/bookings`    | Book tickets             |
| ...    | ...                | More routes in development |

## Planned Features

- Stripe/payPal Payment Integration
- Admin Panel for Event Manaement
- Booking History Page
- Email Notifications (AWS SES)

## 📬 Contact
- Built with 💻 by Salman Shaik
📧 Email: salmanshaikssk007@gmail.com

## 🪪 License
- This project is licensed under the MIT License.
