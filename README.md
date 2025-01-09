# CCS3316 Cloud Infrastructure Design – Group Project

## Overview
This group project provides students with practical experience in designing and implementing a cloud infrastructure using AWS services. The goal is to design a scalable, secure, and cost-effective cloud architecture that meets the business needs and integrates real-time data analytics while ensuring compliance with GDPR and other data security standards.

## Objectives
- Develop a cloud-based infrastructure tailored to a specific business scenario using AWS services.
- Ensure adherence to the five pillars of the AWS Well-Architected Framework.
- Demonstrate teamwork and coordination to achieve project goals.
- Incorporate GDPR and other relevant data security regulations into the design.

## Project Scenario
A mid-sized company has hired your team to design and implement a cloud-based infrastructure to replace their existing on-premises servers. The company's current infrastructure is unable to handle high traffic during seasonal sales and lacks the scalability needed for growth. The management has decided to transition entirely to a cloud-based solution. Your task is to design a cloud infrastructure that is scalable, secure, cost-effective, and integrates real-time data analytics.


## Tech Stack

### Frontend
- **React:** A JavaScript library for building user interfaces.
- **Components:**
  - `home.js`
  - `createpost.js`
  - `editpost.js`
  - `postdetails.js`
  - `navbar.js`

### Backend
- **Express:** A Node.js framework for building APIs.
- **MongoDB & Mongoose:** For database management.
- **Dependencies:**
  - `body-parser`: Middleware to parse request bodies.
  - `concurrently`: To run multiple commands in parallel.
  - `cors`: For enabling cross-origin requests.
  - `express`: Framework for routing and handling HTTP requests.
  - `mongoose`: MongoDB object modeling.
  - `nodemon`: Tool to automatically restart the server during development.
  
  **Dev Dependencies:**
  - `@babel/core`, `@babel/preset-env`, `@babel/preset-react`: Babel setup for transpiling modern JavaScript.
  - `jest`, `babel-jest`, `jest-environment-jsdom`: For testing React components.

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sahanHansaja026/CCS3316-Cloud-Infrastructure-Design
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Running the Application
- **Backend:** The backend is built with Express and listens on port `7500`. Make sure to configure your MongoDB connection string.
  - To start the server, run:
    ```bash
    npm run dev
    ```
    This will use `nodemon` for hot-reloading.

- **Frontend:** Ensure the React frontend is set up in the `client` folder. You can run the React app using:
    ```bash
    cd client
    npm install
    npm start
    ```

### 4. Database Connection
Ensure you replace the `database` connection string in the `server.js` file with your own MongoDB URI.

```javascript
const database =
  "mongodb+srv://<username>:<password>@cluster0.t0p0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
```

### 5. Running the Server

After setting up both the frontend and backend, you can access the server by visiting `http://localhost:7500`.

## Folder Structure

```
server.js
routes/
├── package.js
models/
├── package.js
client/
├── src/
│   ├── components/
│   │   ├── home.js
│   │   ├── createpost.js
│   │   ├── editpost.js
│   │   ├── postdetails.js
│   │   ├── navbar.js
```

- **server.js:** Main server file that configures the Express app and routes.
- **routes/package.js:** Routes for managing all pakage deatails.
- **models/package.js:** Mongoose schema for pakage.

## Individual Contributions

- **22ug2-0201** - Isitha Nawod
  - Designed and implemented the **Frontend** components (e.g., `home.js`, `createpost.js`, `editpost.js`, etc.).
  - Integrated the frontend with the backend to ensure data retrieval and display.

- **22ug2-0063** - Pasindu Kavinda
  - Worked on **Backend** API routes (e.g., managing package details).
  - Set up MongoDB connections and ensured proper handling of data storage and retrieval.

- **22ug2-0035** - Sahan Hansaja
  - Created the **Backend** architecture using Express and connected it to the **Frontend**.
  - Initialized the project repository and set up version control using Git.
  - Configured and added a **CI/CD pipeline** for automated deployment and testing processes.

- **22ug2-xxxx** - [Your Name]
  - Ensured proper scaling and infrastructure optimization for high availability.

- **22ug1-xxxx** - [Your Name]
  - Focused on **testing** and quality assurance, ensuring the backend and frontend integration works seamlessly.
  - Wrote **unit tests** and performed manual testing for major features.



---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- AWS Documentation
- React Documentation
- MongoDB Documentation
- Express Documentation
