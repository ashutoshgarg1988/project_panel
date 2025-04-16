import React, { useState } from 'react';
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function ActionButtons ({ rowData, onEditClickCallBack, onDeleteClickCallBack, onFavoriteClickCallBack }) {
    const [isFav, setIsFav] = useState(rowData.isFavorite);
    const onEditClick = (event) => {
        event.stopPropagation();
        onEditClickCallBack && onEditClickCallBack();
    };

    // const onDeleteClick = (event) => {
    //     event.stopPropagation();
    //     onDeleteClickCallBack && onDeleteClickCallBack();
    // };

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
            {/* <IconButton aria-label="delete" onClick={onDeleteClick}>
                <DeleteIcon color="primary" fontSize="small"/>
            </IconButton> */}
        </div>
    )
}