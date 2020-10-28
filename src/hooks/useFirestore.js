import { useState, useEffect } from 'react'
import { cloudFirestore } from '../firebase/config'

const useFirestore = (collection) => {

  const [ docs, setDocs] = useState([])

  // establish a connection to the firestore collection and listen for changes,
  // represented by onSnapshot.
  useEffect(() => {
    const unsub = cloudFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        let documents = []

        snapshot.forEach(doc => {
          documents.push({
            ...doc.data(),
            id: doc.id
          })
        })

        setDocs(documents)
      })

    return () => unsub()

  }, [collection])

  return { docs }
}

export default useFirestore
