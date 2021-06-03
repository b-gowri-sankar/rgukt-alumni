import classes from './Profileform.module.css'
import React, { useState} from "react";
// import { app } from "./base";
import Progress from '../../Images/Progress'

import { fire } from '../../config/fbConfig'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

// const db = app.firestore();

const Profileform = (props) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = React.useState(null);
  const [value, setValue] = useState(true);
//   const [users, setUsers] = React.useState([]);
  const types=['image/png', 'image/jpeg', 'image/jpg']

  const onFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null)
    }
    else {
      setFile(null);
      setError("Please select an image file")
    }
    // const storageRef = storage.ref();
    // const fileRef = storageRef.child(file.name);
    // await fileRef.put(file);
    // setFileUrl(await fileRef.getDownloadURL());
    // console.log('The File is Created')
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
      biography: biography,
      createdAt: new Date()
      
    });
    // console.log("The Profile is Created")
    props.history.push('/profiles')
  };

  console.log(fileUrl)
  console.log(value)
 
  const auth = props.auth;
  if (!auth.uid)
        return <Redirect to='/signin'/>
  return (
    <div className={classes.Container}>
      <form onSubmit={onSubmit}>
        <div className={classes.inputfield}>
          <input className={classes.inputField} type="file" onChange={onFileChange} required/>
        </div>
        {error &&<div className={classes.error}>{error}</div>}
        {file && <div> {file.name}</div>}
        {file && <Progress file={file} setFile={setFile} setFileUrl={setFileUrl} setValue={ setValue }/>}

        <div className={classes.inputfield}>
        <input  className={classes.inputField} type="text" name="username" placeholder="NAME" required/>
        </div>
        <div className={classes.inputfield}>
        <input  className={classes.inputField} type="text" name="branch" placeholder="branch" required/>
        </div>
        <div className={classes.inputfield}>
        <input className={classes.inputField}  type="text" name="company" placeholder="company" required/>

        </div>
        
        
        <textarea type='text' name='biography' placeholder='biography' />
        <button className={classes.button} disabled={value}>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth
  }
}

export default connect(mapStateToProps)(Profileform);