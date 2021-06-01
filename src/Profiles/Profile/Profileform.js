import classes from './Profileform.module.css'
import React from "react";
// import { app } from "./base";

import { fire,storage } from '../../config/fbConfig'

// const db = app.firestore();

const Profileform = ()=>{
  const [fileUrl, setFileUrl] = React.useState(null);
//   const [users, setUsers] = React.useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(fileUrl)
    const username = e.target.username.value;
    const branch = e.target.branch.value;
    const company = e.target.company.value;
    const biography = e.target.biography.value;
    await fire.collection("profiles").add({
      name: username,
      avatar: fileUrl,
        branch: branch,
        company: company,
      biography: biography
      
    });
    console.log("The Profile is Created")
  };


  return (
    <div className={classes.Container}>
      <form onSubmit={onSubmit}>
        <div className={classes.inputfield}>
          <input className={classes.inputField} type="file" onChange={onFileChange} />
        </div>
        <div className={classes.inputfield}>
        <input  className={classes.inputField} type="text" name="username" placeholder="NAME" />
        </div>
        <div className={classes.inputfield}>
        <input  className={classes.inputField} type="text" name="branch" placeholder="branch" />
        </div>
        <div className={classes.inputfield}>
        <input className={classes.inputField}  type="text" name="company" placeholder="company" />

        </div>
        
        
        <textarea type='text' name='biography' placeholder='biography' />
        <button className={classes.button}>Submit</button>
      </form>
    </div>
  );
}

export default Profileform;