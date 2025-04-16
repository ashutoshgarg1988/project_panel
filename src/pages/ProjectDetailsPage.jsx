/**
 * ProjectDetailsPage.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: To handle route for project details page.
 * */
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';
import { useProjects } from '../store/ProjectContext';
import { useEffect, useState } from 'react';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { projects } = useProjects();
  const [projectDetail, setprojectdetail] = useState({});

  useEffect(() => {
    const project = projects.find(proj => proj.projectID === id);
    if (project) {
      setprojectdetail(project);
    } else {
      console.error(`Project with ID ${id} not found`);
    }
  }, [id]);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Project Details: {id}</h2>
      {/* <p>Project details and edit form for <span className='font-bold italic'>{id}</span> go here.</p> */}
      { projectDetail && <ProjectDetails projectDetail={projectDetail}/> }
    </div>
  );
};
export default ProjectDetailsPage;