import { useState, useEffect } from 'react'
import { cloudStorage, cloudFirestore, cloudTimestamp } from '../firebase/config'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // reference that will be used in Firebase Storage and Firestore
    const storageRef = cloudStorage.ref(file.name)
    const collectionRef = cloudFirestore.collection('images')

    // upload the file, listening for changes in the progress
    storageRef
      .put(file)
      .on('state_changed', (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)
      }, (err) => {
        setError(err)
      }, async () => {
        /*
        This function will run once when the upload is complete.
        and the first thing it'll do is wait for the url for the file.
        */
        const url = await storageRef.getDownloadURL()

        const createdAt = cloudTimestamp()
        collectionRef.add({ url, createdAt})

        setUrl(url)
      })

  }, [file])

  return { progress, url, error }
}

export default useStorage
