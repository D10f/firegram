import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {

  const { docs } = useFirestore('images')

  return (
    <section className="image-grid">
      { docs && docs.map(doc => (
        <motion.article className="image-grid__container" key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img className="image-grid__image" src={doc.url} alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.article>
      )) }
    </section>
  )
}

export default ImageGrid
