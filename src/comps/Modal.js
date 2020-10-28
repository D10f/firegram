import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = e => {
    if (e.target.className === 'backdrop'){
      setSelectedImg(null)
    }
  }

  return (
    <motion.aside className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg} alt="enlarged image"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.aside>
  )
}

export default Modal
