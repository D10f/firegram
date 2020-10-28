import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {

  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const allowedTypes = ['image/png', 'image/jpeg']

  const changeHandler = (e) => {
    const selected = e.target.files[0]

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected)
      setError(null)
    } else {
      setFile(null)
      setError('Select a valid image (png or jpeg file types accepted).')
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler}/>
        <span>+</span>
      </label>
      <output className="output">
        { error && <span className="error">{ error }</span> }
        { file  && <span>{ file.name }</span> }
        { file  && <ProgressBar file={file} setFile={setFile} /> }
      </output>
    </form>
  )
}

export default UploadForm
