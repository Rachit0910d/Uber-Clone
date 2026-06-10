# Backend API Documentation

## User Endpoints

### Register User
**Endpoint:** `POST /users/register`

**Description:** 
Registers a new user in the system. It validates the request body, hashes the user's password, creates a new user record in the database, and returns the newly created user object along with a JWT authentication token.

**Request Body (JSON):**
```json
{
  "fullname": {
    "firstname": "rachit",
    "lastname": "saini"
  },
  "email": "[EMAIL_ADDRESS]",
  "password": "[PASSWORD]"
}
```

**Data Restrictions & Validation:**
- `fullname.firstname` (String): **Required**. Must be at least 3 characters long.
- `fullname.lastname` (String): Optional. If provided, must be at least 3 characters long.
- `email` (String): **Required**. Must be a valid email address format.
- `password` (String): **Required**. Must be at least 6 characters long.

**Responses:**

- **201 Created**
  Returned when the user is successfully registered.
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...",
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "_id": "60a1b2c3d4e5f6001ab2c3d4",
      "email": "john.doe@example.com",
      "__v": 0
    }
  }
  ```

- **400 Bad Request**
  Returned when there are missing fields or validation errors in the request body.
  ```json
  {
    "errors": [
      {
        "type": "field",
        "msg": "Email is required",
        "path": "email",
        "location": "body"
      }
    ]
  }
  ```

### Login User
**Endpoint:** `POST /users/login`

**Description:** 
Authenticates an existing user in the system. It validates the request body, checks if the user exists, compares the provided password with the hashed password in the database, and returns the user object along with a newly generated JWT authentication token upon successful login.

**Request Body (JSON):**
```json
{
  "email": "[EMAIL_ADDRESS]",
  "password": "[PASSWORD]"
}
```

**Data Restrictions & Validation:**
- `email` (String): **Required**. Must be a valid email address format.
- `password` (String): **Required**. Must be at least 6 characters long.

**Responses:**

- **200 OK**
  Returned when the user is successfully authenticated.
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...",
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "_id": "60a1b2c3d4e5f6001ab2c3d4",
      "email": "john.doe@example.com",
      "__v": 0
    }
  }
  ```

- **400 Bad Request**
  Returned when there are missing fields or validation errors in the request body.
  ```json
  {
    "errors": [
      {
        "type": "field",
        "msg": "Invalid email",
        "path": "email",
        "location": "body"
      }
    ]
  }
  ```

- **401 Unauthorized**
  Returned when the email is not found or the password incorrect.
  ```json
  {
    "message": "Invalid email or password" 
    // or "Invalid password"
  }
  ```

---

### Get User Profile
**Endpoint:** `GET /users/profile`

**Description:** 
Retrieves the profile information of the currently authenticated user. This endpoint requires a valid JWT token, which can be provided either in the `Authorization` header as a Bearer token or via the `token` cookie.

**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>` (Optional if token is provided via cookie)

**Responses:**

- **200 OK**
  Returned when the token is successfully verified.
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "_id": "60a1b2c3d4e5f6001ab2c3d4",
    "email": "john.doe@example.com",
    "__v": 0
  }
  ```

- **401 Unauthorized**
  Returned if the token is missing, expired, or invalid.
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### Logout User
**Endpoint:** `GET /users/logout`

**Description:** 
Logs out the currently authenticated user. This endpoint clears the `token` cookie and adds the current authentication token to the blacklist database to prevent future use. This endpoint requires a valid JWT token, provided either in the `Authorization` header as a Bearer token or via the `token` cookie.

