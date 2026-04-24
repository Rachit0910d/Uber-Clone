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
