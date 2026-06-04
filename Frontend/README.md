# Uber Clone - Frontend Documentation

## Overview
This is a React-based frontend application for an Uber clone. It provides user and captain (driver) authentication, login, signup, and home pages with protected routes.

---

## Dependencies

### Core Dependencies
- **React** (^19.2.4) - UI library for building user interfaces
- **React DOM** (^19.2.4) - React package for working with the DOM
- **React Router DOM** (^7.14.1) - Client-side routing for navigation between pages
- **Axios** (^1.15.2) - HTTP client for making API requests to the backend
- **Tailwind CSS** (^4.2.2) - Utility-first CSS framework for styling
- **Tailwind CSS Vite** (@tailwindcss/vite ^4.2.2) - Vite plugin for Tailwind CSS
- **Autoprefixer** (^10.5.0) - PostCSS plugin to parse CSS and add vendor prefixes
- **Lucide React** (^1.11.0) - Icon library for React components

### Development Dependencies
- **Vite** (^8.0.4) - Fast frontend build tool and development server
- **Vite React Plugin** (@vitejs/plugin-react ^6.0.1) - Official React plugin for Vite
- **ESLint** (^9.39.4) - Code linting tool for maintaining code quality
- **ESLint React Hooks** (eslint-plugin-react-hooks ^7.0.1) - ESLint plugin for React hooks rules
- **ESLint React Refresh** (eslint-plugin-react-refresh ^0.5.2) - ESLint plugin for React Fast Refresh
- **@types/react** (^19.2.14) - TypeScript types for React
- **@types/react-dom** (^19.2.3) - TypeScript types for React DOM

---

## Project Structure

```
src/
├── pages/                    # Page components
│   ├── Start.jsx            # Landing page
│   ├── Home.jsx             # User home page (protected)
│   ├── CaptainHome.jsx      # Captain home page (protected)
│   ├── UserLogin.jsx        # User login page
│   ├── UserSingup.jsx       # User signup page
│   ├── CaptainLogin.jsx     # Captain login page
│   ├── CaptainSignup.jsx    # Captain signup page
│   ├── UserLogout.jsx       # User logout handler
│   ├── CaptainLogout.jsx    # Captain logout handler
│   ├── UserProtectWrapper.jsx      # User route protection component
│   └── CaptainProtectWrapper.jsx   # Captain route protection component
├── context/                 # Context providers for state management
│   ├── UserContext.jsx      # User data context
│   └── CaptainContext.jsx   # Captain data context
├── assets/                  # Static assets
│   └── vecteezy_uber-logo-png-uber-icon-transparent-png_27127594.png
├── App.jsx                  # Main app component with routes
├── main.jsx                 # Entry point
├── index.css                # Global styles
└── vite.config.js          # Vite configuration
```

---

## Pages & Components

### 1. **Start Page** (`/`)
- **Component**: `Start.jsx`
- **Description**: Landing page with Uber logo and "Get Started" button
- **Features**:
  - Displays Uber background image
  - Logo display
  - "Continue" button that redirects to login page
- **Route**: `/`

### 2. **User Login Page** (`/login`)
- **Component**: `UserLogin.jsx`
- **Description**: Page for users to log in to their account
- **Features**:
  - Email input field
  - Password input field
  - Submit button
  - Link to signup page
  - Link to captain login page
- **Route**: `/login`
- **API Call**: `POST /users/login`
- **Stores**: JWT token in localStorage

### 3. **User Signup Page** (`/signup`)
- **Component**: `UserSingup.jsx`
- **Description**: Page for users to create a new account
- **Features**:
  - First name input
  - Last name input
  - Email input
  - Password input
  - Submit button
  - Link to login page
  - Link to captain signup page
- **Route**: `/signup`
- **API Call**: `POST /users/register`
- **Stores**: JWT token in localStorage

### 4. **User Home Page** (`/home`)
- **Component**: `Home.jsx`
- **Description**: User dashboard (placeholder page)
- **Protection**: Requires valid JWT token and user authentication
- **Route**: `/home`
- **Protection Wrapper**: `UserProtectWrapper`

### 5. **User Logout Page** (`/user/logout`)
- **Component**: `UserLogout.jsx`
- **Description**: Handles user logout logic
- **Features**:
  - Calls logout API
  - Removes JWT token from localStorage
  - Redirects to login page
