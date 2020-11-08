import React from 'react'
import '../styles/Modal.css'


function Modal({isOpen, setIsOpen, selectedImage, setSelectedImage}) {

  const handleClick = () => {
    setIsOpen(false)
    setSelectedImage(null)
  }
  
  return (
    <div className={isOpen? "modal open" : "modal"}  onClick={handleClick}>
        <div className={isOpen? "modal_container open" : "modal_container"}>
          <img className="modal_image" src={selectedImage?.urls?.regular} alt=""/>
          <div className="modal_infoBox">
        <p className="modal_author"><i className="far fa-user"></i> {selectedImage?.user?.name}</p>
        <p className="modal_placeInfo"><i className="fas fa-map-marker-alt"></i> {selectedImage?.user?.location ? selectedImage.user.location : "Unknown Location"}</p>
        </div>
        </div>
        
      </div>
  )
}

export default Modal




