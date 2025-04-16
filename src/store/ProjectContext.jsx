/**
 * ProjectListPage.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: To handle route for project listing page.
 * */
import { createContext, useContext, useEffect, useState } from 'react';

const ProjectContext = createContext();
function createData(projectID, projectName, startDate, endDate, manager, isFavorite, description) {
  return { projectID, projectName, startDate, endDate, manager, isFavorite, description };
}

const rows = [
  createData('project_a', 'Project A', "2024-03-12T10:13:31.068Z", "2025-01-12T10:13:31.068Z", "John Doe", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_b', 'Project B', "2024-06-15T12:53:20.739Z", "2025-02-12T10:13:31.068Z", "Arica Daw", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_c', 'Project C', "2025-01-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "John Doe", true, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_d', 'Project D', "2024-09-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "Richard", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_e', 'Project E', "2025-03-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "John Doe", true, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_f', 'Project F', "2022-03-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "Arica Daw", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_g', 'Project G', "2023-04-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "Richard", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_h', 'Project H', "2023-05-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "Arica Daw", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_i', 'Project I', "2025-03-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "Arica Daw", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_j', 'Project J', "2024-01-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "Richard", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
  createData('project_k', 'Project K', "2025-03-15T12:53:20.739Z", "2025-04-12T10:13:31.068Z", "John Doe", false, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"),
];

// Provider component
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(rows);
  const [isLoadingState, setIsLoadingState] = useState(false);
  const [favoriteProjects, setFavoriteProjects] = useState([]);

  // Create and update favoriteProjects whenever projects change
  useEffect(() => {
    const favs = projects.filter((project) => project.isFavorite);
    setFavoriteProjects(favs);
  }, [projects]);

  // Optional: function to toggle isFavorite
  const toggleFavorite = (projectID) => {
    const updated = projects.map((project) =>
      project.projectID === projectID
        ? { ...project, isFavorite: !project.isFavorite }
        : project
    );
    setProjects(updated);
  };

  // Add a new project
  const addProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  // Update an existing project by ID
  const updateProject = (updatedData, delayTimer) => {
    setIsLoadingState(true);
    if (!delayTimer) delayTimer = 0;
    setTimeout(() => {
      setIsLoadingState(false);
      const updatedProjects = projects.map((project) =>
        project.projectID === updatedData.projectID
          ? { ...project, ...updatedData }
          : project
      );
      setProjects(updatedProjects);
    }, delayTimer);
  };

  // Delete a project by ID
  const deleteProject = (projectID) => {
    const filtered = projects.filter((project) => project.projectID !== projectID);
    setProjects(filtered);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        favoriteProjects,
        toggleFavorite,
        addProject,
        updateProject,
        deleteProject,
        isLoadingState
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// Custom hook for using the context
export const useProjects = () => useContext(ProjectContext);