- **Route**: `/user/logout`
- **API Call**: `GET /users/logout` (with Authorization header)
- **Protection**: Requires valid JWT token

### 6. **Captain Login Page** (`/captain-login`)
- **Component**: `CaptainLogin.jsx`
- **Description**: Page for captains (drivers) to log in
- **Features**:
  - Email input field
  - Password input field
  - Submit button
  - Link to captain signup page
  - Link to user login page
- **Route**: `/captain-login`
- **API Call**: `POST /captains/login`
- **Stores**: JWT token in localStorage

### 7. **Captain Signup Page** (`/captain-signup`)
- **Component**: `CaptainSignup.jsx`
- **Description**: Page for captains to create a new account
- **Features**:
  - First name input
  - Last name input
  - Email input
  - Password input
  - Vehicle color input
  - Vehicle plate/license input
  - Vehicle capacity (number)
  - Vehicle type dropdown (Moto, Rickshaw, Car)
  - Submit button
  - Link to captain login page
  - Link to user signup page
- **Route**: `/captain-signup`
- **API Call**: `POST /captains/register`
- **Stores**: JWT token in localStorage

### 8. **Captain Home Page** (`/captain-home`)
- **Component**: `CaptainHome.jsx`
- **Description**: Captain dashboard (placeholder page)
- **Protection**: Requires valid JWT token and captain authentication
- **Route**: `/captain-home`
- **Protection Wrapper**: `CaptainProtectWrapper`

### 9. **Captain Logout Page** (`/captain/logout`)
- **Component**: `CaptainLogout.jsx`
- **Description**: Handles captain logout logic
- **Features**:
  - Calls logout API
  - Removes JWT token from localStorage
  - Redirects to captain login page
- **Route**: `/captain/logout`
- **API Call**: `GET /captains/logout` (with Authorization header)
- **Protection**: Requires valid JWT token

---

## Context Providers

### 1. **UserContext** (`UserContext.jsx`)
- **Provider**: `UserContext`
- **Export**: `UserDataContext`
- **State**:
  ```javascript
  {
    user: {
      email: string,
      fullname: {
        firstname: string,
        lastname: string
      }
    },
    setUser: function
  }
  ```
- **Purpose**: Manages user authentication state and user data across the application

### 2. **CaptainContext** (`CaptainContext.jsx`)
- **Provider**: `CaptainContext`
- **Export**: `CaptainDataContext`
- **State**:
  ```javascript
  {
    captain: object | null,
    setCaptain: function,
    isLoading: boolean,
    setIsLoading: function,
    error: string | null,
    setError: function,
    updateCaptain: function
  }
  ```
- **Purpose**: Manages captain authentication state, loading state, and error handling

---

## Route Protection

### UserProtectWrapper (`UserProtectWrapper.jsx`)
- **Purpose**: Protects user-only routes from unauthorized access
- **Features**:
  - Checks for JWT token in localStorage
  - Redirects to login if token is missing
  - Fetches user profile from backend
  - Sets loading state during validation
  - Redirects to login if profile fetch fails or token is invalid
- **Protected Routes**: `/home`, `/user/logout`
- **API Call**: `GET /users/profile` (with Authorization header)

### CaptainProtectWrapper (`CaptainProtectWrapper.jsx`)
- **Purpose**: Protects captain-only routes from unauthorized access
- **Features**:
  - Checks for JWT token in localStorage
  - Redirects to captain login if token is missing
  - Fetches captain profile from backend
  - Sets loading state during validation
  - Redirects to captain login if profile fetch fails or token is invalid
- **Protected Routes**: `/captain-home`, `/captain/logout`
- **API Call**: `GET /captains/profile` (with Authorization header)

---

## API Routes & Methods

### User APIs

| Method | Endpoint | Description | Authentication | Request Body |
|--------|----------|-------------|-----------------|--------------|
| POST | `/users/register` | Register a new user | No | `{ fullname: { firstname, lastname }, email, password }` |
| POST | `/users/login` | User login | No | `{ email, password }` |
| GET | `/users/profile` | Get user profile | Yes (Bearer Token) | None |
| GET | `/users/logout` | User logout | Yes (Bearer Token) | None |

### Captain APIs

