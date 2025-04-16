/**
 * utility.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: To handle utility functions for project.
 * */

/** Utility function to convert string to date */
export const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
};

/** Utility function to set date in date field */
export const formatDateForInput = (isoString) => {
    if(isoString) {
        return new Date(isoString).toISOString().split('T')[0];
    } else {
        return '';
    }
  };
  