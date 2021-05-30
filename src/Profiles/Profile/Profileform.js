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
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={onFileChange} />
        <input type="text" name="username" placeholder="NAME" />
        <input type="text" name="branch" placeholder="branch" />
        <input type="text" name="company" placeholder="company" />
        <input type="text" name="biography" placeholder="biography" />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Profileform;