| Method | Endpoint | Description | Authentication | Request Body |
|--------|----------|-------------|-----------------|--------------|
| POST | `/captains/register` | Register a new captain | No | `{ fullname: { firstname, lastname }, email, password, vehicle: { color, plate, capacity, vehicleType } }` |
| POST | `/captains/login` | Captain login | No | `{ email, password }` |
| GET | `/captains/profile` | Get captain profile | Yes (Bearer Token) | None |
| GET | `/captains/logout` | Captain logout | Yes (Bearer Token) | None |

---

## Authentication Flow

### User Registration Flow
1. User navigates to `/signup` page
2. User fills in name, email, and password
3. Frontend sends `POST /users/register` request with user data
4. Backend returns user data and JWT token
5. Token is stored in localStorage
6. User is redirected to `/home` page

### User Login Flow
1. User navigates to `/login` page
2. User enters email and password
3. Frontend sends `POST /users/login` request
4. Backend returns user data and JWT token
5. Token is stored in localStorage
6. User is redirected to `/home` page

### Protected Route Flow
1. User attempts to access protected route (e.g., `/home`)
2. UserProtectWrapper checks for token in localStorage
3. If no token, redirects to `/login`
4. If token exists, calls `GET /users/profile` with Authorization header
5. If profile fetch succeeds, user data is set in context and page loads
6. If profile fetch fails, token is removed and user is redirected to `/login`

### Logout Flow
1. User navigates to `/user/logout`
2. UserLogout component calls `GET /users/logout` with Authorization header
3. Backend invalidates the session/token
4. Token is removed from localStorage
5. User is redirected to `/login` page

---

## Environment Variables

Create a `.env` file in the frontend root directory:

```env
VITE_BASE_URL=http://localhost:3000/api
VITE_API_URL=http://localhost:3000/api
```

Replace with your backend API URL as needed.

---

## Running the Application

### Development
```bash
npm install
npm run dev
```
The application will start on `http://localhost:5173` (default Vite port)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## Styling

The application uses **Tailwind CSS** for styling with the following approach:
- Utility-first CSS classes
- Responsive design support
- Custom color scheme (primary colors: black, yellow, blue, red, green, cyan)
- Mobile-first responsive breakpoints

---

## Authentication Token

- **Type**: JWT (JSON Web Token)
- **Storage**: localStorage with key `token`
- **Usage**: Passed in `Authorization: Bearer {token}` header for protected API calls
- **Lifespan**: Managed by backend (typically expires after a set duration)

---

## Error Handling

- **Login/Signup Errors**: Displayed via browser `alert()` or console errors
- **Protected Route Errors**: User is redirected to login/captain-login page
- **Network Errors**: Caught and logged to console; user receives browser alert
- **Validation Errors**: Server returns errors which are displayed to the user

---

## Component Hierarchy

```
App
├── Start (/)
├── UserLogin (/login)
├── UserSignup (/signup)
├── CaptainLogin (/captain-login)
├── CaptainSignup (/captain-signup)
├── UserProtectWrapper
│   ├── Home (/home)
│   └── UserLogout (/user/logout)
└── CaptainProtectWrapper
    ├── CaptainHome (/captain-home)
    └── CaptainLogout (/captain/logout)
```

---

## Best Practices

1. **Token Management**: Always check for token existence before making protected API calls
2. **Loading States**: Use loading indicators during data fetching
3. **Error Handling**: Implement comprehensive error handling for all API calls
4. **Security**: Never expose sensitive data in client-side code; handle tokens securely
5. **CORS**: Ensure backend is configured to accept requests from frontend domain

---

## Future Enhancements

- Implement real-time ride tracking with WebSockets
- Add map integration for location services
- Implement ride booking and management features
- Add driver availability status
- Implement ride history and ratings
- Add payment integration
- Implement notifications system
- Add profile editing functionality
- Implement search and filter for rides

---

## Troubleshooting

### "Cannot POST /users/login"
- Ensure backend server is running on the correct URL
- Check `VITE_BASE_URL` environment variable

### "Token expired" or "Unauthorized"
- Token may have expired; user needs to log in again
- Check token storage in browser localStorage

### Loading stuck on protected routes
- Verify backend is running and accessible
- Check network tab in browser DevTools for API errors
- Ensure Authorization header is correctly formatted

---

## License

This project is part of the Uber Clone application developed for educational purposes.

---

## Support

For issues or questions, refer to the backend documentation or contact the development team.
