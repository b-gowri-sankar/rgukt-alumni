import React, {useState } from "react";
// import { fire,storage } from "../config/fbConfig";
import classes from './Images.module.css';
import ProgressBar from './ProgressBar';
import ImageGrid from './ImageGrid';
import Modal from './Modal';

function App() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const types=['image/png', 'image/jpeg', 'image/jpg']

  const onSubmit = () => {
    
  }

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null)
    }
    else {
      setFile(null);
      setError("Please select an image file")
    }

  }
 
  return (
    <div className={classes.Images}>
      <div>
        <h1 className={classes.thetitle}> The RGUKT ALUMNI</h1>
      </div>
      <form onSubmit={onSubmit} className={classes.imageform}>
        <h6>click here </h6>
      <label className={classes.label__name}>
        <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
      </form>
      <div className={classes.output}>
          {error &&<div className={classes.error}>{error}</div>}
        {file && <div> {file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
        <ImageGrid setSelectedImg={ setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={ setSelectedImg }/>
      }
      </div>
      
    </div>
  );
}

export default App;