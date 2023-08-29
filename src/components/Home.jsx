import React, { useEffect, useState, useReducer } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import Modal from '@mui/material/Modal';

import itemData from '../ItemData';
import ImageCard from "./ImageCard";

function HomePage() {
  
  // Initial Import of Images (needs to be sent into a React Context)
  const [images,setImages] = useState([])
  const accessMetaData = {}

  // Created a Modal for opening to image to setup Actions
  const [open, setOpen] = useState(false);
  const [selectedImage,setSelectedImage] = useState();
  
  
  const handleOpen = (evt) => {
    setOpen(true);
    console.log(accessMetaData[evt.target.alt])
    setSelectedImage(accessMetaData[evt.target.alt])
  }

  const handleClose = () => setOpen(false);

  
  useEffect(() => {

    // Setting up an easier way to access elements based on id one-time loading
    // This could be lazy loaded as well
    // Also get the data in a paginated way 
    itemData.forEach(item => {
      accessMetaData[item["title"]] = item;
    })

    // When starting to implement search
    // Create another debouncing algorrithm to make search every 500ms
    // of Input change to backend instead of search on frontend 
    // (This'll be a more secure and faster way with pagination)


  })

  


  return (
  <div>
    
    <ImageList sx={{ width: "100%", height: "100%" }}  cols={3} rowHeight={400}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?fit=crop&auto=format`}
            srcSet={`${item.img}?fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={handleOpen}
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ImageCard selectedImage={selectedImage}></ImageCard>
      
      
      </Modal>

  </div>
  )
}

export default HomePage;
