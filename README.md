# React Portfolio with Firebase Contact Form

This is a React portfolio project that includes a contact form integrated with Firebase Firestore. The form allows users to send messages which are stored in the Firestore database. Optionally, you can also integrate EmailJS to send an email notification when a message is submitted.

## Features

- React for the front-end
- Firebase Firestore for storing contact messages
- EmailJS for sending email notifications (optional)
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js and npm installed
- Firebase project set up
- EmailJS account set up (if using EmailJS)

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

5. Configure EmailJS (Optional)
If you want to send email notifications when a message is submitted, follow these steps:

Sign up for an account at EmailJS.
Create an email service and an email template.
Get your service ID, template ID, and user ID.
Install the EmailJS SDK:

bash
Copy code
npm install emailjs-com
Update the handleSubmit function in Contact.js:

javascript
Copy code
import emailjs from 'emailjs-com'; // Import EmailJS

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await addDoc(collection(db, 'contacts'), formData);
    
    // Send email using EmailJS
    const emailServiceId = 'YOUR_SERVICE_ID';
    const emailTemplateId = 'YOUR_TEMPLATE_ID';
    const emailUserId = 'YOUR_USER_ID';
    
    await emailjs.send(emailServiceId, emailTemplateId, formData, emailUserId);

    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  } catch (err) {
    setError(err.message);
  } finally {
    setIsSubmitting(false);
  }
};
6. Run the Project
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

### Explanation:

- **Getting Started**: Provides instructions on how to set up the project, including cloning the repository, installing dependencies, and configuring Firebase and EmailJS.
- **Firebase Configuration**: Explains how to create a `firebase.js` file with your Firebase configuration.
- **Firestore Rules**: Provides example Firestore rules to allow read and write access to the `contacts` collection.
- **EmailJS Configuration**: Explains how to set up EmailJS to send email notifications.
- **Running the Project**: Provides the command to start the project.
- **Project Structure**: Gives an overview of the project directory structure.
- **License**: States the project's license.

By following these steps and using the provided `README.md` template, you should be able to set up and run your React portfolio project with Firebase integration for the contact form and optional EmailJS integration for sending email notifications.