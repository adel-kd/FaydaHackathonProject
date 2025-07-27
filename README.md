# Project Title: SmartDriveGov – Driving School Management and Licensing System

## Contributors:
- Adel Kedir  
- [Team Member 2 Full Name]  
- [Team Member 3 Full Name]  

---

## Project Synopsis

### Problem Statement

#### Estimate 
Despite having only ~1.4 million vehicles, Ethiopia faces ~14,000 traffic deaths and ~45,000 injuries yearly (2024–2025). Fatal crashes nearly doubled from 2,161 in 2008 to 4,597 in 2018. Although there's been a slight drop to ~3,149 crashes in 2022, the risk remains high, especially for pedestrians (71% of deaths).
#### recorded
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
- **Hosting:** Yegara Hosting (cPanel with custom domain routing)  
- **Subdomain Management:** Dynamic DNS or NGINX with automation  
- **Tools & Platforms:** GitHub, Postman, Visual Studio Code, Figma (for UI design)
