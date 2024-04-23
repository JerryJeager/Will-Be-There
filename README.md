# Will Be There
An online RSVP service that allows registered users to create events, share the link with their friends, and have their friends indicate whether they are attending or not.

## Getting Started
  Ensure you have nodejs and git installed on your computer
- Clone the repository
   ```
   git clone https://github.com/JerryJeager/Will-Be-There.git
   ```
- Add Environment Variables
  - Create a .env file in the root directory of the project and include the following environment variables
  ```
    MONGO_URL = 
    GOOGLE_ID = 
    GOOGLE_SECRET = 
    NEXTAUTH_URL = http://localhost:3000
    NEXTAUTH_SECRET =
    NODE_ENV = development
  ```
- Install Dependencies
  ```
    npm install 
  ```
- Run the code
  ```
  npm run dev
  ```
  view the project on your browser from the port that was displayed on the terminal example: [http://localhost:3000](http://localhost:3000)
