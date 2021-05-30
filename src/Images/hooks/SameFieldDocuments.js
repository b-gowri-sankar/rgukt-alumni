import { useState, useEffect } from 'react';
import { fire } from '../../config/fbConfig';

const SameFieldDocuments = (collection, id) => {
    const [docs, setDocs] = useState([]);
  
    console.log(id)

    useEffect(() => {
      const unsub = fire.collection(collection).where('id','==',id)
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
              documents.push({ ...doc.data(), key_id: doc.id });
              console.log(doc.data())
          });
          setDocs(documents);
        });
  
      return () => unsub();
      // this is a cleanup function that react will run when
      // a component using the hook unmounts
    }, [collection, id]);
  
    console.log('we are in samefield document', docs)
    return { docs };
  }
  
  export default SameFieldDocuments;