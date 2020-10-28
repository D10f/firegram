import React, { useState } from 'react';

import Title from './comps/Title';
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'
import Modal from './comps/Modal'

function App() {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <main className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </main>
  );
}

export default App;
