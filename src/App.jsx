/**
 * App.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: Main component of project which handles routes and other components init.
 * */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import CreateEditProjectPage from './pages/CreateEditProjectPage';
import { ROUTES } from './constants/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ProfileMenu from './components/ProfileMenu';
import ComponentLoader from './components/ui/ComponentLoader';
import { useProjects } from './store/ProjectContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const {isLoadingState} = useProjects();
  return (
    <BrowserRouter>
      <div className="flex">
        {sidebarOpen && <Sidebar />}
        <div className="flex h-dvh flex-col flex-1">
          {/* Topbar */}
          <div className="bg-violet-50 px-1 py-4 font-bold border">
            <div className='flex justify-between'>
              <div>
                <MenuIcon onClick={()=> setSidebarOpen(!sidebarOpen)} className="cursor-pointer text-gray-700"/>
                <span className="px-2 text-gray-700">Project Panel</span>
              </div>
              <ProfileMenu/>
            </div>
          </div>
          {/* Main content */}
          <div className="flex-1 p-4 bg-gray-100" style={{ maxHeight: 'calc(100dvh - 60px)' }}>
            {isLoadingState ? 
              <ComponentLoader componentHeight={"calc(100dvh - 90px)"} loaderSize={100}/>
              : <Routes>
                <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.PROJECTS} replace />} />
                <Route path={ROUTES.PROJECTS} element={<ProjectListPage />} />
                <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetailsPage />} />
                <Route path={ROUTES.CREATE_PROJECT} element={<CreateEditProjectPage type={'new'}/>} />
                <Route path={ROUTES.Edit_PROJECT} element={<CreateEditProjectPage type={'edit'}/>} />
              </Routes>
            }
            <ToastContainer position="bottom-right" autoClose={1000} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;