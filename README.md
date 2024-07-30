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
git clone https://github.com/mohashafici/MY-portofolia
cd MY-portofolia
2. Install dependencies

npm install
3. Set up Firebase
Create a Firebase project in the Firebase Console.

Add a new web app to your Firebase project and copy the Firebase configuration.

Create a firebase.js file in the src directory and add the following code:


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


service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document=**} {
      allow read, write: if true;
    }
  }
}
Note: These rules allow read and write access to the contacts collection. For production, you should implement proper authentication and rules to secure your data.

5. Run the Project

npm start
Open http://localhost:3000 to view it in the browser.

Project Structure

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
Demo
Check out the live demo of the project: https://my-portofolia.netlify.app/

License
This project is licensed under the MIT License.



This `README.md` provides instructions on how to set up and run your React portfolio project