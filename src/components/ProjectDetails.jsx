/**
 * ProjectDetails.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: To show Project details
 * */
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import { formatDate } from '../utils/utility';
const ProjectDetails = ({projectDetail}) => {
  const navigate = useNavigate();

  /** Handle Edit click */
  const handleEditClick = (rowData) => {
    navigate(`/projects/${rowData.projectID}/edit`, {
      state: rowData,
    });
  }

  return (
    <div className="max-w-3xl p-6">
      {/* Project Info */}
      <div className="space-y-4 text-gray-800">
        <div className="flex">
          <div className="w-40 font-medium">Project ID</div>
          <div className="flex-1">{projectDetail.projectID}</div>
        </div>
        <div className="flex">
          <div className="w-40 font-medium">Project Name</div>
          <div className="flex-1">{projectDetail.projectName}</div>
        </div>
        <div className="flex items-start">
          <div className="w-40 font-medium">Description</div>
          <div className="flex-1">
            <p>{projectDetail.description}</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-40 font-medium">Start Date</div>
          <div className="flex-1">{formatDate(projectDetail.startDate)}</div>
        </div>
        <div className="flex">
          <div className="w-40 font-medium">End Date</div>
          <div className="flex-1">{formatDate(projectDetail.endDate)}</div>
        </div>
        <div className="flex">
          <div className="w-40 font-medium">Project Manager</div>
          <div className="flex-1">{projectDetail.manager}</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={() => navigate(ROUTES.PROJECTS)}>Back</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={()=> handleEditClick(projectDetail)}>Edit</button>
      </div>
    </div>
  );
};

export default ProjectDetails;