// components/ImagePopup.js

import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    maxWidth: '60%',
    margin: 'auto',
    height: 'fit-content',
    zIndex: '9999',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '9999',
  },
}

Modal.setAppElement('#__next')

const ImagePopup = ({ imageUrl, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Popup"
      style={customStyles}
    >
      <img src={imageUrl} alt="Popup Image" className="w-full" />
    </Modal>
  )
}

export default ImagePopup
