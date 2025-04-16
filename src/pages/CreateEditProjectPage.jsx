/**
 * CreateEditProjectPage.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: To show the component for Edit or Add based on user click.
 * */
import { useLocation } from "react-router-dom";
import AddProjectForm from "../components/AddProjectForm";

const CreateEditProject = ({type}) => {
  const location = useLocation();
  const editData = location.state;
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">{type === 'edit' ? 'Edit Project' : 'Create New Project'}</h2>
      {type === 'edit' ? <AddProjectForm existingData={editData}/> : <AddProjectForm />}
    </div>
  );
};

export default CreateEditProject;