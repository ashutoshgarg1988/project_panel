/**
 * Sidebar.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: For side bar functionality
 * */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { ROUTES } from '../constants/constants';
import { useProjects } from '../store/ProjectContext';
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { favoriteProjects } = useProjects();

  return (
    <div className="w-54 min-h-screen bg-violet-50 border-r shadow-sm">
      {/* Logo */}
      <div className="px-6 py-3 border-b flex items-center text-2xl font-bold cursor-pointer" onClick={() => navigate(ROUTES.PROJECTS)}>
        <span className="text-black">PROJECT</span>
        <span className="text-blue-600 ml-1">LIST</span>
      </div>

      {/* Menu */}
      <div className="px-6 py-2 font-bold">Favorite Projects</div>
      <nav className="py-4 flex flex-col gap-1 px-2">
        {favoriteProjects.length > 0 && favoriteProjects.map((item) => {
          const isActive = location.pathname === (ROUTES.PROJECTS + '/' + item.projectID);
          return (
            <Link
              key={item.projectName}
              to={ROUTES.PROJECTS + '/' + item.projectID}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all ${
                isActive
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="material-symbols-outlined"><AcUnitIcon/></span>
              <span>{item.projectName}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;