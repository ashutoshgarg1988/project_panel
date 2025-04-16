import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { formatDateForInput } from '../utils/utility';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/constants';

const AddProjectForm = ({existingData}) => {
  const navigate = useNavigate();
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
    projectID: Yup.string().required('Required'),
    projectName: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    startDate: Yup.date().required('Required'),
    endDate: Yup.date().required('Required'),
    manager: Yup.string().required('Required'),
  });

  const handleSubmit = (values) => {
    toast.success("Project details saved successfully!");
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
          <label htmlFor="projectID" className="w-40 font-medium">Project ID</label>
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
          <label htmlFor="projectName" className="w-40 font-medium">Project Name</label>
          <div className="w-full">
            <Field
              name="projectName"
              type="text"
              className="border border-gray-300 px-3 py-1 rounded w-full"
            />
            <ErrorMessage name="projectName" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* Description */}
        <div className="flex items-start">
          <label htmlFor="description" className="w-40 font-medium pt-2">Description</label>
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
          <label htmlFor="startDate" className="w-40 font-medium">Start Date</label>
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
          <label htmlFor="endDate" className="w-40 font-medium">End Date</label>
          <div className="w-full">
            <Field
              name="endDate"
              type="date"
              className="border border-gray-300 px-3 py-1 rounded w-full"
            />
            <ErrorMessage name="endDate" component="div" className="text-red-500 text-sm" />
          </div>
        </div>

        {/* Project Manager */}
        <div className="flex items-center">
          <label htmlFor="manager" className="w-40 font-medium">Project Manager</label>
          <div className="w-full">
            <Field
              name="manager"
              type="text"
              className="border border-gray-300 px-3 py-1 rounded w-full"
            />
            <ErrorMessage name="manager" component="div" className="text-red-500 text-sm" />
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
