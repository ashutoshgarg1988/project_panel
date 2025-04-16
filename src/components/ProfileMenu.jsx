/**
 * ProfileMenu.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 16/Apr/2025
 * Last Updated: 16/Apr/2025
 * 
 * Description: 
 * To show profile menu for user with options like Profile, Fullscreen and Logout.
 * (Option Profile is not implemented yet)
 * */
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { toggleFullScreen } from "../utils/utility";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setOpen(!open)} className="flex items-center space-x-2 px-4 text-gray-700 rounded">
        <span>Product Owner</span>
        <AccountCircleIcon />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
          <div className="px-4 py-2 text-sm font-semibold text-gray-600 border-b">
            Hello! Product Owner
          </div>
          <ul className="text-sm text-gray-700">
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center gap-2">
              <AccountCircleIcon fontSize="small" /> Profile
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center gap-2" onClick={() => toggleFullScreen()}>
              <FullscreenIcon fontSize="small" /> Fullscreen
            </li>
            <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer flex items-center gap-2"
              onClick={() => {
                localStorage.setItem("isLoggedIn", false);
                setTimeout(() => {
                  window.location.href = "/";
                }, 500);
              }}
            >
              <LogoutIcon fontSize="small" /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;