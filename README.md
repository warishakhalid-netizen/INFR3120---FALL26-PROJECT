# INFR3120---FALL26-PROJECT
Project Overview
Our project LinkHop is a cybersecurity based web application that is meant to help people recognize and identify any suspicious links that they receive in their inboxes, messages, or other websites. Most of the time, phishing links don’t automatically take users to a fake website. They pass through multiple websites using redirects before reaching their final destination. We break down this process and analyze how many times the link redirects to before actually reaching the intended destination. 

We created this project using HTML, Bootstrap, MongoDB, Node.js, Express.js, EJS, and FontAwesome. It will check the number of redirects, the destination IP address, as well as the website’s SSL/TLS certificates. Using the information collected, the system will give a risk score that helps the user decide if this link is suspicious or malicious. The goal of LinkHop is to give everyday users a simple way to investigate any suspicious links without having to actually open them in a browser.

The application also includes a reporting system that allows users to submit suspicious URLs, categorize them, and view previously submitted reports. Our goal is to make cybersecurity information more accessible to everyday internet users and encourage safer browsing habits.

Technologies Used
-HTML: Structures the website
-CSS: Custom styling and visual design
-Bootstrap: Responsive layout, navigation, and forms
-JavaScript:	Server-side functionality
-Node.js:	Runs the web application
-Express.js:	Handles routing and HTTP requests
-Express Generator:	Creates the initial application structure
-EJS:	Renders dynamic website pages
-MongoDB Atlas:	Stores suspicious-link reports
-Mongoose:	Connects the application to MongoDB
-Font Awesome:	Provides icons for navigation and website features
-GitHub:	Version control and group collaboration
-Render:	Cloud deployment and hostingFeatures

1. Homepage
The LinkHop homepage provides an introduction to the application and its purpose.

It includes:
- An original LinkHop logo designed by the team.
- A responsive navigation bar.
- A split-screen homepage designed with Bootstrap.
- An introduction to LinkHop's cybersecurity features.
- A suspicious-link submission form.
2. Suspicious Link Submission
Users can submit suspicious links using the form on the homepage.

The form collects:
- Suspicious URL: The website address the user wants to investigate.
- Lure Category: The suspected type of phishing attempt, such as Package Delivery, Banking, Account Verification, or Other.
- Description: Optional information about the suspicious message or link.


3. Reports Dashboard
The Reports page allows users to review previously submitted suspicious links.
The dashboard retrieves saved records from MongoDB and displays them through an EJS view.
This feature helps users keep track of suspicious URLs submitted through the application.

4. Planned Link Analysis Features
As LinkHop continues to develop, the application aims to support:
- HTTP redirect-chain analysis.
- Redirect-count tracking.
- Destination IP address identification.
- SSL/TLS certificate inspection.
- Rule-based cybersecurity risk scoring.
  
These features are intended to help users better understand potential warning signs associated with suspicious URLs. A risk score is an estimate and does not guarantee that a website is safe or malicious.
