/**
 * LoginPage.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 16/Apr/2025
 * Last Updated: 16/Apr/2025
 * 
 * Description: To show the Login component.
 * */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/constants";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const onLoginClick = () => {
    localStorage.setItem("isLoggedIn", true);
    navigate(ROUTES.PROJECTS);
  }

  return (
    <div className="bg-blue-700 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-8 text-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-1">
        <span className="text-gray-800 ">PR</span>
          <span className="text-gray-800 italic">OJ</span>
          <span className="text-gray-800">ECT</span>{" "}
          <span className="text-blue-600 font-semibold">PANEL</span>
        </h1>
        <p className="text-sm text-blue-700 mb-6">Log in to your account</p>

        {/* Form */}
        <form className="space-y-4">
          <div className="text-left">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative text-left">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer select-none" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-md transition" onClick={onLoginClick}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;