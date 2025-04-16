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
  