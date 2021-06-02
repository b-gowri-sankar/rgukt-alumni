import { useState, useEffect } from 'react';
import { storage } from '../../config/fbConfig';

// const db = firebase.firestore();

const Storage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = storage.ref(file.name);    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default Storage;