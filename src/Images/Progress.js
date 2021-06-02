import React, {useEffect} from 'react';
import Storage from './hooks/Storage';
import classes from './ProgressBar.module.css'

import { motion } from 'framer-motion';

const Progress = ({ file, setFile, setFileUrl, setValue }) => {
    
    const { url, progress } = Storage(file);
    
    // console.log(progress, url);

    useEffect(() => {
        if (url) {
            setFile(null)
            setFileUrl(url)
            setValue(false)
        }
    },[url, setFile, setFileUrl, setValue])


    return (
        <motion.div className={classes.progressBar}
            initial={{ width: 0 }}
            animate ={{ width: progress + '%'}}
        >
        </motion.div>
    )

}

export default Progress;