**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>` (Optional if token is provided via cookie)

**Responses:**

- **200 OK**
  Returned when the user is successfully logged out and the token is blacklisted.
  ```json
  {
    "message": "Logged out"
  }
  ```

- **401 Unauthorized**
  Returned if the token is missing, expired, invalid, or already blacklisted.
  ```json
  {
    "message": "Unauthorized"
    // or "unauthorized access!"
  }
  ```

---

## Captain Endpoints

### Register Captain
**Endpoint:** `POST /captains/register`

**Description:** 
Registers a new captain (driver) in the system. It validates the provided details, hashes the captain's password, creates a new captain record, and returns the newly created captain object along with a JWT authentication token.

**Request Body (JSON):**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "black",
    "plate": "KA-01-HD-1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Data Restrictions & Validation:**
- `fullname.firstname` (String): **Required**. Must be at least 3 characters long.
- `fullname.lastname` (String): Optional. Must be at least 3 characters long if provided.
- `email` (String): **Required**. Must be a valid email address format.
- `password` (String): **Required**. Must be at least 6 characters long.
- `vehicle.color` (String): **Required**. Must be at least 3 characters long.
- `vehicle.plate` (String): **Required**. Must be at least 3 characters long.
- `vehicle.capacity` (Number): **Required**. Must be an integer of at least 1.
- `vehicle.vehicleType` (String): **Required**. Must be exactly one of: `'car'`, `'motorcycle'`, or `'auto'`.

**Responses:**

- **201 Created**
  Returned when the captain is successfully registered.
  ```json
  {
    "captain": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "_id": "60a1b2c3d4e5f6001ab2c3d5",
      "email": "john.captain@example.com",
      "status": "inactive",
      "vehicle": {
        "color": "black",
        "plate": "KA-01-HD-1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
  }
  ```

- **400 Bad Request**
  Returned when there are missing fields, validation errors, or if the email is already in use.
  ```json
  {
    "errors": [
      {
        "type": "field",
        "msg": "Invalid vehicle type",
        "path": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  // OR when email is taken:
  // { "message": "Captain with this id already exists" }
  ```

---

### Login Captain
**Endpoint:** `POST /captains/login`

**Description:** 
Authenticates an existing captain in the system. It validates the request body, checks if the captain exists, compares the provided password with the hashed password in the database, and returns the captain object along with a newly generated JWT authentication token upon successful login.

**Request Body (JSON):**
```json
{
  "email": "john.captain@example.com",
  "password": "securepassword"
}
```

**Data Restrictions & Validation:**
- `email` (String): **Required**. Must be a valid email address format.
- `password` (String): **Required**. Must be at least 6 characters long.

**Responses:**

- **200 OK**
  Returned when the captain is successfully authenticated.
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI...",
    "captain": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "_id": "60a1b2c3d4e5f6001ab2c3d5",
      "email": "john.captain@example.com",
      "status": "inactive",
      "vehicle": {
        "color": "black",
        "plate": "KA-01-HD-1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "__v": 0
    }
  }
  ```

- **400 Bad Request**
  Returned when there are missing fields or validation errors in the request body.
  ```json
  {
    "errors": [
      {
        "type": "field",
        "msg": "Invalid Email",
        "path": "email",
        "location": "body"
      }
    ]
  }
  ```

- **401 Unauthorized**
  Returned when the user is not found or the password incorrect.
  ```json
  {
    "message": "User not found" 
    // or "Invalid password"
  }
  ```

---

### Get Captain Profile
**Endpoint:** `GET /captains/profile`

**Description:** 
Retrieves the profile information of the currently authenticated captain. This endpoint requires a valid JWT token, which can be provided either in the `Authorization` header as a Bearer token or via the `token` cookie.

**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>` (Optional if token is provided via cookie)

**Responses:**

- **200 OK**
  Returned when the token is successfully verified.
  ```json
  {
    "captain": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "_id": "60a1b2c3d4e5f6001ab2c3d5",
      "email": "john.captain@example.com",
      "status": "inactive",
      "vehicle": {
        "color": "black",
        "plate": "KA-01-HD-1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "__v": 0
    }
  }
  ```

- **401 Unauthorized**
  Returned if the token is missing, expired, or invalid.
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### Logout Captain
**Endpoint:** `GET /captains/logout`

**Description:** 
Logs out the currently authenticated captain. This endpoint clears the `token` cookie and adds the current authentication token to the blacklist database to prevent future use. This endpoint requires a valid JWT token, provided either in the `Authorization` header as a Bearer token or via the `token` cookie.

**Headers:**
- `Authorization`: `Bearer <JWT_TOKEN>` (Optional if token is provided via cookie)

**Responses:**

- **200 OK**
  Returned when the captain is successfully logged out and the token is blacklisted.
  ```json
  {
    "message": "Logout successfully"
  }
  ```

- **401 Unauthorized**
  Returned if the token is missing, expired, invalid, or already blacklisted.
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Maps Endpoints

All map endpoints require an authenticated user. Provide the JWT either as a `Bearer <token>` in the `Authorization` header or as the `token` cookie.

### Get Coordinates
**Endpoint:** `GET /maps/get-coordinates`

**Description:** Returns coordinates for a provided address string.

**Query Parameters:**
- `address` (string) — required, min length 3

**Auth:** required

**Responses:**
- **200 OK** — `{ latitude: <number>, longitude: <number>, formattedAddress: <string> }`
- **400 Bad Request** — validation errors
- **401 Unauthorized** — missing/invalid token

### Get Distance & Time
**Endpoint:** `GET /maps/get-distance-time`

**Description:** Returns distance and duration between origin and destination.

**Query Parameters:**
- `origin` (string) — required, min length 3
- `destination` (string) — required, min length 3

**Auth:** required

**Responses:**
- **200 OK** — `{ distance: <number>, time: <number> }` (units depend on map service)
- **400 Bad Request** — validation errors
- **401 Unauthorized** — missing/invalid token

### Autocomplete Suggestions
**Endpoint:** `GET /maps/get-suggestions`

**Description:** Returns place autocomplete suggestions for a partial input.

**Query Parameters:**
- `input` (string) — required, min length 3

**Auth:** required

**Responses:**
- **200 OK** — `{ suggestions: [ ... ] }`
- **400 Bad Request** — validation errors
- **401 Unauthorized** — missing/invalid token

---

## Ride Endpoints

All ride endpoints require an authenticated user. Provide the JWT either as a `Bearer <token>` in the `Authorization` header or as the `token` cookie.

### Create Ride
**Endpoint:** `POST /rides/create`

**Description:** Creates a new ride for the authenticated user. Validates pickup, destination and vehicle type, computes fare, and returns the created ride.

**Request Body (JSON):**
```json
{
  "pickup": "123 Main Street",
  "destination": "456 Park Avenue",
  "vehicleType": "car"
}
```

**Validation:**
- `pickup` (string) — required, min length 3
- `destination` (string) — required, min length 3
- `vehicleType` (string) — required, one of `auto`, `car`, `motorcycle`

**Auth:** required (`authUser` middleware)

**Responses:**
- **201 Created** — returns the created ride object (including `user`, `pickup`, `destination`, `fare`, etc.)
- **400 Bad Request** — validation errors
- **401 Unauthorized** — missing/invalid token
- **500 Internal Server Error** — on server failures

---

## Authentication Notes
- The backend supports sending the auth token either as a cookie named `token` (some login endpoints set this cookie) or in the request `Authorization` header using the `Bearer <token>` format.
- The token is a JWT signed with the `JWT_SECRET` environment variable. Ensure `JWT_SECRET` is set in your Backend `.env` before starting the server.

## Quick Postman Tips
- For protected endpoints, add header `Authorization: Bearer <token>`.
- Alternatively, set a cookie named `token` with the JWT.

