import { fire } from '../../config/fbConfig';
import { useState, useEffect } from 'react';

const UniqueDocument = (collection, id) => {
    
    const [doc, setDoc] = useState(null);
    useEffect(() => {
        fire.collection(collection)
            .doc(id).get().then((snapshot) => {
                console.log(snapshot)
                let document = {
                    ...snapshot.data(),
                    id: snapshot.id
                }
                // console.log(snapshot.data())
                setDoc(document);
            });
        // this is a cleanup function that react will run when
        // a component using the hook unmounts
      }, [collection, id]);

    console.log(doc)
    return { doc }
}

export default UniqueDocument;