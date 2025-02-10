# React Rich Text Editor & Counter App

## 🚀 Overview
This is a **React-based web application** featuring a counter, a user data form, and a rich text editor. It leverages **Material UI, Redux Toolkit, React Router, and React Spring** for a smooth UI and state management.

## ✨ Features
- **Counter Component**  
  - Increment, decrement, and reset functionality.  
  - Background color changes dynamically as count increases.

- **User Data Form**  
  - Collects user details (name, address, email, phone).
  - Auto-generates a unique user ID.
  - Saves data to **local storage** & Redux.
  - Alerts users about unsaved changes.

- **Rich Text Editor**  
  - Allows text formatting (bold, italic, underline, lists).
  - Stores and persists formatted text.
  
- **Additional Features (Optional)**  
  - User authentication (Google Sign-In) with private/public routes.
  - Dashboard visualization using **React Charts**.

## 🛠 Tech Stack
- **Frontend**: React, TypeScript, Material UI, Redux Toolkit, React Spring
- **State Management**: Redux Toolkit (RTK) & Local Storage
- **Routing**: React Router
- **Styling**: Material UI

## 📂 Folder Structure
```
📦 project-folder
├── 📂 src
│   ├── 📂 components
│   │   ├── Counter.tsx
│   │   ├── UserForm.tsx
│   ├── 📂 slices
│   │   ├── userSlice.ts
│   ├── 📂 store
│   │   ├── store.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles.css
├── 📜 package.json
├── 📜 README.md
```

## 🚀 Installation & Setup
### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2. Install Dependencies**
```bash
npm install  # or yarn install
```

### **3. Run the Application**
```bash
npm start  # or yarn start
```

### **4. Build for Production**
```bash
npm run build  # or yarn build
```

## 🌍 Deployment
### **1. Deploy to Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

### **2. Deploy to Netlify**
- Drag & drop the `build` folder into Netlify.

### **3. Deploy to GitHub Pages**
```bash
npm install gh-pages --save-dev
npm run deploy
```

## 📝 License
This project is open-source and free to use.

---

🔥 **Developed with ❤️ using React, TypeScript & Redux!** 🚀

