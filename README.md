# Meeting Room Booking System

A full-featured meeting room booking platform built using the MERN stack, TypeScript, and Antd Design. This system allows users to book meeting rooms, manage bookings, and handle payments seamlessly. Admins can manage rooms, users, and booking slots with ease. The platform offers a modern and responsive user interface using Antd Design, Tailwind CSS, and powerful tools like React and Redux.

## Key Features

1. **User Authentication with JWT**:

   - Secure login and registration using JWT (JSON Web Token) for authentication.
   - Authentication flow ensures protected routes and user sessions.

2. **User Dashboard**:

   - Users can manage their bookings, view upcoming bookings, and modify or cancel reservations.

3. **Admin Dashboard**:

   - Admins can manage users, rooms, and time slots.
   - CRUD operations for creating, updating, or deleting meeting rooms and time slots.
   - Overview of bookings, user management, and real-time room availability.

4. **Room Booking with Time Slots**:

   - Users can book a room based on available time slots. Each slot is one hour long.
   - Multiple slot bookings are supported, allowing users to book rooms for consecutive hours.

5. **Payment Integration with Stripe**:

   - Users can confirm their bookings through secure Stripe payments.
   - Payment confirmation process ensures that rooms are booked only after successful payment.

6. **Confetti Animation for Successful Booking**:

   - After a successful booking and payment, users receive a confirmation modal with confetti animation for a delightful user experience.

7. **Search, Filter, and Sort Rooms**:

   - Users can search for rooms based on name or amenities and apply filters for available time slots, capacity, and more.

8. **Responsive UI with Antd Design and Tailwind CSS**:

   - The frontend uses Antd Design for a professional, sleek, and modern user interface.
   - Tailwind CSS is used for responsive design, ensuring that the platform is optimized for all devices.

9. **Booking Confirmation and Success Modal**:

   - Once payment is confirmed, a success modal with a congratulatory message and animation is displayed to users.

10. **Redux and RTK Query for State Management**:

    - Efficient state management and data fetching using Redux Toolkit and RTK Query to handle global state and asynchronous API calls.

11. **TypeScript for Type Safety**:

    - TypeScript enhances the codebase with type safety, ensuring better code quality, fewer errors, and a smooth development process.

12. **Backend with Express and Mongoose**:
    - The backend is powered by Express.js with Mongoose for managing MongoDB collections.
    - API endpoints for room management, user authentication, and payment integration.

## Tech Stack

- **Frontend**: React, Redux Toolkit, RTK Query, Antd Design, Tailwind CSS, TypeScript
- **Backend**: Express.js, Mongoose, JWT Authentication, Stripe API
- **Database**: MongoDB
- **Payment**: Stripe Integration
- **State Management**: Redux Toolkit with RTK Query

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/sumonpaul55/meeting-room-booking-client.git
   ```
   npm run dev
