import React, {useEffect} from 'react';
import useStorage from './hooks/useStorage';
import classes from './ProgressBar.module.css'

import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
    
    const { url, progress } = useStorage(file);

    console.log("this is url",url)
    
    // console.log(progress, url);

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    },[url, setFile])


    return (
        <motion.div className={classes.progressBar}
            initial={{ width: 0 }}
            animate ={{ width: progress + '%'}}
        >
        </motion.div>
    )

}

export default ProgressBar;