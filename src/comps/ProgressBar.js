import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {

  const { progress, url } = useStorage(file)

  // listen to changing value of url and set 'file' to null when there's a download url.
  useEffect(() => {
    if (url) {
      setFile(null)
    }
  }, [url])

  return (
    <motion.progress className="progress-bar" value={progress} max="100"
    ></motion.progress>
  )
}

export default ProgressBar
