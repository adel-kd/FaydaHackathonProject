# SmartDriveGov – Driving School Management and Licensing System

## Project Catagory

 - Smart Governance 


## Contributors:
- Adel Kedir  
- Mohammed Seid  



## Project Synopsis

### Problem Statement

#### Estimate 
Despite having only around 1.4 million registered vehicles, Ethiopia experiences approximately 14,000 traffic-related deaths and 45,000 injuries each year (2024–2025 estimates). The situation remains critical, with pedestrians accounting for over 70% of all road traffic deaths—making them the most vulnerable group on the roads.
#### Official Records
According to the Ethiopian Federal Police Commission, there were 4,161 road traffic fatalities recorded during the 2021/22 fiscal year. While national statistics for injuries and pedestrian death share are not officially published, the World Health Organization’s Global Status Report on Road Safety (2018) previously noted significant risks related to pedestrian safety and head injuries, highlighting the importance of safer road infrastructure and driver training.

#### Key causes

* Poor driving school quality
* Fake or unqualified licenses
* Inexperience and unsafe behavior
* Weak government oversight

### Planned Solution

SmartDriveGov is a government-managed platform to modernize the regulation and monitoring of driving schools in Ethiopia.

#### Identity Protection
* Registers all students and instructors via Fayda
  ID to prevent fraud.

* Blocks false age or duplicate identity use.

#### Verified Training
* Schools upload official videos, checklists, and attendance logs.

* The platform tracks participation and ensures only trained students proceed to testing.

#### Digital Exams
* Centralized, secure exam system run by the government.

* Eliminates local-level corruption in certification.

#### Legacy Data Transition
* Allows pre-registration of existing licensed drivers before launch.

* Standardizes and verifies their information.

#### Integration with Law Enforcement
* Traffic police can access:

* Driver’s digital license info

* Days left before expiry

* School certification history

#### Government Benefits
* Detects poor-performing or illegal driving schools.

* Enables nationwide data analysis for traffic policy reform.

### Expected Outcome

* We aim to build a robust and scalable platform that allows:
- Government officials to oversee and audit schools in real time.
- Schools to operate digitally with auto-generated sub-portals.
- Trainees to track their progress, get notifications, and access their certificates online.

* By the end of the hackathon, we expect to deliver a working MVP with portal registration, user dashboards, and sample workflows for student management and licensing.

### Fayda's Role 
* Fayda will play a key role in digital identity verification throughout the system. When schools register or trainees sign up, Fayda’s OIDC (OpenID Connect) system will be integrated to securely verify the identity of users. OIDC is an identity layer built on top of the OAuth 2.0 protocol that allows applications to authenticate users based on their verified digital ID.

* By using Fayda’s OIDC system:

  - Only authorized individuals can access and manage government-regulated services.

  - The risk of identity fraud and fake registrations is significantly reduced.

  - Submission of false or incorrect personal information will no longer be possible, as all user data will be verified against Fayda's national identity database.

  - Government entities gain a reliable method for confirming trainee and school data.

*  This integration ensures strong, secure, and centralized identity verification for all users of the SmartDriveGov platform.



## Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MYSQL 
- **Authentication:** Fayda Digital ID integration, JSON Web Tokens (JWT)  
- **Hosting:** Netlify
**Deployment**: Docker, Docker Compose
- **Subdomain Management:** Dynamic DNS or NGINX with automation  
- **Tools & Platforms:** GitHub, Postman, Visual Studio Code, Figma (for UI design)




## 🚀 Installation and Deployment

This section guides you through installing dependencies, running the app locally, and deploying with Docker.

---

### 🔧 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) & Docker Compose

---

### 📦 Installing Dependencies

1. **Clone the repository:**

   ```bash
   git clone https://github.com/adel-kd/FaydaHackathonProject.git
   cd fayda-project

2. **Install frontend dependencies:**
   cd client
   npm install
3. **Install backend dependencies:**
   cd ../server
   npm install

### 🧪 Running the App Locally

1. **Start the backend server:**

    cd server
    node server.js
2. **Start the frontend (in a new terminal):**
   cd client 
   npm run dev
3. **Visit in browser:**

Frontend: http://localhost:3000

Backend: http://localhost:5000



### 📦 Deploying with Docker
 1. **Ensure Dockerfile and docker-compose.yml exist at the project root.**
 2.**Build and start the containers:**

    docker compose up --build


3. **Access the app:**
   http://localhost:3000
4. **Stop the containers:**
    docker compose down

### 📁 Environment Variables

Create .env files in both client and server folders:

* 📂 client/.env

VITE_CLIENT_ID=crXYIYg2cJiNTaw5t-peoPzCRo-3JATNfBd5A86U8t0
VITE_REDIRECT_URI=http://localhost:3000/callback
VITE_AUTHORIZATION_ENDPOINT=https://esignet.ida.fayda.et/authorize

* 
📂 server/.env

CLIENT_ID=crXYIYg2cJiNTaw5t-peoPzCRo-3JATNfBd5A86U8t0
CLIENT_SECRET=                         # (Leave blank; PRIVATE_KEY will be used)
REDIRECT_URI=http://localhost:3000/callback
TOKEN_ENDPOINT=https://esignet.ida.fayda.et/v1/esignet/oauth/v2/token
USERINFO_ENDPOINT=https://esignet.ida.fayda.et/v1/esignet/oidc/userinfo
PRIVATE_KEY=<Paste full JSON from Telegram here, exactly as-is>
ALGORITHM=RS256
CLIENT_ASSERTION_TYPE=urn:ietf:params:oauth:client-assertion-type:jwt-bearer
JWT_SECRET=2829mysecretkey
PORT=5000


### 📂 Folder Structure

fayda-project/
├── client/             # React frontend
│   └── .env
|   └── Dockerfile
├── server/             # Node.js backend
│   └── .env
|   └── Dockerfile
├── docker-compose.yml
└── README.md


