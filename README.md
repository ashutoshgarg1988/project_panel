## Admin panel for Projects

A modern React application bundled with Webpack, featuring custom configuration for optimized development and production builds.


## Tech Stack

- ⚛️ React
- 🔧 Webpack
- 🎨 Material UI (MUI)
- 💅 TailwindCSS
- 📜 Babel
- 🧼 ESLint
- 🛠️ Other tooling: React Router, custom hooks, etc.

## Getting Started

## 1. Clone the repo
git clone https://github.com/ashutoshgarg1988/adminpanel.git

## 2. Install dependencies
npm install

## 3. check .babelrc at root folder if its not there create one and add below code in it,
{
    "presets": [
      "@babel/preset-env",
      ["@babel/preset-react", { "runtime": "automatic" }]
    ]
}

## 4. Start development server
npm run start
This starts the webpack dev server at http://localhost:3000

## 5. Build for production
npm run build
Outputs optimized files in the /dist directory.

## 6. Project Structure
├── public/             # Static assets and HTML template
├── src/
│   ├── components/     # Reusable components
│   ├── constants/      # project constanst variable decalariton
│   ├── pages/          # Goute-based page components
│   ├── store/          # Context/custom hooks for managing global state
│   ├── utils/          # custom utility functions
│   ├── App.jsx         # Main app wrapper
│   └── index.jsx       # ReactDOM entry point
├── .babelrc
├── webpack.config.js
├── postcss.config.js
├── tailwind.config.js
├── package.json
└── README.md

## 7. Creator info
Ashutosh Garg