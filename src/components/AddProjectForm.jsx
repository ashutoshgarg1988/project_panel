/**
 * AddProjectForm.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 16/Apr/2025
 * 
 * Description: 
 * To Add or Edit any project, existingData props receives values 
 * in case of Edit project basis of this data I handle add/edit conditions.
 * */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { formatDateForInput } from '../utils/utility';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/constants';
import { useProjects } from '../store/ProjectContext';

const AddProjectForm = ({existingData}) => {
  const navigate = useNavigate();
  const {addProject, updateProject, projects} = useProjects();
  const editInitialValues = {
    projectID: (existingData && existingData.projectID) || "",
    projectName: (existingData && existingData.projectName) || "",
    description: (existingData && existingData.description) || "",
    startDate: (existingData && formatDateForInput(existingData.startDate)) || "",
    endDate: (existingData && formatDateForInput(existingData.endDate)) || "",
    manager: (existingData && existingData.manager) || "",
  };

  const initialValues = existingData ? editInitialValues : {
    projectID: '',
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
    manager: '',
  };

  const validationSchema = Yup.object({
    projectID: Yup.string().required('Project ID is required'),
    projectName: Yup.string().required('Project name is required'),
    description: Yup.string().required('Description is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date().required('End date is required'),
    manager: Yup.string().required('Manager name is required'),
  });

  const handleSubmit = (values) => {
    let exists = false;
    const projectInfo = {
      projectID: values.projectID,
      projectName: values.projectName,
      description: values.description,
      startDate: values.startDate,
      endDate: values.endDate,
      manager: values.manager,
      isFavorite: false 
    };
    if(existingData) {
      // Check if Project Name already exists in the projects array other than the current project being edited
      exists = projects.some(project => project.projectName.toLowerCase() === values.projectName.toLowerCase() && values.projectName.toLowerCase() !== existingData.projectName.toLowerCase());
    } else {
      // Check if Project ID or name already exists in the projects array if user is trying to create a new project
      exists = projects.some(
        project =>
          project.projectID.toLowerCase() === values.projectID.toLowerCase() ||
          project.projectName.toLowerCase() === values.projectName.toLowerCase()
      );
    }
    if(exists) {
      toast.error("Project ID or Project Name already exists!");
      return;
    } else {
      toast.success("Project details saved successfully!");
    }
    existingData ? updateProject(projectInfo, 1500) : addProject(projectInfo, 1500);
    navigate(ROUTES.PROJECTS);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-3xl p-6 space-y-6 text-gray-800">
        {/* Project ID */}
        <div className="flex items-center">
          <label className="w-40 font-medium">Project ID</label>
          <div className="w-full">
            <Field
              name="projectID"
              type="text"
              className="border border-gray-300 px-3 py-1 rounded w-full"
              disabled={existingData ? true : false}
            />
            <ErrorMessage name="projectID" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* Project Name */}
        <div className="flex items-center">
          <label className="w-40 font-medium">Project Name</label>
          <div className="w-full">
            <Field
              name="projectName"
              type="text"
              className="border border-gray-300 px-3 py-1 rounded w-full"
            />
            <ErrorMessage name="projectName" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* Project Manager */}
        <div className="flex items-center">
          <label className="w-40 font-medium">Project Manager</label>
          <div className="w-full">
            <Field
              name="manager"
              type="text"
              className="border border-gray-300 px-3 py-1 rounded w-full"
            />
            <ErrorMessage name="manager" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* Description */}
        <div className="flex items-start">
          <label className="w-40 font-medium pt-2">Description</label>
          <div className="w-full">
            <Field
              as="textarea"
              name="description"
              rows={5}
              className="border border-gray-300 px-3 py-2 rounded w-full"
            />
            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* Start Date */}
        <div className="flex items-center">
          <label className="w-40 font-medium">Start Date</label>
          <div className="w-full">
            <Field
              name="startDate"
              type="date"
              className="border border-gray-300 px-3 py-1 rounded w-full"
            />
            <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* End Date */}
        <div className="flex items-center">
          <label className="w-40 font-medium">End Date</label>
          <div className="w-full">
            <Field
              name="endDate"
              type="date"
              className="border border-gray-300 px-3 py-1 rounded w-full"
            />
            <ErrorMessage name="endDate" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center space-x-4 pt-2">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {existingData ? 'Update' : 'Create' }
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddProjectForm;
