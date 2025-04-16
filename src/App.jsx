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

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="flex">
        {sidebarOpen && <Sidebar />}
        <div className="flex flex-col flex-1">
          {/* Topbar */}
          <div className="bg-slate-200 px-1 py-4 font-bold">
            <MenuIcon onClick={()=> setSidebarOpen(!sidebarOpen)} className="cursor-pointer"/>
            <span className="px-2">TOPBAR</span>
          </div>
          {/* Main content */}
          <div className="flex-1 p-4 bg-gray-100">
            <Routes>
              <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.PROJECTS} replace />} />
              <Route path={ROUTES.PROJECTS} element={<ProjectListPage />} />
              <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetailsPage />} />
              <Route path={ROUTES.CREATE_PROJECT} element={<CreateEditProjectPage type={'new'}/>} />
              <Route path={ROUTES.Edit_PROJECT} element={<CreateEditProjectPage type={'edit'}/>} />
            </Routes>
            <ToastContainer position="bottom-right" autoClose={3000} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;