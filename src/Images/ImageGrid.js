import classes from './ImageGrid.module.css';
import React from 'react'
import useFirestore from './hooks/useFirestore';

import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    
    const { docs } = useFirestore('images')

    console.log("this is docs ",docs)

    return (
        // <div className={classes.imageGrid}>
        //     {docs && docs.map(doc => (
        //         <div className={classes.imageWrap} key={doc.id}>
        //             <img src={doc.url} alt='uploaded pic' />
        //         </div>
        //     ))}
        // </div>
        <main className={classes.grid}>
        {docs && docs.map(doc => {
            return (
                <motion.article id={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1 }}
                    layout
                >
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{delay:1}}
                        src={doc.url} alt='uploaded pic' />
              </motion.article>
            );
          })}
      </main>
    )

}

export default ImageGrid;