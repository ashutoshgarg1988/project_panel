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

export const toggleFullScreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      // Exit fullscreen
      const element = document;
      if (element.exitFullscreen) {
        element.exitFullscreen();
      } else if (element.mozCancelFullScreen) { // Firefox
        element.mozCancelFullScreen();
      } else if (element.webkitExitFullscreen) { // Chrome, Safari and Opera
        element.webkitExitFullscreen();
      } else if (element.msExitFullscreen) { // IE/Edge
        element.msExitFullscreen();
      }
    } else {
      // Enter fullscreen
      // const element = document.documentElement as HTMLElement;
      const element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
      }else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
      }  else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
      }
    }
}
  