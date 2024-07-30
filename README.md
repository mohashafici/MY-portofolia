# React Portfolio with Firebase Contact Form

This is a React portfolio project that includes a contact form integrated with Firebase Firestore. The form allows users to send messages which are stored in the Firestore database.

## Features

- React for the front-end
- Firebase Firestore for storing contact messages
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js and npm installed
- Firebase project set up

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install dependencies
bash
Copy code
npm install
3. Set up Firebase
Create a Firebase project in the Firebase Console.

Add a new web app to your Firebase project and copy the Firebase configuration.

Create a firebase.js file in the src directory and add the following code:

javascript
Copy code
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
4. Set up Firestore Rules
Go to the Firestore Database in the Firebase Console and set up the rules:

javascript
Copy code
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow read, write: if true;
    }
  }
}
Note: These rules allow read and write access to the contacts collection. For production, you should implement proper authentication and rules to secure your data.

5. Run the Project
bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

Project Structure
java
Copy code
my-portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ProjectCard.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── ...
│   ├── firebase.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── ...
License
This project is licensed under the MIT License.

vbnet
Copy code

This `README.md` provides clear instructions on how to set up and run your React portfolio p