# Portfolio

## Project Overview

This portfolio project is a modern, responsive developer portfolio built with React and Vite to showcase my projects, skills, and services. It was developed based on a Figma design conversion. It highlights my approach to clean UI implementation, component architecture, and responsive design.

The goal of this project is to present my work professionally while demonstrating strong frontend engineering practices.

---

## Features

- Fully responsive design 
- Smooth scroll navigation 
- Animated skill background  
- Project showcase with dynamic routing  
- Service spotlight with scroll-based interaction  
- Modern UI with hover and motion effects  
- Scroll management 
- Route-based navigation   
---

##  Tech Stack

### Frontend

- React  
- Vite  
- JavaScript (ES6+)  
- CSS3 
- React Router  
- Framer Motion

### Development Tools

- Git & GitHub  
- VS Code  
- Chrome DevTools  
- Netlify

---

## Project Structure

The project follows a modular and scalable folder structure to keep components, pages, and data well organized.This structure separates **UI components, pages, data, and styles**, making the codebase easier to maintain and scale as new features are added.


src/
┣ components/
┃ ┣ common/
┃ ┃  ┣ Footer.jsx – Site footer component
┃ ┃  ┣ Header.jsx  – Navigation and header section
┃ ┃  ┣ ProjectCard.jsx – Reusable card component for displaying projects
┃ ┃  ┣ ServiceCard.jsx  – Reusable card component for service
┃ ┃  ┗ ScrollToTop.jsx – Utility component to reset scroll position on route change
┃ ┃ 
┃ ┗ layout/ 
┃     ┗  Layout.jsx – Main layout wrapper that includes Header, Footer, and page content
┃ 
┣ pages/
┃ ┣ home/
┃ ┃  ┣ sections/
┃ ┃  ┃  ┣ About.jsx – About section of the homepage
┃ ┃  ┃  ┣ Contacts.jsx – Contact section
┃ ┃  ┃  ┣ Hero.jsx – Hero/intro section
┃ ┃  ┃  ┣ Projects.jsx – Displays selected projects
┃ ┃  ┃  ┣ Services.jsx – Services offered
┃ ┃  ┃  ┗ Skills.jsx – Skills section with animated background icons
┃ ┃  ┃ 
┃ ┃  ┗ Home.jsx – Assembles all homepage sections
┃ ┃ 
┃ ┗projectDetails/
┃    ┣ sections/
┃    ┃   ┣ OtherProject.jsx – Displays other related projects
┃    ┃   ┣ ProjectFeatures.jsx – Highlights key project features
┃    ┃   ┗ ProjectImages.jsx – Displays project screenshots
┃    ┃ 
┃    ┗ ProjectDetails.jsx – Dynamic page showing full details(Assembles all sections) of a selected project
┃ 
┣ data/
┃  ┣ project.js – Contains project data used across the portfolio
┃  ┣ service.js – Data for services displayed in the services section
┃  ┗ skillIcons.js – List of skill icons used for background animation
┃ 
┣ style/
┃  ┣ app.css – Component and section-specific styles
┃  ┗ global.css – Global styles, resets, and shared variables
┃ 
┣ App.jsx – Main application component that defines routes
┃ 
┗ main.jsx – Entry point that mounts the React application

---

##  Live Link

https://olajidejamiu.netlify.app/

---

##  Installation & Setup

### 1️ Clone the repository
```bash
git clone https://github.com/jaysquare24/my-portfolio
cd my-portfolio

```
----

### 2 Install Dependencies

- npm install

### 3 Start Development 

- npm run dev
- App will run on  http://localhost:5173

---

## Future Enhancements

- Add dark/light theme toggle 
- Improve accessibility (WCAG)  
- Add blog section 
- Performance optimization 

---

## Let's Connect

If you have a project in mind or would like to collaborate, feel free to reach out!


## Author
**Jamiu Olajide**  
Frontend Developer 

- GitHub: https://github.com/jaysquare24  
- LinkedIn: https://www.linkedin.com/in/jamiu-olajide-795444185
- Portfolio: https://olajidejamiu.netlify.app/ 

---

## Acknowledgements
- Icons8 website  
- Tinypng website
- shortpixel website

