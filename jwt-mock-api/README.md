# JWT Mock API

This project is a simple REST API that mocks user validation using JSON Web Tokens (JWT). It provides endpoints for user authentication and management, simulating a user database with mock data.

## Project Structure

```
jwt-mock-api
├── api
│   ├── auth.js          # Handles authentication routes
│   ├── users.js         # Manages user-related routes
│   └── middleware
│       └── verifyToken.js # Middleware to verify JWT tokens
├── src
│   ├── config.js        # Configuration settings for JWT and environment variables
│   ├── mockData.js      # Contains mock user data
│   └── utils
│       └── tokenGenerator.js # Utility to generate JWT tokens
├── .env.example          # Example of environment variables
├── .gitignore            # Files and directories to ignore by Git
├── package.json          # npm configuration file
├── vercel.json           # Configuration for Vercel deployment
└── README.md             # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd jwt-mock-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and set your environment variables.

## Usage

To start the server, run:
```
npm start
```

The API will be available at `http://localhost:3000`.

## Endpoints

### Authentication
- **POST /auth/login**: Authenticates a user with username and password, returns a JWT token.
  - Body: `{ "username": "user", "password": "pass" }`
  - Response: `{ "token": "jwt_token", "user": { "username": "user", "roles": [...] } }`

- **POST /auth/token**: Generates a JWT token for a given username (optional endpoint for testing).
  - Body: `{ "username": "user" }`
  - Response: `{ "token": "jwt_token" }`

### Users
- **GET /api/users**: Retrieves all mock users (protected route, requires JWT token).
  - Header: `Authorization: Bearer <jwt_token>`
  - Response: Array of users with username and roles

## License

This project is licensed under the MIT License.