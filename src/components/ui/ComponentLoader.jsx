/**
 * ComponentLoader.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 16/Apr/2025
 * Last Updated: 16/Apr/2025
 * 
 * Description: To show Loader while fetching data, dynamic component can be used any where.
 * Takes 2 props height and size in pixel of loader.
 * */
import { CircularProgress } from "@mui/material";
const ComponentLoader = ({componentHeight, loaderSize}) => {
    return (
      <div className={`flex justify-center items-center w-full`} style={{ height: componentHeight }}>
        <CircularProgress size={loaderSize} />
      </div>
    )
};
export default ComponentLoader;