/**
 * ActionButtons.jsx
 * 
 * Author: Ashutosh Garg
 * Created: 15/Apr/2025
 * Last Updated: 15/Apr/2025
 * 
 * Description: To show Project details
 * */
import { useState } from 'react';
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useProjects } from '../../store/ProjectContext';
import { toast } from 'react-toastify';

export default function ActionButtons ({ rowData, onEditClickCallBack, onDeleteClickCallBack, onFavoriteClickCallBack }) {
    const [isFav, setIsFav] = useState(rowData.isFavorite);
    const {deleteProject} = useProjects();
    const onEditClick = (event) => {
        event.stopPropagation();
        onEditClickCallBack && onEditClickCallBack();
    };

    const onDeleteClick = (event) => {
        event.stopPropagation();
        onDeleteClickCallBack && onDeleteClickCallBack();
        deleteProject(rowData.projectID);
        toast.success("Project deleted successfully!")
    };

    const onFavoriteClick = (event) => {
        setIsFav(prev => !prev);
        event.stopPropagation();
        onFavoriteClickCallBack && onFavoriteClickCallBack();
    };

    return (
        <div>
            <IconButton aria-label="favorite" onClick={onFavoriteClick}>
                {isFav ?
                    <BookmarkIcon color="primary" fontSize="medium"/>
                    : <BookmarkBorderIcon color="primary" fontSize="medium"/>
                }
            </IconButton>
            <IconButton aria-label="edit" onClick={onEditClick}>
                <EditIcon color="primary" fontSize="small"/>
            </IconButton>
            <IconButton aria-label="delete" onClick={onDeleteClick}>
                <DeleteIcon color="primary" fontSize="small"/>
            </IconButton>
        </div>
    )
}